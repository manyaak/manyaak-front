import HangoutBox from '@/components/common/HangoutBox';
import { isSameDate, getMonthAndDay } from '@/utils/date';
import * as styles from './HangoutContent.css';
import useApiQuery from '@/hooks/useApiQuery';
import { api_getHangouts } from '@/apis/hangout';

interface HangoutContentProps {
  onlyWaiting: boolean;
}

export const formatDateForHangout = (date: Date) => {
  const yearString = `${date.getFullYear()}`;
  const monthString = `${date.getMonth() >= 9 ? '' : '0'}${
    date.getMonth() + 1
  }`;
  const dayString = `${date.getDate() >= 10 ? '' : '0'}${date.getDate()}`;

  return `${yearString}/${monthString}/${dayString}`;
};

const HangoutContent = ({ onlyWaiting }: HangoutContentProps) => {
  const { data } = useApiQuery(
    api_getHangouts,
    {
      params: { date: formatDateForHangout(new Date()) },
    },
    {
      select: (response) => ({
        data: response.data.map((item) => ({
          ...item,
          startDate: new Date(item.startDateTime),
          endDate: new Date(item.endDateTime),
        })),
      }),
    },
  );

  const waitingHangoutList = data?.data.filter((item) => !item.approved);

  const hangoutList = onlyWaiting ? waitingHangoutList : data?.data;

  return (
    <div className={styles.container}>
      <div>
        {hangoutList?.map((hangout, i) => (
          <>
            {(i === 0 ||
              !isSameDate(hangout.startDate, hangoutList[i - 1].startDate)) && (
              <div className={styles.dateLabel}>
                {isSameDate(hangout.startDate, new Date())
                  ? '오늘'
                  : getMonthAndDay(hangout.startDate)}
              </div>
            )}
            <HangoutBox
              id={hangout.id}
              name={hangout.name}
              date={hangout.startDate}
              location={hangout.placeName}
              members={hangout.clubMemberInfo.members}
              className={styles.hangoutBox}
              isAccepted={hangout.approved}
              haveBoxShadow
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default HangoutContent;
