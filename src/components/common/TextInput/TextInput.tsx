import { useCallback } from 'react';
import * as styles from './TextInput.css';

export interface TextInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  value: string;
  onTextChange?: (text: string) => void | Promise<void>;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const TextInput = ({
  className,
  placeholder = '',
  value,
  onTextChange,
  onKeyDown,
  ...inputProps
}: TextInputProps) => {
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      inputProps.onChange?.(e);
      onTextChange?.(e.target.value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onTextChange, inputProps.onChange],
  );

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={`${styles.inputStyle} ${className}`}
      {...inputProps}
    />
  );
};

export default TextInput;
