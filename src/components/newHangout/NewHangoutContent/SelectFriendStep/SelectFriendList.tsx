import CheckBox from '@/components/common/CheckBox';
import Profile from '@/components/common/Profile';
import * as styles from './SelectFriendStep.css';

interface FriendInfo {
  id: number;
  name: string;
  profileImg: string;
}

interface SelectFriendListProps {
  list: FriendInfo[];
  selectedId?: number;
  onSelect: (id: number) => void;
}

const SelectFriendList = ({
  list,
  selectedId,
  onSelect,
}: SelectFriendListProps) => (
  <div className={styles.friendList}>
    {list.map(({ id, name, profileImg }) => (
      <div className={styles.friendItem} key={id} onClick={() => onSelect(id)}>
        <Profile type="user" name={name} profileImg={profileImg} />
        <CheckBox checked={selectedId === id} />
      </div>
    ))}
  </div>
);

export default SelectFriendList;
