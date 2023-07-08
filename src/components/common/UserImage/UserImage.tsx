import { COLORS } from '@/constants/styles';

interface UserImageProps {
  /** 이미지 url */
  src: string;
  /** 이미지 사이즈 */
  size?: number;
  /** 추가 스타일링을 위한 style */
  style?: string;
}

/**
 * 사용자의 프로필 이미지를 담는 컴포넌트
 */
function UserImage({ src, size = 36, style }: UserImageProps) {
  return (
    <img
      src={src}
      alt="profile-img"
      className={`${style}`}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: COLORS.grayscale.gray100,
      }}
    />
  );
}

export default UserImage;
