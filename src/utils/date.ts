/**
 * 특정 주의 특정 요일에 해당하는 일자를 얻는 함수
 * @example```
 * const date = getFirstDateOfWeek(2023, 6, 0, 0);
 * console.log(`${date.getFullYear()} ${date.getMonth()} ${date.getDate()}`); // 2023 05 25
 * ```
 * @param year 연도(4자리 full year)
 * @param month 달(0~11)
 * @param week 주(0~5), overflow 가능
 * @param dayIndex 요일(0~6)
 */
export const getDateOfWeek = (
  year: number,
  month: number,
  week: number,
  dayIndex: number,
) => {
  const firstDateOfMonth = new Date(year, month, 1, 15, 0, 0, 0);
  return new Date(
    year,
    month,
    1 + week * 7 - firstDateOfMonth.getDay() + dayIndex,
    15,
    0,
    0,
    0,
  );
};
