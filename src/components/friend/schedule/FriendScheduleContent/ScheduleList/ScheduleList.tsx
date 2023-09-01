import { useCallback, useEffect, useState } from 'react';
import HangoutBox from '@/components/common/HangoutBox';
import { CalenderHeader, MontlyCalendar } from '@/components/common/Calendar';
import useMontlyCalendar from '@/hooks/useMontlyCalendar';
import { ScheduleInfoType } from '@/types/schedule';
import { isSameDate } from '@/utils/date';
import { ScheduleDummyData } from '@/dummyData';
import * as styles from '../FriendScheduleContent.css';

/** 월별 캘린더와 캘린더에서 선택된 날짜에 해당하는 '친구'의 일정을 보여주는 컴포넌트 */
const ScheduleList = () => {
  const { year, month, setBeforeMonth, setNextMonth } = useMontlyCalendar();

  const [montlySchedules, setMontlySchedules] =
    useState<ScheduleInfoType[]>(ScheduleDummyData);
  const [todaySchedules, setTodaySchedules] = useState<ScheduleInfoType[]>([]);

  useEffect(() => {
    // TODO 달이 바뀔때마다 월별 일정 조회
    setMontlySchedules([]);
  }, [year, month]);

  const onSelectDay = useCallback(
    (day: Date) => {
      // TODO day에 해당하는 일정 조회
      setTodaySchedules(
        montlySchedules.filter((s) =>
          isSameDate(new Date(s.scheduleDate), day),
        ),
      );
    },
    [montlySchedules],
  );

  return (
    <div>
      <CalenderHeader
        year={year}
        month={month}
        goBefore={setBeforeMonth}
        goNext={setNextMonth}
        className={styles.calendarHeader}
      />
      <MontlyCalendar year={year} month={month} onSelectDay={onSelectDay} />
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

export default ScheduleList;
