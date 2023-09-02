import * as styles from './MainHeader.css';

interface MainHeaderProps {
  title: string;
  children: React.ReactNode;
}

/**
 * 메인 페이지들을 위한 공용 헤더 컴폰넌트
 */
const MainHeader = ({ title, children }: MainHeaderProps) => (
  <div className={styles.wrapper}>
    <div className={styles.title}>{title}</div>
    <div>{children}</div>
  </div>
);

export default MainHeader;
