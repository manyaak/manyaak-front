import { HangoutInfoType } from '@/components/common/HangoutBox/HangoutBox';
import Footer, { FooterButtonInfo } from './Footer';
import HangoutInfoList from './HangoutInfoList';

import * as styles from './HangoutDetailContent.css';

interface HangoutDetailContentProps {
  hangoutInfo: HangoutInfoType;
  footerButtonInfo: FooterButtonInfo[];
  children?: React.ReactNode;
}

const HangoutDetailContent = ({
  hangoutInfo,
  footerButtonInfo,
  children,
}: HangoutDetailContentProps) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.tag}>회의</div>
      <div className={styles.name}>{hangoutInfo.name}</div>
    </div>
    {children}
    <HangoutInfoList infos={hangoutInfo} />
    <Footer buttonInfo={footerButtonInfo} />
  </div>
);

export default HangoutDetailContent;
