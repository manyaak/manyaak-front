import FooterButton from '@/components/common/FooterButton';
import { HangoutDataType, NEW_HANGOUT_STEP_KEY } from '../NewHangoutInfo';

interface CheckStepProps {
  hangoutInfo: HangoutDataType;
  onNextStep: (
    data?: HangoutDataType[typeof NEW_HANGOUT_STEP_KEY.selectFriend],
  ) => void;
}

const CheckStep = ({ hangoutInfo, onNextStep }: CheckStepProps) => {
  const onConfim = () => {
    onNextStep();
  };

  return (
    <>
      <div>약속 체크 단계</div>
      <FooterButton onClick={onConfim} label="약속 만들기" />
    </>
  );
};

export default CheckStep;
