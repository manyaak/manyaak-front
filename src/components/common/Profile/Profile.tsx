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

  // 이미지 최대 3개 제한
  const selectLength = Math.min(3, profileImgList.length);
  const selectedProfileImg = [];
  for (let i = 0; i < selectLength; i += 1) {
    selectedProfileImg.push(profileImgList[i]);
  }

  return (
    <div className={styles.profileWrap}>
      <div
        className={
          styles.profileImgWrap[`${selectedProfileImg.length as 1 | 2 | 3}`]
        }
      >
        {selectedProfileImg.map((img, idx) => (
          <UserImage key={idx} src={img} size={type === 'group' ? 22 : 36} />
        ))}
      </div>
      <div className={styles.textWrap}>
        <div className={styles.name}>{name}</div>
        {statusMsg && <div className={styles.statusMessage}>{statusMsg}</div>}
      </div>
    </div>
  );
};

export default Profile;
