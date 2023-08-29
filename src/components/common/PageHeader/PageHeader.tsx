import { ReactComponent as ArrowDownIcon } from '@/assets/icons/ArrowDownIcon.svg';
import * as styles from './PageHeader.css';

interface PageHeaderProps {
  mainTitle: string;
  subTitle?: string;
  goBefore: () => void;
}

const PageHeader = ({ mainTitle, subTitle, goBefore }: PageHeaderProps) => (
  <div>
    <div className={styles.arrowWrapper}>
      <ArrowDownIcon className={styles.leftArrow} onClick={goBefore} />
    </div>
    <div className={styles.textWrapper}>
      <div className={styles.mainHeaderText}>{mainTitle}</div>
      {subTitle && <div className={styles.subHeaderText}>{subTitle}</div>}
    </div>
  </div>
);

export default PageHeader;
