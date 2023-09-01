import { useCallback, useState } from 'react';
import { CalenderHeader, MontlyCalendar } from '@/components/common/Calendar';
import ContentBox from '@/components/common/ContentBox';
import HangoutBox from '@/components/common/HangoutBox';
import useMontlyCalendar from '@/hooks/useMontlyCalendar';
import { isSameDate } from '@/utils/date';
import { ScheduleInfoType } from '@/types/schedule';

import * as styles from '../HomeContent.css';
import useApiQuery from '@/hooks/useApiQuery';
import { api_getSchedules } from '@/apis/schedule';

/** 월별 캘린더와 캘린더에서 선택된 날짜에 해당하는 일정(약속 포함)을 보여주는 컴포넌트 */
const ScheduleList = () => {
  const { year, month, setBeforeMonth, setNextMonth } = useMontlyCalendar();

  const { data: monthlySchedules } = useApiQuery(api_getSchedules, {
    params: { year, month: month + 1 },
  });

  const [todaySchedules, setTodaySchedules] = useState<ScheduleInfoType[]>([]);

  const onSelectDay = useCallback(
    (day: Date) => {
      // TODO day에 해당하는 일정 조회
      setTodaySchedules(
        monthlySchedules?.filter((s) =>
          isSameDate(new Date(s.scheduleDate), day),
        ) ?? [],
      );
    },
    [monthlySchedules],
  );

  return (
    <ContentBox
      title="일정"
      headerChildren={
        <CalenderHeader
          year={year}
          month={month}
          goBefore={setBeforeMonth}
          goNext={setNextMonth}
          className={styles.calendarHeader}
        />
      }
    >
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
    </ContentBox>
  );
};

export default ScheduleList;
