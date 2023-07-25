import { useState } from 'react';
import HangoutHeader from '@/components/hangout/HangoutHeader/HangoutHeader';
import HangoutContent from '@/components/hangout/HangoutContent/HangoutContent';

const HangoutTab = () => {
  const [onlyWaiting, setOnlyWaiting] = useState(false);
  const toggleOnlyWaiting = () => setOnlyWaiting((prev) => !prev);

  return (
    <>
      <HangoutHeader
        onlyWaiting={onlyWaiting}
        waitingItemCount={2}
        toggleWaitingButton={toggleOnlyWaiting}
      />
      <HangoutContent onlyWaiting={onlyWaiting} />
    </>
  );
};

export default HangoutTab;
