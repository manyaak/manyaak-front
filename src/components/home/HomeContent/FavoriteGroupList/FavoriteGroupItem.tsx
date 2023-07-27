import GroupProfileImage from '@/components/common/GroupProfileImage';
import TextButton from '@/components/common/TextButton';
import { COLORS } from '@/constants/styles';

import * as styles from '../HomeContent.css';

export interface FavoriteGroupItemProps {
  id: number;
  name: string;
  profileImg: string[];
}

const FavoriteGroupItem = ({
  id,
  name,
  profileImg,
}: FavoriteGroupItemProps) => {
  const createHangout = () => {
    console.log('id: ', id);
  };

  return (
    <div className={styles.groupItem}>
      <GroupProfileImage src={profileImg} />
      <div className={styles.groupName}>{name}</div>
      <TextButton
        label="약속 잡기"
        onClick={createHangout}
        backgroundColor={COLORS.grayscale.gray100}
        className={styles.groupHangoutButton}
      />
    </div>
  );
};

export default FavoriteGroupItem;
