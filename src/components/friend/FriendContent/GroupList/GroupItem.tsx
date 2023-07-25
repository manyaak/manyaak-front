import Profile from '@/components/common/Profile';
import TextButton from '@/components/common/TextButton';
import { ReactComponent as HangoutOutlineIcon } from '@/assets/icons/HangoutOutlineIcon.svg';
import * as styles from '../FriendContent.css';

export interface GroupItemProps {
  id: number;
  name: string;
  profileImg: string[];
}

const GroupItem = ({ id, name, profileImg }: GroupItemProps) => {
  const onMakeHangout = () => {
    console.log('id: ', id);
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
