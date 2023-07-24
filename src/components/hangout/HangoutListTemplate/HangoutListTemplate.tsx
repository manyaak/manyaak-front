import { useState } from 'react';
import TextButton from '@/components/common/TextButton';
import HangoutBox from '@/components/common/HangoutBox';
import { isSameDate, isToday, toMmddFormat } from '@/utils/date';

import { hangoutsDummydata } from '@/dummyData';
import * as styles from './HangoutListTemplate.css';

function HangoutListTemplate() {
  const [waitingFiltered, setWaitingFiltered] = useState(false);
  const toggleWaitingFiltered = () => setWaitingFiltered((prev) => !prev);

  const hangoutList = waitingFiltered
    ? hangoutsDummydata.filter((h) => h.state === 'WAITING')
    : hangoutsDummydata;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>약속</h2>
      <TextButton
        label={`대기중(${2})`}
        onClick={toggleWaitingFiltered}
        className={
          styles.toggleButton[waitingFiltered ? 'active' : 'nonActive']
        }
      />
      <div className={styles.hangoutBoxsWrap}>
        {hangoutList.map((hangout, i) => (
          <>
            {(i === 0 ||
              !isSameDate(hangout.date, hangoutList[i - 1].date)) && (
              <div className={styles.dateLabel}>
                {isToday(hangout.date) ? '오늘' : toMmddFormat(hangout.date)}
              </div>
            )}
            <HangoutBox
              name={hangout.name}
              date={hangout.date}
              location={hangout.location}
              members={hangout.members}
              className={styles.hangoutBox}
              isNotAccepted={hangout.state === 'WAITING'}
              haveBoxShadow
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default HangoutListTemplate;
