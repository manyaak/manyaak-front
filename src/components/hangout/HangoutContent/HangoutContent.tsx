import HangoutBox from '@/components/common/HangoutBox';
import { isSameDate, getMonthAndDay } from '@/utils/date';

import { hangoutsDummydata } from '@/dummyData';

import * as styles from './HangoutContent.css';

interface HangoutContentProps {
  onlyWaiting: boolean;
}

const HangoutContent = ({ onlyWaiting }: HangoutContentProps) => {
  const hangoutList = onlyWaiting
    ? hangoutsDummydata.filter((h) => !h.isAccepted)
    : hangoutsDummydata;

  return (
    <div className={styles.container}>
      <div>
        {hangoutList.map((hangout, i) => (
          <>
            {(i === 0 ||
              !isSameDate(hangout.date, hangoutList[i - 1].date)) && (
              <div className={styles.dateLabel}>
                {isSameDate(hangout.date, new Date())
                  ? '오늘'
                  : getMonthAndDay(hangout.date)}
              </div>
            )}
            <HangoutBox
              id={hangout.id}
              name={hangout.name}
              date={hangout.date}
              location={hangout.location}
              members={hangout.members}
              className={styles.hangoutBox}
              isAccepted={hangout.isAccepted}
              haveBoxShadow
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default HangoutContent;
