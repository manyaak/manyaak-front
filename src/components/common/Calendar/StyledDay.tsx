/* eslint-disable no-param-reassign */
import { MutableRefObject } from 'react';
import useCalendarState, {
  useSetCalendarState,
} from '@/hooks/useCalendarState';
import { RenderDayProps } from './CalendarSkeleton';

import * as styles from './Calendar.css';
import { isSameDate } from '@/utils/date';

type DayInfo = { isSelected: boolean };

interface DayProps extends RenderDayProps {
  selectedDayRef: MutableRefObject<Date | null>;
  selectedDayHandler?: (day: Date) => void;
}

const StyledDay = ({
  date,
  isInCurrentMonth,
  selectedDayRef,
  selectedDayHandler,
}: DayProps) => {
  const [dayState, setDayState] = useCalendarState<DayInfo>({
    type: 'day',
    date,
  });
  const setCalendarState = useSetCalendarState<DayInfo>();

  const onClickDay = () => {
    // 어떤 날짜도 선택되어 있지 않은 상태인 경우
    if (selectedDayRef.current === null) {
      setDayState((prev) => ({ ...prev, isSelected: true }));
      selectedDayRef.current = date;
      selectedDayHandler?.(selectedDayRef.current);
    }
    // 선택되어 있는 날짜를 눌러서 해제하는 경우
    else if (isSameDate(selectedDayRef.current, date)) {
      setDayState((prev) => ({ ...prev, isSelected: false }));
      selectedDayRef.current = null;
    }
    // 현재 선택된 날짜와 다른 날짜를 누른 경우
    else {
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
      selectedDayRef.current = date;
      selectedDayHandler?.(selectedDayRef.current);
    }
  };

  const dayStyleType =
    // eslint-disable-next-line no-nested-ternary
    isSameDate(date, new Date())
      ? 'today'
      : !isInCurrentMonth
      ? 'notThisMonth'
      : 'general';

  return (
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
    <div className={styles.day[dayStyleType]} onClick={onClickDay}>
      <p
        className={
          styles.dayText[dayState?.isSelected ? 'selected' : 'unselected']
        }
      >
        {date.getDate()}
      </p>
    </div>
  );
};

export default StyledDay;
