import { ReactComponent as ArrowDownIcon } from '@/assets/icons/ArrowDownIcon.svg';
import * as styles from './CalenderHeader.css';

interface CalenderHeaderProps {
  year: number;
  /** 0~11 */
  month: number;
  goBefore: () => void;
  goNext: () => void;
  /** 추가 스타일링 */
  className?: string;
}

const CalenderHeader = ({
  year,
  month,
  goBefore,
  goNext,
  className,
}: CalenderHeaderProps) => (
  <div className={`${styles.header} ${className}`}>
    <ArrowDownIcon className={styles.arrow.left} onClick={goBefore} />
    <div className={styles.date}>{`${year}.${month + 1}`}</div>
    <ArrowDownIcon className={styles.arrow.right} onClick={goNext} />
  </div>
);
export default CalenderHeader;
