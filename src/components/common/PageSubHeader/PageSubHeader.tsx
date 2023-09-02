import { ReactComponent as ArrowDownIcon } from '@/assets/icons/ArrowDownIcon.svg';
import * as styles from './PageSubHeader.css';

interface PageSubHeaderProps {
  title: string;
  goBefore: () => void;
  className?: string;
}

const PageSubHeader = ({ title, goBefore, className }: PageSubHeaderProps) => (
  <div className={`${styles.headerWrapper} ${className}`}>
    <div className={styles.leftArrow} onClick={goBefore}>
      <ArrowDownIcon />
    </div>
    <div className={styles.title}>{title}</div>
  </div>
);

export default PageSubHeader;
