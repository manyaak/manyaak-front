import { ReactComponent as HomeTabLogoIcon } from '@/assets/icons/HomeTabLogoIcon.svg';
import HomeContent from '@/components/home/HomeContent';

import { HomeContentDummyData } from '@/dummyData';
import * as styles from './home.css';

const HomeTab = () => (
  <div className={styles.layout}>
    <div className={styles.header}>
      <HomeTabLogoIcon className={styles.icon} />
    </div>
    <HomeContent data={HomeContentDummyData} />
  </div>
);

export default HomeTab;
