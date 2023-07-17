import ReceivedRequestList from './ReceivedRequestList';
import GroupList from './GroupList';
import FriendList from './FriendList';
import { FriendItemProps } from './FriendList/FriendItem';
import { ReceivedRequestItemProps } from './ReceivedRequestList/ReceivedRequestItem';
import { GroupItemProps } from './GroupList/GroupItem';
import * as styles from './Friend.css';

interface FrinedProps {
  data: {
    request: ReceivedRequestItemProps[] | [];
    friend: FriendItemProps[] | [];
    group: GroupItemProps[] | [];
  };
}

const Friend = ({ data }: FrinedProps) => (
  <div className={styles.layout}>
    {data.request.length > 0 && <ReceivedRequestList list={data.request} />}
    <GroupList list={data.group} />
    <FriendList list={data.friend} />
  </div>
);

export default Friend;
