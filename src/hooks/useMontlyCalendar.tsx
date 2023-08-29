import { useState } from 'react';

/**
 * 월 캘린더를 사용하기 위한 훅 함수
 * @returns year 현재 년도
 * @returns month 현재 월
 * @returns setBeforeMonth 캘린더에서 이전 달을 보기 위한 함수
 * @returns setNextMonth 캘린더에서 다음 달을 보기 위한 함수
 */
const useMontlyCalendar = () => {
  const today = new Date();

  // 현재 캘린더에서 보여지고 있는 연도 및 월
  const [currentDate, setCurrentDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });
  const { year, month } = currentDate;

  const setBeforeMonth = () => {
    setCurrentDate((prev) => ({
      ...prev,
      year: month === 0 ? prev.year - 1 : prev.year,
      month: month === 0 ? 11 : prev.month - 1,
    }));
  };

  const setNextMonth = () => {
    setCurrentDate((prev) => ({
      ...prev,
      year: month === 11 ? prev.year + 1 : prev.year,
      month: month === 11 ? 0 : prev.month + 1,
    }));
  };

  return { year, month, setBeforeMonth, setNextMonth };
};

export default useMontlyCalendar;
