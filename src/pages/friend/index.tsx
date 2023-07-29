import FriendHeader from '@/components/friend/FriendHeader';
import FriendContent from '@/components/friend/FriendContent';
import { friendDummyData } from '@/dummyData';

// TODO: dummy data
const FriendTab = () => (
  <>
    <FriendHeader />
    <FriendContent data={friendDummyData} />
  </>
);

export default FriendTab;
