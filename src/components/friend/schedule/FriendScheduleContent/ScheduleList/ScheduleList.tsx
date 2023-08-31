import HangoutBox from '@/components/common/HangoutBox';
import { CalenderHeader, MontlyCalendar } from '@/components/common/Calendar';
import useMontlyCalendar from '@/hooks/useMontlyCalendar';
import * as styles from '../FriendScheduleContent.css';

import { hangoutsDummydata } from '@/dummyData';

// TODO  hangout dummydata 교체
const ScheduleList = () => {
  const { year, month, setBeforeMonth, setNextMonth } = useMontlyCalendar();

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
          id={hangout.id}
          key={hangout.id}
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
