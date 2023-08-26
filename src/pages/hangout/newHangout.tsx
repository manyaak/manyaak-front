import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '@/components/common/PageHeader';
import NewHangoutContent, {
  NEW_HANGOUT_STEP_INFO,
  NEW_HANGOUT_STEP_KEY,
  HEADER_TEXT,
} from '@/components/newHangout/NewHangoutContent';
import NewHangoutFooter from '@/components/newHangout/NewHangoutFooter';

const EXCLUDED_STEPS = [
  NEW_HANGOUT_STEP_KEY.check,
  NEW_HANGOUT_STEP_KEY.complete,
] as const;

const SKIPPABLE_STEPS = [NEW_HANGOUT_STEP_KEY.selectLocation] as const;

const NewHangoutTab = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState<keyof typeof NEW_HANGOUT_STEP_INFO>(1);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    // 체크 안해도 되는 단계 처리
    const needNotToCheck =
      EXCLUDED_STEPS.findIndex(
        (item) => item === NEW_HANGOUT_STEP_INFO[step],
      ) !== -1;
    if (needNotToCheck) setValid(true);
  }, [step]);

  // 스킵 가능한 단계 처리
  const canSkip =
    SKIPPABLE_STEPS.findIndex(
      (item) => item === NEW_HANGOUT_STEP_INFO[step],
    ) !== -1;

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

  // TODO
  const onMovePrevStep = () => {
    if (step <= 1) {
      navigate('/');
      return;
    }
    setStep((prev) => (prev - 1) as keyof typeof NEW_HANGOUT_STEP_INFO);
    setValid(false);
  };

  // button label
  const btnLabel =
    NEW_HANGOUT_STEP_INFO[step] === NEW_HANGOUT_STEP_KEY.complete
      ? '완료'
      : '다음';

  return (
    <div>
      <PageHeader
        mainTitle="약속 만들기"
        subTitle={HEADER_TEXT[NEW_HANGOUT_STEP_INFO[step]]}
        goBefore={onMovePrevStep}
      />
      <NewHangoutContent step={step} setValid={setValid} />
      <NewHangoutFooter
        onNextStep={onMoveNextStep}
        onSkipStep={onSkipStep}
        valid={valid}
        skip={canSkip}
        label={btnLabel}
      />
    </div>
  );
};

export default NewHangoutTab;
