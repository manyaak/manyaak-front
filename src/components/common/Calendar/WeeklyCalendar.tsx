import { useCallback, useRef } from 'react';
import { Week, RenderWeek, RenderDayProps } from './CalendarSkeleton';
import { withCalendarStateProvider } from '@/hooks/useCalendarState';
import StyledDay from './StyledDay';

import * as styles from './Calendar.css';
import { DAY_OF_WEEKS } from './MontlyCalendar';

interface WeeklyCalendarProps {
  year: number;
  /** 0~11 */
  month: number;
  week: number;
}

/**
 * 주간 캘린더 컴포넌트
 */
const WeeklyCalendar = ({ year, month, week }: WeeklyCalendarProps) => {
  const selectedDayRef = useRef<Date | null>(null);

  const renderWeek: RenderWeek = ({ children }) => (
    <div className={styles.weekColumn}>
      <div className={styles.weekRow}>
        {DAY_OF_WEEKS.map((day) => (
          <div className={styles.dayOfWeek} key={day}>
            {day}
          </div>
        ))}
      </div>
      <div className={styles.weekRow}>{children}</div>
    </div>
  );

  const renderDay = useCallback(
    (renderDayProps: RenderDayProps) => (
      <StyledDay {...renderDayProps} selectedDayRef={selectedDayRef} />
    ),
    [],
  );

  return (
    <Week
      year={year}
      month={month}
      week={week}
      renderWeek={renderWeek}
      renderDay={renderDay}
    />
  );
};

export default withCalendarStateProvider(WeeklyCalendar);
