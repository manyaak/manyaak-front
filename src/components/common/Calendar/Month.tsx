import { memo, type ReactNode } from 'react';
import { type RenderDay } from './Day';
import Week, { type RenderWeek } from './Week';

export interface RenderMonthProps {
  year: number;
  /** 0~11 */
  month: number;
  children: ReactNode;
}

export type RenderMonth = (props: RenderMonthProps) => JSX.Element;

interface MonthProps {
  renderMonth: RenderMonth;
  renderWeek: RenderWeek;
  renderDay: RenderDay;
  year: number;
  /** 0~11 */
  month: number;
}

const WEEKS = [0, 1, 2, 3, 4, 5] as const;

const Month = ({
  renderMonth: CustomMonth,
  renderWeek,
  renderDay,
  year,
  month,
}: MonthProps) => (
  <CustomMonth year={year} month={month}>
    {WEEKS.map((week) => (
      <Week
        key={week}
        renderWeek={renderWeek}
        renderDay={renderDay}
        year={year}
        month={month}
        week={week}
      />
    ))}
  </CustomMonth>
);

export default memo(Month);
