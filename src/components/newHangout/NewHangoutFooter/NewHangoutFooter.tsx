import TextButton from '@/components/common/TextButton';
import * as styles from './NewHangoutFooter.css';

interface NewHangoutFooterProps {
  onNextStep: () => void;
  onSkipStep: () => void;
  skip?: boolean;
  label?: string;
  valid?: boolean;
}

const NewHangoutFooter = ({
  onNextStep,
  onSkipStep,
  skip,
  label,
  valid,
}: NewHangoutFooterProps) => {
  const footerLabel = label || '다음';
  const skipLabel = '건너뛰기';
  const btnActivate = valid ? 'activate' : 'inactivate';

  return (
    <div className={styles.footerWrapper}>
      {skip && (
        <TextButton
          label={skipLabel}
          onClick={onSkipStep}
          sizeType="large"
          className={styles.nextButton.skip}
        />
      )}
      <TextButton
        label={footerLabel}
        onClick={onNextStep}
        sizeType="large"
        className={styles.nextButton[btnActivate]}
      />
    </div>
  );
};

export default NewHangoutFooter;
