import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from './UserImage.css';
import { StyleRule } from '@vanilla-extract/css';

interface UserImageProps {
  /** 이미지 url */
  src: string;
  /** 이미지 사이즈 */
  size?: number;
  /** 추가 스타일링을 위한 style 객체 */
  style?: StyleRule;
}

/**
 * 사용자의 프로필 이미지를 담는 컴포넌트
 */
function UserImage({ src, size = 36, style }: UserImageProps) {
  return (
    <img
      src={src}
      alt="profile-img"
      className={`${styles.image} ${style}`}
      style={assignInlineVars(styles.imageVars, { size: String(size) })}
    />
  );
}

export default UserImage;
