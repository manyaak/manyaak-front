import { memo, useMemo } from 'react';
import { getDateOfWeek } from '@/utils/date';

interface RenderDayProps {
  date: Date;
  /** 직접 props로 넣은 `month`와 실제 `date`의 달이 일치하는지를 나타내는 변수 */
  isInCurrentMonth: boolean;
}

export type RenderDay = (props: RenderDayProps) => JSX.Element;

interface DayProps {
  renderDay: RenderDay;
  year: number;
  month: number;
  /** 0~5 */
  week: number;
  /** 0~6 */
  dayIndex: number;
}

const Day = ({ renderDay, year, month, week, dayIndex }: DayProps) => {
  const date = useMemo(
    () => getDateOfWeek(year, month, week, dayIndex),
    [year, month, week, dayIndex],
  );
  const isInCurrentMonth = date.getMonth() === month;

  return renderDay({ date, isInCurrentMonth });
};

export default memo(Day);
