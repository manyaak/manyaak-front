/* eslint-disable @typescript-eslint/no-explicit-any */
import FriendHeader from '@/components/friend/FriendHeader';
import FriendContent from '@/components/friend/FriendContent';
import useApiQuery from '@/hooks/useApiQuery';
import { api_getFriendData } from '@/apis/friend';
import { FriendInfo, GroupInfo } from '@/types/friend';

const FriendTab = () => {
  const { data } = useApiQuery(api_getFriendData, {});

  const clubList = data?.clubList ?? [];
  const friendList = data?.friendList ?? [];
  const friendRequestList = data?.friendRequestList ?? [];

  // server type to front type
  const groupList = clubList?.map((club: any) => ({
    id: club.id,
    name: club.clubName,
    profileImg: club.clubMemberList.map(
      (member: FriendInfo) => member.profileImg ?? '',
    ),
  }));

  return (
    <>
      <FriendHeader />
      <FriendContent
        data={{
          request: friendRequestList,
          friend: friendList as FriendInfo[],
          group: groupList as GroupInfo[],
        }}
      />
    </>
  );
};

export default FriendTab;
