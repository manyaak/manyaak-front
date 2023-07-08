import UserImage from '../UserImage';
import * as styles from './Profile.css';

interface ProfileProps {
  /** 프로필 타입이 사용자인지 그룹인지 */
  type: 'user' | 'group';
  /** 사용자 혹은 그룹 이름 */
  name: string;
  /** 사용자 프로필 이미지 혹은 그룹에 속하는 멤버 중 2-3명의 프로필 이미지 */
  profileImg: string | string[];
  /** 사용자 상태 메세지 */
  statusMessage?: string;
}

/**
 * 사용자 혹은 사용자 그룹의 프로필 정보를 보여주는 컴포넌트
 */
function Profile({ type, name, profileImg, statusMessage }: ProfileProps) {
  const profileImgList = Array.isArray(profileImg) ? profileImg : [profileImg];
  return (
    <div className={styles.profileWrap}>
      <div
        className={
          styles.profileImgWrap[`${profileImgList.length as 1 | 2 | 3}`]
        }
      >
        {profileImgList.map((img, idx) => (
          <UserImage
            key={idx}
            src={img}
            size={profileImgList.length > 1 ? 22 : 36}
          />
        ))}
      </div>
      <div className={styles.textWrap}>
        <div className={styles.name}>{name}</div>
        {type === 'user' && statusMessage && (
          <div className={styles.statusMessage}>{statusMessage}</div>
        )}
      </div>
    </div>
  );
}

export default Profile;
