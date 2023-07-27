import { ReactComponent as HomeTabLogoIcon } from '@/assets/icons/HomeTabLogoIcon.svg';
import { COLORS } from '@/constants/styles';
import HomeContent from '@/components/home/HomeContent';
import { HomeContentDummyData } from '@/dummyData';

const HomeTab = () => (
  <div
    style={{
      background: COLORS.grayscale.gray50,
      paddingTop: 32,
    }}
  >
    <div style={{ width: 60, margin: '0 auto' }}>
      <HomeTabLogoIcon />
    </div>
    <HomeContent data={HomeContentDummyData} />
  </div>
);

export default HomeTab;
