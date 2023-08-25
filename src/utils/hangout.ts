/**
 * 주어진 범위 내에서 일정이 없는 시간대를 반환하는 함수
 * - `schedules.length`를 n이라 하면 시간 복잡도는 O(n*log(n))
 * @param range 검사할 범위
 * @param schedules 일정 목록
 * @returns 일정이 없는 시간대 목록 (오름차순)
 */
export const getAvailableSchedules = (
  range: [from: Date, to: Date],
  schedules: { start: Date; end: Date }[],
) => {
  const [from, to] = range;

  // 범위에서 벗어나는 일정은 제외
  const filteredSchedules = schedules.filter((item) => {
    const start = item.start.getTime();
    const end = item.end.getTime();
    const isOutside =
      (start < from.getTime() && end <= from.getTime()) ||
      (start >= to.getTime() && end > to.getTime());
    return !isOutside;
  });

  const times: { dateTime: number; isAvailable: boolean }[] = [];
  const indexOfDate: {
    [dateTime: number]: number | undefined;
  } = {};

  filteredSchedules.forEach((schedule) => {
    [schedule.start, schedule.end].forEach((date) => {
      const dateTime = date.getTime();
      // 시작점은 뒤 로직에서 알아서 체크하므로 `times`에 중복 push하지 않아야 함 => `dateTime > from.getTime()`을 만족해야 함
      if (indexOfDate[dateTime] === undefined && dateTime > from.getTime()) {
        times.push({
          dateTime: Math.min(dateTime, to.getTime()),
          isAvailable: true,
        });
        indexOfDate[dateTime] = 0;
      }
    });
  });

  // 오름차순 정렬
  times.sort((a, b) => a.dateTime - b.dateTime);

  times.forEach((time, index) => {
    indexOfDate[time.dateTime] = index;
  });

  /**
   * `times[indexOfDate[i]].isAvailable`: `times[indexOfDate[i] - 1] ~ i` 사이가 가능한지 여부
   */
  filteredSchedules.forEach((schedule) => {
    const startDateTime = schedule.start.getTime();
    const endDateTime = schedule.end.getTime();
    const prevIndexOfStartIndex = indexOfDate[startDateTime];
    const endIndex = indexOfDate[endDateTime];

    if (prevIndexOfStartIndex !== undefined && endIndex !== undefined) {
      const startIndex = prevIndexOfStartIndex + 1;
      for (let i = startIndex; i <= endIndex; i += 1) {
        times[i] = { ...times[i], isAvailable: false };
      }
    }
  });

  if (times[times.length - 1].dateTime < to.getTime()) {
    times.push({ dateTime: to.getTime(), isAvailable: true });
  }

  const result: { start: Date; end: Date }[] = [];

  let start = from;
  for (let i = 0; i < times.length; i += 1) {
    if (!times[i].isAvailable) {
      if (i > 0 && times[i - 1].isAvailable) {
        result.push({ start, end: new Date(times[i - 1].dateTime) });
      }
      start = new Date(times[i].dateTime);
    } else if (i === times.length - 1) {
      result.push({ start, end: new Date(times[i].dateTime) });
    }
  }

  return result.filter((item) => item.start.getTime() < item.end.getTime());
};
