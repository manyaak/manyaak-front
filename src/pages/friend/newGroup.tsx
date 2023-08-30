import PageSubHeader from '@/components/common/PageSubHeader';
import NewGroupContent from '@/components/newGroup/NewGroupContent';

const NewGroupTab = () => {
  const mainTitle = '그룹 만들기';

  const onMovePrevPage = () => {
    console.log('이전 페이지 이동');
  };

  return (
    <>
      <div style={{ margin: '0 -20px' }}>
        <PageSubHeader title={mainTitle} goBefore={onMovePrevPage} />
      </div>
      <NewGroupContent />
    </>
  );
};

export default NewGroupTab;
