import { ReactComponent as CheckIcon } from '@/assets/icons/CheckIcon.svg';
import * as styles from './CheckBox.css';

interface PropsType {
  checked?: boolean;
  size?: number;
  borderRadius?: number;
  background?: string;
  onClick?: () => void;
}

const CheckBox = ({
  checked,
  size,
  borderRadius,
  background,
  onClick,
}: PropsType) => {
  const checkStatus = checked ? 'checked' : 'unchecked';

  return (
    <div
      onClick={onClick}
      className={styles.box[checkStatus]}
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
