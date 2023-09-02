import { ReactComponent as EditSquareIcon } from '@/assets/icons/EditSquareIcon.svg';
import TextInput from '@/components/common/TextInput';
import * as styles from './InputBar.css';

interface InputBarProps {
  placeholder: string;
  value: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickBtn?: () => void;
  className?: string;
}

const InputBar = ({
  placeholder,
  value,
  handleInputChange,
  onClickBtn,
  className,
}: InputBarProps) => (
  <div className={`${styles.inputBarWrapper} ${className}`}>
    <TextInput
      className={styles.textStyle}
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
    />
    <div className={styles.iconWrapper} onClick={onClickBtn}>
      <EditSquareIcon />
    </div>
  </div>
);

export default InputBar;
