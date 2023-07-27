import FavoriteGroupList, { FavoriteGroupItemProps } from './FavoriteGroupList';
import ScheduleList from './ScheduleList';
import NewRequestNotification from './NewRequestNotification';

import * as styles from './HomeContent.css';

interface HomeProps {
  data: {
    friendRequestCount: number;
    hangoutRequestCount: number;
    favoriteGroup: FavoriteGroupItemProps[];
  };
}

const HomeContent = ({ data }: HomeProps) => {
  const { friendRequestCount, hangoutRequestCount } = data;
  return (
    <div className={styles.layout}>
      {friendRequestCount > 0 && (
        <NewRequestNotification type="friend" count={friendRequestCount} />
      )}
      {hangoutRequestCount > 0 && (
        <NewRequestNotification type="hangout" count={hangoutRequestCount} />
      )}
      <ScheduleList />
      <FavoriteGroupList list={data.favoriteGroup} />
    </div>
  );
};

export default HomeContent;
