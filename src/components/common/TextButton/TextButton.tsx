import { COLORS } from '@/constants/styles';

import * as styles from './TextButton.css';

interface TextButtonProps {
  /** 버튼 텍스트  */
  label: string;
  /** 버튼 내에 들어갈 아이콘 컴포넌트 */
  iconSvg?: React.ReactElement;
  /** 버튼 눌렀을 때 실행되는 함수 */
  onClick?: () => void | Promise<void>;
  /** 버튼 사이즈 타입 (버튼 높이와 텍스트 굵기 결정) */
  sizeType?: 'small' | 'medium' | 'large';
  /** 버튼 배경 색 */
  backgroundColor?: string;
  /** 버튼 텍스트 색 */
  labelColor?: string;
  /** 추가 스타일링을 위한 style */
  className?: string;
}

/**
 * 버튼 컴포넌트
 */
const TextButton = ({
  label,
  iconSvg,
  onClick,
  sizeType = 'small',
  backgroundColor,
  labelColor,
  className,
}: TextButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className={`${styles.button[sizeType]} ${className}`}
    style={{
      backgroundColor,
    }}
  >
    <div
      className={styles.label[sizeType]}
      style={{
        color: labelColor,
      }}
    >
      {label}
    </div>
    {iconSvg && (
      <div
        className={styles.icon}
        style={{
          color: labelColor,
        }}
      >
        {iconSvg}
      </div>
    )}
  </button>
);

export default TextButton;
