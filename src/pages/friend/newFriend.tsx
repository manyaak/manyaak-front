import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PageSubHeader from '@/components/common/PageSubHeader';
import NewFriendContent from '@/components/newFriend/NewFriendContent';
import { api_requestFriend, api_searchFriend } from '@/apis/friend';
import useApi from '@/hooks/useApi';
import { ApiError } from '@/utils/api';
import { FriendInfo } from '@/types/friend';

const NewFriendTab = () => {
  const mainTitle = '친구 추가';

  const navigate = useNavigate();
  const onMovePrevPage = () => {
    navigate(-1);
  };

  const { fetchWithToken } = useApi();
  const [userSearchData, setUserSearchData] = useState<FriendInfo[]>([]);

  const searchUserAsync = async (value: string) => {
    try {
      const result = await fetchWithToken(api_searchFriend, {
        pathParams: [value],
      });
      setUserSearchData(
        result.map((res) => ({
          ...res,
          name: res.friendName,
          profileImg: res.profileImg ?? '',
        })),
      );
    } catch (error) {
      if (error instanceof ApiError) {
        console.log(error.message);
      }
    }
    return [];
  };

  const requestFriendAsync = async (id: number) => {
    try {
      await fetchWithToken(api_requestFriend, {
        pathParams: [id],
      });
    } catch (error) {
      if (error instanceof ApiError) {
        console.log(error.message);
      }
    }
  };

  return (
    <>
      <div style={{ margin: '0 -20px' }}>
        <PageSubHeader title={mainTitle} goBefore={onMovePrevPage} />
      </div>
      <NewFriendContent
        userSearchData={userSearchData}
        searchUserAsync={searchUserAsync}
        requestFriendAsync={requestFriendAsync}
      />
    </>
  );
};

export default NewFriendTab;
