import { ReactComponent as CheckIcon } from '@/assets/icons/CheckIcon.svg';
import * as styles from './CheckBox.css';

interface CheckBoxProps {
  checked?: boolean;
  size?: number;
  borderRadius?: number;
  background?: string;
  className?: string;
  onClick?: () => void;
}

const CheckBox = ({
  checked,
  size,
  borderRadius,
  background,
  className,
  onClick,
}: CheckBoxProps) => {
  const checkStatus = checked ? 'checked' : 'unchecked';

  return (
    <div
      onClick={onClick}
      className={`${styles.box[checkStatus]} ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius,
        background: checked ? background : undefined,
      }}
    >
      {checked && <CheckIcon className={styles.icon} />}
    </div>
  );
};

export default CheckBox;
