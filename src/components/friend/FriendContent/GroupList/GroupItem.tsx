import { useNavigate } from 'react-router-dom';
import Profile from '@/components/common/Profile';
import TextButton from '@/components/common/TextButton';
import { ReactComponent as HangoutOutlineIcon } from '@/assets/icons/HangoutOutlineIcon.svg';
import * as styles from '../FriendContent.css';
import { GroupInfo } from '@/types/friend';

export type GroupItemProps = GroupInfo;

const GroupItem = ({ id, name, profileImg }: GroupItemProps) => {
  const navigate = useNavigate();

  // TODO: 그룹 선택한 상태로 이동
  const onMakeHangout = () => {
    navigate('/hangout/new');
  };

  return (
    <div className={styles.item}>
      <Profile type="group" name={name} profileImg={profileImg} />
      <TextButton
        label="약속 잡기"
        iconSvg={<HangoutOutlineIcon />}
        sizeType="small"
        onClick={onMakeHangout}
      />
    </div>
  );
};

export default GroupItem;
