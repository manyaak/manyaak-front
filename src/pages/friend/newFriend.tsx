import { useNavigate } from 'react-router-dom';
import PageSubHeader from '@/components/common/PageSubHeader';
import NewFriendContent from '@/components/newFriend/NewFriendContent';

const NewFriendTab = () => {
  const mainTitle = '친구 추가';

  const navigate = useNavigate();

  const onMovePrevPage = () => {
    navigate(-1);
  };

  return (
    <>
      <div style={{ margin: '0 -20px' }}>
        <PageSubHeader title={mainTitle} goBefore={onMovePrevPage} />
      </div>
      <NewFriendContent />
    </>
  );
};

export default NewFriendTab;
