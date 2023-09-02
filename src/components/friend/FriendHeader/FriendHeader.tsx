import { useNavigate } from 'react-router-dom';
import { ReactComponent as AddFriendIcon } from '@/assets/icons/AddFriendIcon.svg';
import MainHeader from '@/components/common/MainHeader';
import * as styles from './FriendHeader.css';

const FriendHeader = () => {
  const navigate = useNavigate();

  const onClickIcon = () => {
    navigate('/friend/new');
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
