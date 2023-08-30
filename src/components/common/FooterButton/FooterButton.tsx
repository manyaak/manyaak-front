import TextButton from '@/components/common/TextButton';
import * as styles from './FooterButton.css';

interface FooterButtonProps {
  label?: string;
  skipLabel?: string;
  onClick: () => void;
  onSkip?: () => void;
  skip?: boolean;
  disabled?: boolean;
  className?: string;
}

const FooterButton = ({
  label,
  skipLabel,
  onClick,
  onSkip,
  skip,
  disabled,
  className,
}: FooterButtonProps) => {
  const btnLabel = label || '다음';
  const skipBtnLabel = skipLabel || '건너뛰기';
  const btnActivate = disabled ? 'inactivate' : 'activate';

  return (
    <div className={`${styles.footerWrapper} ${className}`}>
      {skip && (
        <TextButton
          label={skipBtnLabel}
          onClick={onSkip}
          sizeType="large"
          className={styles.nextButton.skip}
        />
      )}
      <TextButton
        label={btnLabel}
        onClick={onClick}
        sizeType="large"
        className={styles.nextButton[btnActivate]}
      />
    </div>
  );
};

export default FooterButton;
