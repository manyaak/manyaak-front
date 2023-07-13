import type { Meta, StoryObj } from '@storybook/react';

import { type MutableRefObject, useCallback, useRef } from 'react';
import { type RenderWeek } from './Week';
import { type RenderDayProps, type RenderDay } from './Day';
import Month, { type RenderMonth } from './Month';
import useCalendarState, {
  useSetCalendarState,
  withCalendarStateProvider,
} from '@/hooks/useCalendarState';

const renderMonth: RenderMonth = ({ year, month, children }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <p>
      {year}년 {month + 1}월
    </p>
    {children}
  </div>
);

const renderWeek: RenderWeek = ({
  year,
  month,
  week,
  isFirstWeek,
  isLastWeek,
  isInCurrentMonth,
  children,
}) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <p>
      {year}년 {month + 1}월 {week + 1}번째 주
    </p>
    <p>
      isFirstWeek: {isFirstWeek ? 'true' : 'false'}, isLastWeek:{' '}
      {isLastWeek ? 'true' : 'false'}, isInCurrentMonth:{' '}
      {isInCurrentMonth ? 'true' : 'false'}
    </p>
    <div style={{ display: 'flex', flexDirection: 'row' }}>{children}</div>
  </div>
);

const renderDay: RenderDay = ({ date, isInCurrentMonth }) => (
  <div
    style={{
      width: '100px',
      height: '100px',
      border: '1px solid #000000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: isInCurrentMonth ? '#000000' : '#b9b9b9',
    }}
  >
    <p>
      {date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}
    </p>
  </div>
);

type DayInfo = {
  isSelected: boolean;
};

interface DayWithCalendarStateProps extends RenderDayProps {
  selectedDayRef: MutableRefObject<Date | null>;
}

function DayWithCalendarState({
  date,
  isInCurrentMonth,
  selectedDayRef,
}: DayWithCalendarStateProps) {
  const [dayState, setDayState] = useCalendarState<DayInfo>({
    type: 'day',
    date,
  });
  const setCalendarState = useSetCalendarState<DayInfo>();

  // 날짜를 선택할 때 콘솔이 최대 2번(기존에 선택되어 있던 날짜 한 번, 새로 선택한 날짜 한 번)만 찍히는지 확인
  // eslint-disable-next-line no-console
  console.log(
    `day re-rendered, ${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`,
  );

  return (
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
    <div
      style={{
        width: '100px',
        height: '100px',
        border: '1px solid #000000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: isInCurrentMonth ? '#000000' : '#b9b9b9',
        backgroundColor: dayState?.isSelected ? '#ffa2a2' : 'transparent',
      }}
      onClick={() => {
        if (selectedDayRef.current === null) {
          setDayState((prev) => ({ ...prev, isSelected: true }));
          // eslint-disable-next-line no-param-reassign
          selectedDayRef.current = date;
        } else if (
          selectedDayRef.current.getFullYear() === date.getFullYear() &&
          selectedDayRef.current.getMonth() === date.getMonth() &&
          selectedDayRef.current.getDate() === date.getDate()
        ) {
          setDayState((prev) => ({ ...prev, isSelected: false }));
          // eslint-disable-next-line no-param-reassign
          selectedDayRef.current = null;
        } else {
          setCalendarState(
            {
              type: 'day',
              date: selectedDayRef.current,
              newData: (prev) => ({ ...prev, isSelected: false }),
            },
            {
              type: 'day',
              date,
              newData: (prev) => ({ ...prev, isSelected: true }),
            },
          );
          // eslint-disable-next-line no-param-reassign
          selectedDayRef.current = date;
        }
      }}
    >
      <p>
        {date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}
      </p>
    </div>
  );
}

const meta: Meta<typeof Month> = {
  component: Month,
  args: {
    renderWeek,
    renderMonth,
  },
};

export default meta;
type Story = StoryObj<typeof Month>;

export const General: Story = {
  args: {
    renderDay,
    year: 2023,
    month: 6,
  },
};

export const MonthWithCalendarState: Story = {
  args: {
    year: 2023,
    month: 6,
  },
  render: withCalendarStateProvider(({ ...props }) => {
    const selectedDayRef = useRef<Date | null>(null);
    const renderDayWithCalendarState = useCallback(
      (renderDayProps: RenderDayProps) => (
        <DayWithCalendarState
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...renderDayProps}
          selectedDayRef={selectedDayRef}
        />
      ),
      [],
    );

    return (
      <div>
        <h2>날짜를 누르면 배경색이 칠해집니다.</h2>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Month {...props} renderDay={renderDayWithCalendarState} />
      </div>
    );
  }),
};
