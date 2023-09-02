import { useNavigate } from 'react-router-dom';
import PageSubHeader from '@/components/common/PageSubHeader';
import NewGroupContent from '@/components/newGroup/NewGroupContent';
import useApi from '@/hooks/useApi';
import useApiQuery from '@/hooks/useApiQuery';
import { api_createGroup, api_getFriendData } from '@/apis/friend';
import { ApiError } from '@/utils/api';

const NewGroupTab = () => {
  const mainTitle = '그룹 만들기';

  const navigate = useNavigate();

  const onMovePrevPage = () => {
    navigate(-1);
  };

  const { fetchWithToken } = useApi();
  const { data } = useApiQuery(api_getFriendData, {});
  const friendList = data?.friendList ?? [];

  const createGroupAsync = async (name: string, idList: number[]) => {
    try {
      await fetchWithToken(api_createGroup, {
        body: {
          clubName: name,
          friendList: idList,
        },
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
      <NewGroupContent
        userList={friendList}
        createGroupAsync={createGroupAsync}
      />
    </>
  );
};

export default NewGroupTab;
