import { ReactComponent as AddFriendIcon } from '@/assets/icons/AddFriendIcon.svg';
import MainHeader from '@/components/common/MainHeader';
import * as styles from './FriendHeader.css';

const FriendHeader = () => {
  // TODO: 로직 추가
  const onClickIcon = () => {
    console.log('');
  };

  return (
    <MainHeader title="친구">
      <div className={styles.addFriendIcon} onClick={onClickIcon}>
        <AddFriendIcon />
      </div>
    </MainHeader>
  );
};

export default FriendHeader;
