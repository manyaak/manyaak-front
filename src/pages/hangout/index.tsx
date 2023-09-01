import { useState } from 'react';
import HangoutHeader from '@/components/hangout/HangoutHeader/HangoutHeader';
import HangoutContent, {
  formatDateForHangout,
} from '@/components/hangout/HangoutContent/HangoutContent';
import useApiQuery from '@/hooks/useApiQuery';
import { api_getHangouts } from '@/apis/hangout';

const HangoutTab = () => {
  const [onlyWaiting, setOnlyWaiting] = useState(false);
  const toggleOnlyWaiting = () => setOnlyWaiting((prev) => !prev);

  const { data } = useApiQuery(
    api_getHangouts,
    {
      params: { date: formatDateForHangout(new Date()) },
    },
    {
      select: (response) => ({
        data: response.data.map((item) => ({
          ...item,
          startDate: new Date(item.startDateTime),
          endDate: new Date(item.endDateTime),
        })),
      }),
    },
  );

  const waitingHangoutList = data?.data.filter((item) => !item.approved) ?? [];

  return (
    <>
      <HangoutHeader
        onlyWaiting={onlyWaiting}
        waitingItemCount={waitingHangoutList.length}
        toggleWaitingButton={toggleOnlyWaiting}
      />
      <HangoutContent onlyWaiting={onlyWaiting} />
    </>
  );
};

export default HangoutTab;
