import { ReactComponent as ClockIcon } from '@/assets/icons/clock.svg';
import { ReactComponent as LocationIcon } from '@/assets/icons/location.svg';

import * as styles from './PromiseBox.css';
import UserImage from '../UserImage';

// TODO 약속 정보 Type 정확히 정해지면 수정할 것
interface PromiseInfoType {
  name: string;
  date: Date;
  location: string;
  members: { name: string; profileImg: string }[];
}

interface PromiseBoxProps extends PromiseInfoType {
  haveBoxShadow?: boolean;
  isNotAccepted?: boolean;
}

/**
 * 약속 정보를 담은 컴포넌트
 */
function PromiseBox({
  name,
  date,
  location,
  members,
  haveBoxShadow = false,
  isNotAccepted = false,
}: PromiseBoxProps) {
  return (
    <div
      className={`${
        isNotAccepted ? styles.nonAcceptedBoxWrap : styles.boxWrap
      } ${haveBoxShadow && styles.boxShadow}`}
    >
      <div className={styles.mainInfo}>
        <div className={styles.ddayBox}>{`2일전`}</div>
        <div className={styles.name}>{name}</div>
      </div>
      <div className={styles.subInfoWrap}>
        <div className={styles.subInfo}>
          <ClockIcon width={18} height={18} style={{ marginRight: 3 }} />
          <div>{`18시 30분`}</div>
        </div>
        <div className={styles.subInfo}>
          <LocationIcon width={18} height={18} style={{ marginRight: 3 }} />
          <div>{location}</div>
        </div>
      </div>
      <div className={styles.memberInfoWrap}>
        {members.map((member) => (
          <UserImage key={member.name} src={member.profileImg} size={22} />
        ))}
      </div>
    </div>
  );
}

export default PromiseBox;
