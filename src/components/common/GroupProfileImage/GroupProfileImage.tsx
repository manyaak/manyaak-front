import UserImage from '@/components/common/UserImage';
import * as styles from './GroupProfileImage.css';

const GroupProfileImage = ({ src }: { src: string[] }) => {
  // 이미지 최대 3개 제한
  const selectLength = Math.min(3, src.length);
  const selectedProfileImg = [];
  for (let i = 0; i < selectLength; i += 1) {
    selectedProfileImg.push(src[i]);
  }

  return (
    <div
      className={styles.profileImgWrap[`${selectedProfileImg.length as 2 | 3}`]}
    >
      {selectedProfileImg.map((img, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <UserImage key={idx} src={img} size={22} />
      ))}
    </div>
  );
};

export default GroupProfileImage;
