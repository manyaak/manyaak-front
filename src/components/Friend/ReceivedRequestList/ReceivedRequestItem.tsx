import Profile from '@/components/common/Profile';
import TextButton from '@/components/common/TextButton';
import * as styles from '../Friend.css';

export interface ReceivedRequestItemProps {
  id: number;
  name: string;
  profileImg: string;
  statusMessage: string;
}

const ReceivedRequestItem = ({
  id,
  name,
  profileImg,
  statusMessage,
}: ReceivedRequestItemProps) => {
  const onAcceptRequest = () => {
    console.log('수락 id:', id);
  };

  const onRejectRequest = () => {
    console.log('거절 id:', id);
  };

  return (
    <div className={styles.item}>
      <Profile
        type="user"
        name={name}
        profileImg={profileImg}
        statusMessage={statusMessage}
      />
      <div className={styles.buttonWrapper}>
        <TextButton label="수락" sizeType="small" onClick={onAcceptRequest} />
        <TextButton label="거절" sizeType="small" onClick={onRejectRequest} />
      </div>
    </div>
  );
};

export default ReceivedRequestItem;
