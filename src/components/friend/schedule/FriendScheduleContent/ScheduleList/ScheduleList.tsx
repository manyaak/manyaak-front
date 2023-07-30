import { useState } from 'react';
import HangoutBox from '@/components/common/HangoutBox';
import { CalenderHeader, MontlyCalendar } from '@/components/common/Calendar';
import * as styles from '../FriendScheduleContent.css';

import { hangoutsDummydata } from '@/dummyData';

const today = new Date();

// TODO  hangout dummydata 교체
const ScheduleList = () => {
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

  const hangout = hangoutsDummydata[0];

  return (
    <div>
      <CalenderHeader
        year={year}
        month={month}
        goBefore={setBeforeMonth}
        goNext={setNextMonth}
        className={styles.calendarHeader}
      />
      <MontlyCalendar year={year} month={month} />
      <div className={styles.hangoutListWrap}>
        <HangoutBox
          key={hangout.name}
          name={hangout.name}
          date={hangout.date}
          location={hangout.location}
          members={hangout.members}
          isAccepted={hangout.isAccepted}
        />
      </div>
    </div>
  );
};

export default ScheduleList;
