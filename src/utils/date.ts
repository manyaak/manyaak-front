/**
 * 특정 주의 특정 요일에 해당하는 일자를 얻는 함수
 * @example
 * ```
 * const date = getDateOfWeek(2023, 6, 0, 0);
 * console.log(`${date.getFullYear()} ${date.getMonth()} ${date.getDate()}`); // 2023 05 25
 * ```
 * @param year 연도(4자리 full year)
 * @param month 달(0~11)
 * @param week 주(0~5), 범위를 벗어나도 정상 작동 (ex: 2023, 6, 6, 0 -> 2023-08-06)
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

export function toDdayFormat(date: Date) {
  const diff = date.getTime() - new Date().getTime();
  const dday = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return dday === 0 ? `오늘` : `${dday}일 전`;
}

export function toHhmmFormat(date: Date) {
  return `${date.getHours()}시 ${date.getMinutes()}분`;
}

export function toMmddFormat(date: Date) {
  return `${date.getMonth() + 1}월 ${date.getDate()}일`;
}

export function isToday(date: Date) {
  const today = new Date();
  return (
    today.getUTCFullYear() === date.getUTCFullYear() &&
    today.getUTCMonth() === date.getUTCMonth() &&
    today.getUTCDate() === date.getUTCDate()
  );
}

export function isSameDate(date1: Date, date2: Date) {
  return (
    date1.getUTCFullYear() === date2.getUTCFullYear() &&
    date1.getUTCMonth() === date2.getUTCMonth() &&
    date1.getUTCDate() === date2.getUTCDate()
  );
}
