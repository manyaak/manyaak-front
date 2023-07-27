import { useCallback, useRef } from 'react';
import {
  Month,
  RenderMonth,
  RenderWeek,
  RenderDayProps,
} from './CalendarSkeleton';
import { withCalendarStateProvider } from '@/hooks/useCalendarState';
import StyledDay from './StyledDay';

import * as styles from './Calendar.css';

export const DAY_OF_WEEKS = ['일', '월', '화', '수', '목', '금', '토'] as const;

interface MontlyCProps {
  year: number;
  /** 0~11 */
  month: number;
}

/**
 * 월간 캘린더 컴포넌트
 */
const MontlyCalendar = ({ year, month }: MontlyCProps) => {
  const selectedDayRef = useRef<Date | null>(null);

  const renderMonth: RenderMonth = useCallback(
    ({ children }) => (
      <div>
        <div className={styles.weekRow}>
          {DAY_OF_WEEKS.map((day) => (
            <div className={styles.dayOfWeek} key={day}>
              {day}
            </div>
          ))}
        </div>
        {children}
      </div>
    ),
    [],
  );

  const renderWeek: RenderWeek = useCallback(
    ({ children }) => (
      <div className={styles.weekColumn}>
        <div className={styles.weekRow}>{children}</div>
      </div>
    ),
    [],
  );

  const renderDay = useCallback(
    (renderDayProps: RenderDayProps) => (
      <StyledDay {...renderDayProps} selectedDayRef={selectedDayRef} />
    ),
    [],
  );

  return (
    <Month
      year={year}
      month={month}
      renderMonth={renderMonth}
      renderWeek={renderWeek}
      renderDay={renderDay}
    />
  );
};

export default withCalendarStateProvider(MontlyCalendar);
