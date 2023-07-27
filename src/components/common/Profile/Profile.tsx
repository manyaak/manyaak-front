import UserImage from '../UserImage';
import GroupProfileImage from './GroupProfileImage/GroupProfileImage';
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
  profileImg: string[];
}

type ProfileProps = SingleProfileProps | GroupProfileProps;

/**
 * 사용자 혹은 사용자 그룹의 프로필 정보를 보여주는 컴포넌트
 */
const Profile = (props: ProfileProps) => {
  const { type, name, profileImg } = props;

  const statusMsg = type === 'user' ? props.statusMessage : undefined;
  const profileImgList = type === 'user' ? [profileImg] : profileImg;

  return (
    <div className={styles.profileWrap}>
      {profileImgList.length === 1 ? (
        <UserImage src={profileImgList[0]} size={36} />
      ) : (
        <GroupProfileImage src={profileImgList} />
      )}
      <div className={styles.textWrap}>
        <div className={styles.name}>{name}</div>
        {statusMsg && <div className={styles.statusMessage}>{statusMsg}</div>}
      </div>
    </div>
  );
};

export default Profile;
