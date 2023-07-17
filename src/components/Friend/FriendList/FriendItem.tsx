import Profile from '@/components/common/Profile';
import TextButton from '@/components/common/TextButton';
import { ReactComponent as ScheduleIcon } from '@/assets/icons/ScheduleIcon.svg';
import * as styles from '../Friend.css';

export interface FriendItemProps {
  id: number;
  name: string;
  profileImg: string;
  statusMessage: string;
}

const FriendItem = ({
  id,
  name,
  profileImg,
  statusMessage,
}: FriendItemProps) => {
  const onShowSchedule = () => {
    console.log('id: ', id);
  };

  return (
    <div className={styles.item}>
      <Profile
        type="user"
        name={name}
        profileImg={profileImg}
        statusMessage={statusMessage}
      />
      <TextButton
        label="일정 보기"
        iconSvg={<ScheduleIcon />}
        sizeType="small"
        onClick={onShowSchedule}
      />
    </div>
  );
};

export default FriendItem;
