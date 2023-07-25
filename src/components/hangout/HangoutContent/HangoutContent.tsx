import { useState } from 'react';
import TextButton from '@/components/common/TextButton';
import HangoutBox from '@/components/common/HangoutBox';
import { isSameDate, isToday, toMmddFormat } from '@/utils/date';

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
