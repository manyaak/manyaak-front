import UserImage from '@/components/common/UserImage';
import { ReactComponent as ClockIcon } from '@/assets/icons/clock.svg';
import { ReactComponent as LocationIcon } from '@/assets/icons/location.svg';

import * as styles from './HangoutBox.css';

function toddayFormat(date: Date) {
  const diff = date.getTime() - new Date().getTime();
  const dday = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return dday === 0 ? `오늘` : `${dday}일 전`;
}

function tohhmmFormat(date: Date) {
  return `${date.getHours()}시 ${date.getMinutes()}분`;
}

// TODO 약속 정보 Type 정확히 정해지면 수정 후 밖으로 뺄 것!
interface HangoutInfoType {
  name: string;
  date: Date;
  location: string;
  members: { name: string; profileImg: string }[];
}

interface HangoutBoxProps extends HangoutInfoType {
  /** 그림자 스타일링 여부 */
  haveBoxShadow?: boolean;
  /** 수락 대기 중인 약속인지 */
  isNotAccepted?: boolean;
  /** 추가 스타일링을 위한 style  */
  style?: string;
}

/**
 * 약속 정보를 담은 컴포넌트
 */
function HangoutBox({
  name,
  date,
  location,
  members,
  haveBoxShadow = false,
  isNotAccepted = false,
  style,
}: HangoutBoxProps) {
  return (
    <div
      className={`${
        isNotAccepted ? styles.nonAcceptedBoxWrap : styles.boxWrap
      } ${haveBoxShadow && styles.boxShadow} ${style}`}
    >
      <div className={styles.mainInfo}>
        <div className={styles.ddayBox}>{toddayFormat(date)}</div>
        <div className={styles.name}>{name}</div>
      </div>
      <div className={styles.subInfoWrap}>
        <div className={styles.subInfo}>
          <ClockIcon width={18} height={18} style={{ marginRight: 3 }} />
          <div>{tohhmmFormat(date)}</div>
        </div>
        <div className={styles.subInfo}>
          <LocationIcon width={18} height={18} style={{ marginRight: 3 }} />
          <div>{location}</div>
        </div>
      </div>
      <div className={styles.memberInfoWrap}>
        {members.map((member) => (
          <UserImage
            key={member.name}
            src={member.profileImg}
            size={22}
            style={styles.memberImage}
          />
        ))}
      </div>
    </div>
  );
}

export default HangoutBox;
