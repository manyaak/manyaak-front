import MainHeader from '@/components/common/MainHeader';
import TextButton from '@/components/common/TextButton';

import * as styles from './HangoutHeader.css';

interface HangoutHeaderProps {
  onlyWaiting: boolean;
  waitingItemCount: number;
  toggleWaitingButton: () => void;
}

const HangoutHeader = ({
  onlyWaiting,
  waitingItemCount,
  toggleWaitingButton,
}: HangoutHeaderProps) => (
  <MainHeader title="약속">
    <TextButton
      label={`대기중(${waitingItemCount})`}
      onClick={toggleWaitingButton}
      className={styles.toggleButton[onlyWaiting ? 'active' : 'nonActive']}
    />
  </MainHeader>
);

export default HangoutHeader;
