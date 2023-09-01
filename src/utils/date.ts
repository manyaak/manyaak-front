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

/**
 * @return `오늘` or `n일전`
 * */
export function getDday(date: Date) {
  const diff = date.getTime() - new Date().getTime();
  const dday = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return dday === 0 ? `오늘` : `${dday}일 전`;
}

/**
 * @returns `h시 m분`
 */
export function getHourAndMinute(date: Date) {
  const hour = date.getHours() === 0 ? 24 : date.getHours();
  return `${hour}시 ${date.getMinutes()}분`;
}

/**
 * @returns `m월 d일`
 */
export function getMonthAndDay(date: Date) {
  return `${date.getMonth() + 1}월 ${date.getDate()}일`;
}

/**
 * date를 `<input type="datetieme-local" />`의 value로 사용하기 위한 함수
 * @returns `YYYY-MM-DDThh:mm`
 */
export function getDateTimeLocalString(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

/**
 * date를 API 전송을 위해 전처리하는 함수
 * @returns `YYYY/MM/DD hh:mm`
 */
export function getDateTimeAPIString(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}/${month}/${day} ${hours}:${minutes}`;
}

/**
 * 2개의 날짜가 같은 날짜인지 확인하는 함수
 * @returns 두 날짜가 같은 날짜인지 여부 boolean
 */
export function isSameDate(date1: Date, date2: Date) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}
