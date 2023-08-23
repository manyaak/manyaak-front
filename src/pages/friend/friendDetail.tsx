import FriendScheduleContent from '@/components/friend/schedule/FriendScheduleContent';
import { userDummydata } from '@/dummyData';

const FriendScheduleContentTab = () => (
  <FriendScheduleContent userProfileInfo={userDummydata[0]} />
);

export default FriendScheduleContentTab;
