import HangoutDetailContent from '@/components/hangout/detail/HangoutDetailContent';
import { hangoutsDummydata } from '@/dummyData';

const HangoutDetailTab = () => {
  const buttonInfo = [
    { label: '약속 수정', onClick: () => {} },
    { label: '취소 요청', onClick: () => {} },
  ];

  return (
    <HangoutDetailContent
      hangoutInfo={hangoutsDummydata[0]}
      footerButtonInfo={buttonInfo}
    />
  );
};

export default HangoutDetailTab;
