import { MutableRefObject } from 'react';
import useCalendarState, {
  useSetCalendarState,
} from '@/hooks/useCalendarState';
import { RenderDayProps } from '..';
import { isToday } from '@/utils/date';

import * as styles from './StyledCalendar.css';

type DayInfo = { isSelected: boolean };

interface DayProps extends RenderDayProps {
  selectedDayRef: MutableRefObject<Date | null>;
}

const StyledDay = ({ date, isInCurrentMonth, selectedDayRef }: DayProps) => {
  const [dayState, setDayState] = useCalendarState<DayInfo>({
    type: 'day',
    date,
  });
  const setCalendarState = useSetCalendarState<DayInfo>();

  const onClickDay = () => {
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
  };

  const dayStyleType =
    // eslint-disable-next-line no-nested-ternary
    isToday(date) ? 'today' : !isInCurrentMonth ? 'notThisMonth' : 'general';

  return (
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
    <div className={styles.day[dayStyleType]} onClick={onClickDay}>
      <p>{date.getDate()}</p>
      {dayState?.isSelected && <div className={styles.selectedDayBackground} />}
    </div>
  );
};

export default StyledDay;
