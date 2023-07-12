import UserImage from '../UserImage';
import * as styles from './Profile.css';

interface BaseProfileProps {
  name: string;
}

interface SingleProfileProps extends BaseProfileProps {
  type: 'user';
  profileImg: string;
  statusMessage?: string;
}

interface GroupProfileProps extends BaseProfileProps {
  type: 'group';
  name: string;
  profileImg: [string, string] | [string, string, string];
}

type ProfileProps = SingleProfileProps | GroupProfileProps;

/**
 * 사용자 혹은 사용자 그룹의 프로필 정보를 보여주는 컴포넌트
 */
function Profile(props: ProfileProps) {
  const { type, name, profileImg } = props;
  const statusMsg = type === 'user' ? props.statusMessage : undefined;
  const profileImgList = Array.isArray(profileImg) ? profileImg : [profileImg];

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
        {statusMsg && <div className={styles.statusMessage}>{statusMsg}</div>}
      </div>
    </div>
  );
}

export default Profile;
