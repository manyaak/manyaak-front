import { COLORS } from '@/constants/styles';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import * as styles from './TextButton.css';

interface TextButtonProps {
  /** 버튼 텍스트  */
  label: string;
  /** 버튼 내에 들어갈 아이콘 컴포넌트 */
  iconSvg?: React.ReactElement;
  /** 버튼 눌렀을 때 실행되는 함수 */
  onClick: () => void | Promise<void>;
  /** 버튼 사이즈 타입 (버튼 높이와 텍스트 굵기 결정) */
  sizeType?: 'small' | 'medium' | 'large';
  /** 버튼 너비 */
  width?: number;
  /** 버튼 배경 색 */
  backgroundColor?: string;
  /** 버튼 테두리 색 */
  borderColor?: string;
  /** 버튼 텍스트 색 */
  labelColor?: string;
}

/**
 * 버튼 컴포넌트
 */
function TextButton({
  label,
  iconSvg,
  onClick,
  sizeType = 'small',
  borderColor = '',
  backgroundColor = COLORS.grayscale.gray200,
  labelColor = COLORS.grayscale.gray800,
  width,
}: TextButtonProps) {
  return (
    <button
      onClick={onClick}
      className={styles.button[sizeType]}
      style={assignInlineVars(styles.buttonVars, {
        backgroundColor,
        borderColor,
        width: String(width),
      })}
    >
      <div
        className={styles.label[sizeType]}
        style={assignInlineVars(styles.labelVars, {
          labelColor,
        })}
      >
        {label}
      </div>
      {iconSvg && (
        <div
          className={styles.icon}
          style={assignInlineVars(styles.labelVars, {
            labelColor,
          })}
        >
          {iconSvg}
        </div>
      )}
    </button>
  );
}

export default TextButton;
