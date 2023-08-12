import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewHangoutContent, {
  NEW_HANGOUT_STEP_INFO,
  NEW_HANGOUT_STEP_KEY,
  HEADER_TEXT,
} from '@/components/newHangout/NewHangoutContent';
import NewHangoutFooter from '@/components/newHangout/NewHangoutFooter';
import NewHangoutHeader from '@/components/newHangout/NewHangoutHeader';

const NewHangoutTab = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState<keyof typeof NEW_HANGOUT_STEP_INFO>(1);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    // 체크 안해도 되는 단계 처리
    const noCheckStepList = [
      NEW_HANGOUT_STEP_KEY.check,
      NEW_HANGOUT_STEP_KEY.complete,
    ];

    let noCheckThisStep = false;
    noCheckStepList.forEach((key) => {
      if (key === NEW_HANGOUT_STEP_INFO[step]) noCheckThisStep = true;
    });
    if (noCheckThisStep) setValid(true);
  }, [step]);

  // 스킵 가능한 단계 처리
  const canSkipStepList = [NEW_HANGOUT_STEP_KEY.selectLocation];

  let canSkipThisStep = false;
  canSkipStepList.forEach((key) => {
    if (key === NEW_HANGOUT_STEP_INFO[step]) canSkipThisStep = true;
  });

  // TODO
  const onMoveNextStep = () => {
    // 유효성 체크
    if (!valid) {
      return;
    }

    // 완료 단계 처리
    if (step >= 5) {
      navigate('/');
      return;
    }

    // 다음 단계 처리
    setStep((prev) => (prev + 1) as keyof typeof NEW_HANGOUT_STEP_INFO);
    setValid(false);
  };

  const onSkipStep = () => {
    setStep((prev) => (prev + 1) as keyof typeof NEW_HANGOUT_STEP_INFO);
    setValid(false);
  };

  // button label
  const btnLabel =
    NEW_HANGOUT_STEP_INFO[step] === NEW_HANGOUT_STEP_KEY.complete
      ? '완료'
      : '다음';

  return (
    <div>
      <NewHangoutHeader text={HEADER_TEXT[NEW_HANGOUT_STEP_INFO[step]]} />
      <NewHangoutContent step={step} setValid={setValid} />
      <NewHangoutFooter
        onNextStep={onMoveNextStep}
        onSkipStep={onSkipStep}
        valid={valid}
        skip={canSkipThisStep}
        label={btnLabel}
      />
    </div>
  );
};

export default NewHangoutTab;
