import CheckBox from '@/components/common/CheckBox';
import Profile from '@/components/common/Profile';
import EmptyContent from '@/components/common/EmptyContent';
import * as styles from './SelectUserList.css';
import { FriendInfo, GroupInfo } from '@/types/friend';

interface BaseSelectUserListProps {
  selectedIdList?: number[];
  onSelect?: (id: number) => void;
  multiple?: boolean;
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
  selectedIdList,
  onSelect,
}: SelectUserListProps) => (
  <div className={styles.userList}>
    {list.length > 0 ? (
      list.map(({ id, name, profileImg }) => (
        <div
          className={styles.userItem}
          key={id}
          onClick={() => onSelect?.(id)}
        >
          {type === 'friend' && (
            <Profile
              type="user"
              name={name}
              profileImg={profileImg as string}
            />
          )}
          {type === 'group' && (
            <Profile
              type="group"
              name={name}
              profileImg={profileImg as string[]}
            />
          )}
          <CheckBox checked={selectedIdList?.includes(id)} />
        </div>
      ))
    ) : (
      <EmptyContent type={type} />
    )}
  </div>
);

export default SelectUserList;
