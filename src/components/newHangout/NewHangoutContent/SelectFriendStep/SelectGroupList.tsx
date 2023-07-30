import Profile from '@/components/common/Profile';
import * as styles from './SelectFriendStep.css';

interface GroupInfo {
  id: number;
  name: string;
  profileImg: string[];
}

interface SelectGroupListProps {
  list: GroupInfo[];
  selectedId?: number;
  onSelect: (id: number) => void;
}

const SelectGroupList = ({
  list,
  selectedId,
  onSelect,
}: SelectGroupListProps) => (
  <div>
    <div className={styles.selectGroupTitle}>기존 그룹 선택</div>
    <div className={styles.groupList}>
      {list.map(({ id, name, profileImg }) => (
        <div
          key={id}
          onClick={() => onSelect(id)}
          className={
            styles.selectedGroupItem[
              selectedId === id ? 'selected' : 'unselected'
            ]
          }
        >
          <Profile type="group" name={name} profileImg={profileImg} />
        </div>
      ))}
    </div>
  </div>
);

export default SelectGroupList;
