import { useState } from 'react';
import { getDateOfWeek } from '@/utils/date';
import { CalenderHeader, WeeklyCalendar } from '@/components/common/Calendar';
import HangoutBox from '@/components/common/HangoutBox';

import * as styles from './WeeklyScheduleList.css';
import { hangoutsDummydata } from '@/dummyData';

interface WeeklyScheduleListProps {
  year: number;
  month: number;
  week: number;
}

// TODO Hangout Data
/** 주단위로 일정을 보여주는 컴포넌트 */
const WeeklyScheduleList = ({ year, month, week }: WeeklyScheduleListProps) => {
  const [currentWeek, setCurrentWeek] = useState<number>(week);
  const dateInWeek = getDateOfWeek(year, month, currentWeek, 6);

  const goBeforeWeek = () => {
    setCurrentWeek((prev) => prev - 1);
  };

  const goNextWeek = () => {
    setCurrentWeek((prev) => prev + 1);
  };

  return (
    <div className={styles.container}>
      <CalenderHeader
        year={dateInWeek.getFullYear()}
        month={dateInWeek.getMonth()}
        goBefore={goBeforeWeek}
        goNext={goNextWeek}
        className={styles.calendarHeader}
      />
      <WeeklyCalendar year={year} month={month} week={currentWeek} />
      <div className={styles.hangoutListWrap}>
        {hangoutsDummydata.slice(0, 2).map((hangout) => (
          <HangoutBox
            id={hangout.id}
            key={hangout.id}
            name={hangout.name}
            date={hangout.date}
            location={hangout.location}
            members={hangout.members}
            isAccepted
          />
        ))}
      </div>
    </div>
  );
};

export default WeeklyScheduleList;
