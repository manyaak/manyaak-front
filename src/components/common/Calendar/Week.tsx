import { useMemo, type ReactNode, memo } from 'react';
import Day, { type RenderDay } from './Day';
import { getDateOfWeek } from '@/utils/date';

interface RenderWeekProps {
  /** props로 넣어준 `year`와 동일한 값 */
  year: number;
  /** props로 넣어준 `month`와 동일한 값. 0~11 */
  month: number;
  /** props로 넣어준 `week`와 동일한 값. 0~5 */
  week: number;
  /** 이번 달 또는 다음 달 또는 이전 달 중 하나의 첫째 주인지를 나타냄 */
  isFirstWeek: boolean;
  /** 이번 달 또는 다음 달 또는 이전 달 중 하나의 마지막 주인지를 나타냄 */
  isLastWeek: boolean;
  /** 직접 props로 넣은 `month`에 해당하는 날짜가 적어도 하나 포함된 주인지를 나타냄 */
  isInCurrentMonth: boolean;
  children: ReactNode;
}

export type RenderWeek = (props: RenderWeekProps) => JSX.Element;

interface WeekProps {
  renderWeek: RenderWeek;
  renderDay: RenderDay;
  /** 4자리 full year */
  year: number;
  /** 0~11 */
  month: number;
  /** 0~5, overflow 가능 */
  week: number;
}

const DAYS = [0, 1, 2, 3, 4, 5, 6] as const;

function Week({
  renderWeek: CustomWeek,
  renderDay,
  year,
  month,
  week,
}: WeekProps) {
  const firstDateOfWeek = useMemo(
    () => getDateOfWeek(year, month, week, 0),
    [year, month, week],
  );
  const lastDateOfWeek = useMemo(
    () => getDateOfWeek(year, month, week, 6),
    [year, month, week],
  );
  const lastDateOfPrevWeek = useMemo(
    () => getDateOfWeek(year, month, week - 1, 6),
    [year, month, week],
  );
  const firstDateOfNextWeek = useMemo(
    () => getDateOfWeek(year, month, week + 1, 0),
    [year, month, week],
  );
  const isFirstWeek =
    lastDateOfWeek.getMonth() !== lastDateOfPrevWeek.getMonth();
  const isLastWeek =
    firstDateOfWeek.getMonth() !== firstDateOfNextWeek.getMonth();
  const isInCurrentMonth =
    firstDateOfWeek.getMonth() === month || lastDateOfWeek.getMonth() === month;

  return (
    <CustomWeek
      year={year}
      month={month}
      week={week}
      isFirstWeek={isFirstWeek}
      isLastWeek={isLastWeek}
      isInCurrentMonth={isInCurrentMonth}
    >
      {DAYS.map((dayIndex) => (
        <Day
          key={dayIndex}
          renderDay={renderDay}
          year={year}
          month={month}
          week={week}
          dayIndex={dayIndex}
        />
      ))}
    </CustomWeek>
  );
}

export default memo(Week);
