import { ReactComponent as ArrowDownIcon } from '@/assets/icons/ArrowDownIcon.svg';
import * as styles from '../HomeContent.css';

interface NewRequestNotificationProps {
  type: 'hangout' | 'friend';
  count: number;
}

const NewRequestNotification = ({
  type,
  count,
}: NewRequestNotificationProps) => {
  const checkNotifications = () => {
    console.log('');
  };

  return (
    <div className={styles.notiLayout}>
      <div className={styles.notiText}>
        <span className={styles.notiCount}>{count}</span> 건의{' '}
        {type === 'friend' ? '친구' : '약속'} 요청이 있어요
      </div>
      <button
        type="button"
        onClick={checkNotifications}
        className={styles.notiButton}
      >
        <ArrowDownIcon className={styles.notiButtonIcon} />
      </button>
    </div>
  );
};

export default NewRequestNotification;
