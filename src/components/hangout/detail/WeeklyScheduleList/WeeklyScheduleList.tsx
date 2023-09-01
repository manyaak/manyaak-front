import { useCallback, useEffect, useState } from 'react';
import { getDateOfWeek, isSameDate } from '@/utils/date';
import { CalenderHeader, WeeklyCalendar } from '@/components/common/Calendar';
import HangoutBox from '@/components/common/HangoutBox';

import * as styles from './WeeklyScheduleList.css';
import { ScheduleDummyData } from '@/dummyData';
import { ScheduleInfoType } from '@/types/schedule';

interface WeeklyScheduleListProps {
  year: number;
  month: number;
  week: number;
}

/** 주단위로 일정을 보여주는 컴포넌트 */
const WeeklyScheduleList = ({ year, month, week }: WeeklyScheduleListProps) => {
  const [currentWeek, setCurrentWeek] = useState<number>(week);
  const dateInWeek = getDateOfWeek(year, month, currentWeek, 6);

  const goBeforeWeek = () => setCurrentWeek((prev) => prev - 1);
  const goNextWeek = () => setCurrentWeek((prev) => prev + 1);

  const [weeklySchedules, setWeeklySchedules] =
    useState<ScheduleInfoType[]>(ScheduleDummyData);
  const [todaySchedules, setTodaySchedules] = useState<ScheduleInfoType[]>([]);

  useEffect(() => {
    // TODO 주가 바뀔때마다 월별 일정 조회
    setWeeklySchedules([]);
  }, [currentWeek]);

  const onSelectDay = useCallback(
    (day: Date) => {
      // TODO day에 해당하는 일정 조회
      setTodaySchedules(
        weeklySchedules.filter((s) =>
          isSameDate(new Date(s.scheduleDate), day),
        ),
      );
    },
    [weeklySchedules],
  );

  return (
    <div className={styles.container}>
      <CalenderHeader
        year={dateInWeek.getFullYear()}
        month={dateInWeek.getMonth()}
        goBefore={goBeforeWeek}
        goNext={goNextWeek}
        className={styles.calendarHeader}
      />
      <WeeklyCalendar
        year={year}
        month={month}
        week={currentWeek}
        onSelectDay={onSelectDay}
      />
      <div className={styles.hangoutListWrap}>
        {todaySchedules.map((schedule) => (
          <HangoutBox
            key={schedule.scheduleId}
            id={schedule.scheduleId}
            name={schedule.info}
            date={new Date(schedule.scheduleDate)}
            location={schedule.detailAddress}
            members={schedule.friendList}
            // isAccepted={schedule.isAccepted}
          />
        ))}
      </div>
    </div>
  );
};

export default WeeklyScheduleList;
