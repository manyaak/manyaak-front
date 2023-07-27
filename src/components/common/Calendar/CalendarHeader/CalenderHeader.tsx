import { ReactComponent as ArrowDownIcon } from '@/assets/icons/ArrowDownIcon.svg';
import * as styles from './CalenderHeader.css';

interface CalenderHeaderProps {
  year: number;
  /** 0~11 */
  month: number;
  goBefore: () => void;
  goNext: () => void;
}

const CalenderHeader = ({
  year,
  month,
  goBefore,
  goNext,
}: CalenderHeaderProps) => (
  <div className={styles.header}>
    <ArrowDownIcon className={styles.arrow.left} onClick={goBefore} />
    <div className={styles.date}>{`${year}.${month + 1}`}</div>
    <ArrowDownIcon className={styles.arrow.right} onClick={goNext} />
  </div>
);
export default CalenderHeader;
