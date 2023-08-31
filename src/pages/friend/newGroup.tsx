import { useNavigate } from 'react-router-dom';
import PageSubHeader from '@/components/common/PageSubHeader';
import NewGroupContent from '@/components/newGroup/NewGroupContent';

const NewGroupTab = () => {
  const mainTitle = '그룹 만들기';

  const navigate = useNavigate();

  const onMovePrevPage = () => {
    navigate(-1);
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
