import { useNavigate } from 'react-router-dom';
import UserImage from '@/components/common/UserImage';
import { ReactComponent as ClockIcon } from '@/assets/icons/ClockIcon.svg';
import { ReactComponent as LocationIcon } from '@/assets/icons/LocationIcon.svg';
import { getDday, getHourAndMinute } from '@/utils/date';

import * as styles from './HangoutBox.css';

export interface HangoutInfoType {
  id: number;
  name: string;
  date: Date;
  location: string;
  members: { name: string; profileImg: string }[];
  isAccepted: boolean;
}

interface HangoutBoxProps extends HangoutInfoType {
  /** 그림자 스타일링 여부 */
  haveBoxShadow?: boolean;
  /** 추가 스타일링을 위한 style  */
  className?: string;
}

/**
 * 약속 정보를 담은 컴포넌트
 */
const HangoutBox = ({
  id,
  name,
  date,
  location,
  members,
  haveBoxShadow = false,
  isAccepted,
  className,
}: HangoutBoxProps) => {
  const navigate = useNavigate();

  const boxWrapStyle = isAccepted ? styles.boxWrap : styles.dashedBoxWrap;

  const onClickBox = () => {
    if (isAccepted) {
      navigate(`/hangout/${id}`);
    } else {
      navigate(`/hangout/${id}/request`);
    }
  };

  return (
    <div
      onClick={onClickBox}
      className={`${
        haveBoxShadow && styles.boxShadow
      } ${boxWrapStyle} ${className}`}
    >
      <div className={styles.mainInfo}>
        <div className={styles.ddayBox}>{getDday(date)}</div>
        <div className={styles.name}>{name}</div>
      </div>
      <div className={styles.subInfoWrap}>
        <div className={styles.subInfo}>
          <ClockIcon width={18} height={18} className={styles.icon} />
          <div>{getHourAndMinute(date)}</div>
        </div>
        <div className={styles.subInfo}>
          <LocationIcon width={18} height={18} className={styles.icon} />
          <div>{location}</div>
        </div>
      </div>
      <div className={styles.memberInfoWrap}>
        {members.map((member) => (
          <UserImage
            key={member.name}
            src={member.profileImg}
            size={22}
            className={styles.memberImage}
          />
        ))}
      </div>
    </div>
  );
};

export default HangoutBox;
