export function toddayFormat(date: Date) {
  const diff = date.getTime() - new Date().getTime();
  const dday = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return dday === 0 ? `오늘` : `${dday}일 전`;
}

export function tohhmmFormat(date: Date) {
  return `${date.getHours()}시 ${date.getMinutes()}분`;
}
