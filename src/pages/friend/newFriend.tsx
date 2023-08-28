import PageSubHeader from '@/components/common/PageSubHeader';
import NewFriendContent from '@/components/newFriend/NewFriendContent';

const NewFriendTab = () => {
  const mainTitle = '친구 추가';

  const onMovePrevPage = () => {
    console.log('이전 페이지 이동');
  };

  return (
    <>
      <PageSubHeader title={mainTitle} goBefore={onMovePrevPage} />
      <NewFriendContent />
    </>
  );
};

export default NewFriendTab;
