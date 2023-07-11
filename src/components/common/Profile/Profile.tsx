import UserImage from '../UserImage';
import * as styles from './Profile.css';

interface SingleProfileProps {
  type: 'user';
  name: string;
  profileImg: string;
  statusMessage?: string;
}

interface GroupProfileProps {
  type: 'group';
  name: string;
  profileImg: string[];
  //statusMessage?: undefined;
}

type ProfileProps = SingleProfileProps & GroupProfileProps;

/**
 * 사용자 혹은 사용자 그룹의 프로필 정보를 보여주는 컴포넌트
 */
function Profile({ type, name, profileImg, statusMessage }: ProfileProps) {
  const profileImgList = (
    Array.isArray(profileImg) ? profileImg : [profileImg]
  ).slice(0, 4);
  return (
    <div className={styles.profileWrap}>
      <div
        className={
          styles.profileImgWrap[`${profileImgList.length as 1 | 2 | 3}`]
        }
      >
        {profileImgList.map((img, idx) => (
          <UserImage key={idx} src={img} size={type === 'user' ? 22 : 36} />
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
