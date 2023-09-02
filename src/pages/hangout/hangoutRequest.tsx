import HangoutDetailContent from '@/components/hangout/detail/HangoutDetailContent';
import WeeklyScheduleList from '@/components/hangout/detail/WeeklyScheduleList';

import { hangoutsDummydata } from '@/dummyData';

const HangoutDetailTab = () => {
  const buttonInfo = [
    { label: '수락', onClick: () => {} },
    { label: '거절', onClick: () => {} },
  ];

  const data = hangoutsDummydata[0];

  return (
    <HangoutDetailContent hangoutInfo={data} footerButtonInfo={buttonInfo}>
      <WeeklyScheduleList
        year={data.date.getFullYear()}
        month={data.date.getMonth()}
        week={4}
      />
    </HangoutDetailContent>
  );
};

export default HangoutDetailTab;
