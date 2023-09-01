import { ReactComponent as HomeTabLogoIcon } from '@/assets/icons/HomeTabLogoIcon.svg';
import HomeContent from '@/components/home/HomeContent';

import { HomeContentDummyData } from '@/dummyData';
import * as styles from './home.css';
import useApiQuery from '@/hooks/useApiQuery';
import { api_getFriendData } from '@/apis/friend';
import { api_getHangouts } from '@/apis/hangout';
import { formatDateForHangout } from '@/components/hangout/HangoutContent';

const HomeTab = () => {
  const { data: friendData } = useApiQuery(api_getFriendData, {});
  const { data: hangoutData } = useApiQuery(api_getHangouts, {
    params: { date: formatDateForHangout(new Date()) },
  });

  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <HomeTabLogoIcon className={styles.icon} />
      </div>
      <HomeContent
        data={{
          ...HomeContentDummyData,
          friendRequestCount: friendData?.friendRequestList.length ?? 0,
          hangoutRequestCount:
            hangoutData?.data.filter((item) => !item.approved).length ?? 0,
        }}
      />
    </div>
  );
};

export default HomeTab;
