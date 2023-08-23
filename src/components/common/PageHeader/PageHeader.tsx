import * as styles from './PageHeader.css';

interface PageHeaderProps {
  mainTitle: string;
  subTitle?: string;
}

const PageHeader = ({ mainTitle, subTitle }: PageHeaderProps) => (
  <div className={styles.headerWrapper}>
    <div className={styles.mainHeaderText}>{mainTitle}</div>
    {subTitle && <div className={styles.subHeaderText}>{subTitle}</div>}
  </div>
);

export default PageHeader;
