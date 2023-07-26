import { useCallback, useRef } from 'react';
import { Month, RenderMonth, RenderWeek, RenderDayProps } from '..';
import { withCalendarStateProvider } from '@/hooks/useCalendarState';
import StyledDay from './StyledDay';

import * as styles from './StyledCalendar.css';

const DAY_OF_WEEKS = ['일', '월', '화', '수', '목', '금', '토'] as const;

interface StyledCalendarProps {
  calendarType: 'montly' | 'weekly';
  year: number;
  month: number;
}

/**
 * 스타일링된 캘린더 컴포넌트
 */
const StyledCalendar = ({ year, month }: StyledCalendarProps) => {
  const selectedDayRef = useRef<Date | null>(null);

  const renderMonth: RenderMonth = ({ children }) => (
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
  );

  const renderWeek: RenderWeek = ({ children }) => (
    <div className={styles.weekColumn}>
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
    <Month
      year={year}
      month={month}
      renderMonth={renderMonth}
      renderWeek={renderWeek}
      renderDay={renderDay}
    />
  );
};

export default withCalendarStateProvider(StyledCalendar);
