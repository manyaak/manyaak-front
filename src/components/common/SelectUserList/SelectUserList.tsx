import CheckBox from '@/components/common/CheckBox';
import Profile from '@/components/common/Profile';
import * as styles from './SelectUserList.css';

interface BaseUserInfo {
  id: number;
  name: string;
}

interface FriendInfo extends BaseUserInfo {
  profileImg: string;
}

interface GroupInfo extends BaseUserInfo {
  profileImg: string[];
}

interface BaseSelectUserListProps {
  selectedId?: number;
  onSelect?: (id: number) => void;
}

interface SelectFriendListProps extends BaseSelectUserListProps {
  type: 'friend';
  list: FriendInfo[];
}

interface SelectGroupListProps extends BaseSelectUserListProps {
  type: 'group';
  list: GroupInfo[];
}

type SelectUserListProps = SelectFriendListProps | SelectGroupListProps;

const SelectUserList = ({
  type,
  list,
  selectedId,
  onSelect,
}: SelectUserListProps) => (
  <div className={styles.userList}>
    {list.map(({ id, name, profileImg }) => (
      <div className={styles.userItem} key={id} onClick={() => onSelect?.(id)}>
        {type === 'friend' ? (
          <Profile type="user" name={name} profileImg={profileImg as string} />
        ) : (
          <Profile
            type="group"
            name={name}
            profileImg={profileImg as string[]}
          />
        )}
        <CheckBox checked={selectedId === id} />
      </div>
    ))}
  </div>
);

export default SelectUserList;
