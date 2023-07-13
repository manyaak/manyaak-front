// 타입을 hook의 generic으로 받아오는 구조상 `any` 사용이 불가피하다고 판단
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createStore, useStore } from 'zustand';
import { createContext, useCallback, useContext } from 'react';
import { shallow } from 'zustand/shallow';
import { getDateOfWeek } from '@/utils/date';

interface DateData<T> {
  [infoString: string]: T | undefined;
}

interface CalendarData<Day = unknown, Week = unknown, Month = unknown> {
  day?: DateData<Day>;
  week?: DateData<Week>;
  month?: DateData<Month>;
}

type DayParams = {
  type: 'day';
  date: Date;
};
type WeekParams = {
  type: 'week';
  year: number;
  month: number;
  week: number;
};
type MonthParams = {
  type: 'month';
  year: number;
  month: number;
};

export type CalendarParams = DayParams | WeekParams | MonthParams;

type CalendarStoreSetStateAction<T> = T | ((prev?: T) => T);
export type CalendarStoreDispatch<T> = (
  type: 'day' | 'week' | 'month',
  action: CalendarStoreSetStateAction<T>,
) => void;
export type CalendarStoreDispatchInfo<Day, Week, Month> =
  | (DayParams & {
      newData: CalendarStoreSetStateAction<Day>;
    })
  | (WeekParams & {
      newData: CalendarStoreSetStateAction<Week>;
    })
  | (MonthParams & {
      newData: CalendarStoreSetStateAction<Month>;
    });

const isFunction = <T,>(
  action: CalendarStoreSetStateAction<T>,
): action is (prev?: T) => T => typeof action === 'function';

interface CalendarDataStore extends CalendarData<any, any, any> {
  setRawData: (action: CalendarStoreSetStateAction<CalendarDataStore>) => void;
  setData: CalendarStoreDispatch<DateData<any>>;
}

const calendarDataStore = createStore<CalendarDataStore>()((set) => ({
  setRawData: (action) => {
    set((state) => (isFunction(action) ? action(state) : action));
  },
  setData: (type, action) => {
    set((state) => ({
      ...state,
      [type]: isFunction(action) ? action(state[type]) : action,
    }));
  },
}));

const CalendarDataStoreContext =
  createContext<typeof calendarDataStore>(calendarDataStore);

/**
 * 캘린더 state context provider를 감싸주는 HOC
 * @example```
 * const Calendar = () => {
 *   const setCalendarState = useSetCalendarState();
 *   // ...
 * };
 *
 * export default withCalendarStateProvider(Calendar);
 * ```
 */
export const withCalendarStateProvider = <T extends object>(
  WrappedComponent: (props: T) => JSX.Element,
) => {
  function ComponentWithCalendarStateProvider(props: T) {
    return (
      <CalendarDataStoreContext.Provider value={calendarDataStore}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <WrappedComponent {...props} />
      </CalendarDataStoreContext.Provider>
    );
  }

  return ComponentWithCalendarStateProvider;
};

const getKeyStringFrom = (params: CalendarParams) => {
  switch (params.type) {
    case 'day': {
      const { date } = params;
      return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}` as const;
    }
    case 'week': {
      const date = getDateOfWeek(params.year, params.month, params.week, 0);
      return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}` as const;
    }
    case 'month': {
      return `${params.year}-${params.month}` as const;
    }
    default: {
      throw new Error(
        `[getStringFromCalendarParams] Unexpected Type of Params. Actual: ${
          (params as { type?: string })?.type ?? 'undefined'
        }`,
      );
    }
  }
};

/**
 * 캘린더 state를 사용할 수 있는 hook
 * @param params `CalendarParams`
 * @param equals Re-render가 필요없으면 `true`, 필요하면 `false` 반환. 기본값은 `shallow`
 * @example```
 * type DayInfo = { isSelected: boolean };
 * const [dayState, setDayState] = useCalendarState<DayInfo>({ type: 'day', date });
 * ```
 */
const useCalendarState = <Data,>(
  params: CalendarParams,
  equals: (a: Data | undefined, b: Data | undefined) => boolean = shallow,
) => {
  const store = useContext(CalendarDataStoreContext);
  const keyString = getKeyStringFrom(params);
  const data = useStore(
    store,
    (state) => state[params.type]?.[keyString],
    equals,
  );
  const setStoreData = useStore(store, (state) => state.setData);

  const setData = useCallback(
    (action: CalendarStoreSetStateAction<Data>) => {
      setStoreData(params.type, (prev) => ({
        ...prev,
        [keyString]: isFunction(action) ? action(prev?.[keyString]) : action,
      }));
    },
    [keyString, params.type, setStoreData],
  );

  return [data, setData] as const;
};

/**
 * 여러 날짜의 state를 한 번에 바꿀 수 있는 유틸
 * @example```
 * type DayInfo = { isSelected: boolean };
 * const setCalendarState = useSetCalendarState<DayInfo>();
 * setCalendarState({ type: 'day', date: new Date(2023, 6, 9), newData: (prev) => ({ ...prev, isSelected: true }) });
 * ```
 */
export const useSetCalendarState = <
  Day = unknown,
  Week = unknown,
  Month = unknown,
>() => {
  const store = useContext(CalendarDataStoreContext);
  const setRawStoreData = useStore(store, (state) => state.setRawData);

  const setMultipleData = useCallback(
    (...dispatchInfoList: CalendarStoreDispatchInfo<Day, Week, Month>[]) => {
      setRawStoreData((prevState) =>
        dispatchInfoList.reduce((prev, cur) => {
          const { newData, ...params } = cur;

          return {
            ...prev,
            [params.type]: {
              ...prev[params.type],
              [getKeyStringFrom(params)]: isFunction<any>(newData)
                ? newData(prev[params.type]?.[getKeyStringFrom(params)])
                : newData,
            },
          };
        }, prevState ?? ({} as CalendarDataStore)),
      );
    },
    [setRawStoreData],
  );

  return setMultipleData;
};

export default useCalendarState;
