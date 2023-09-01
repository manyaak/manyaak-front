import { useNavigate } from 'react-router-dom';
import Profile from '@/components/common/Profile';
import TextButton from '@/components/common/TextButton';
import { ReactComponent as ScheduleIcon } from '@/assets/icons/ScheduleIcon.svg';
import { FriendInfo } from '@/types/friend';
import * as styles from '../FriendContent.css';

export type FriendItemProps = FriendInfo;

const FriendItem = ({
  id,
  name,
  profileImg,
  statusMessage,
}: FriendItemProps) => {
  const navigate = useNavigate();

  const onShowSchedule = () => {
    navigate(`/friend/${id}`);
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
