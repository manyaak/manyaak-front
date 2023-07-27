import ContentBox from '@/components/common/ContentBox';
import FavoriteGroupItem, { FavoriteGroupItemProps } from './FavoriteGroupItem';
import * as styles from '../HomeContent.css';

interface FavoriteGroupListProps {
  list: FavoriteGroupItemProps[];
}

const FavoriteGroupList = ({ list }: FavoriteGroupListProps) => (
  <ContentBox title="즐겨찾는 그룹">
    <div className={styles.groupItemsWrap}>
      {list.map((item) => (
        <FavoriteGroupItem
          key={item.id}
          id={item.id}
          name={item.name}
          profileImg={item.profileImg}
        />
      ))}
    </div>
  </ContentBox>
);

export default FavoriteGroupList;
