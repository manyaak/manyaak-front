import ContentBox from '@/components/common/ContentBox';
import HangoutBox from '@/components/common/HangoutBox';
import { CalenderHeader, MontlyCalendar } from '@/components/common/Calendar';
import useMontlyCalendar from '@/hooks/useMontlyCalendar';
import * as styles from '../HomeContent.css';

import { hangoutsDummydata } from '@/dummyData';

// TODO  hangout dummydata 교체
const ScheduleList = () => {
  const { year, month, setBeforeMonth, setNextMonth } = useMontlyCalendar();

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
      <MontlyCalendar year={year} month={month} />
      <div className={styles.hangoutListWrap}>
        {hangoutsDummydata.slice(0, 2).map((hangout) => (
          <HangoutBox
            id={hangout.id}
            key={hangout.name}
            name={hangout.name}
            date={hangout.date}
            location={hangout.location}
            members={hangout.members}
            isAccepted={hangout.isAccepted}
          />
        ))}
      </div>
    </ContentBox>
  );
};

export default ScheduleList;
