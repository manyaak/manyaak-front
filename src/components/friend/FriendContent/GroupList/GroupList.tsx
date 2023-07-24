import ContentBox from '@/components/common/ContentBox';
import GroupItem, { GroupItemProps } from './GroupItem';
import EmptyContent from '../EmptyContent';

interface GroupListProps {
  list: GroupItemProps[];
}

const GroupList = ({ list }: GroupListProps) => (
  <ContentBox title="그룹" toggle>
    {list.length > 0 ? (
      list.map((item) => (
        <GroupItem
          key={item.id}
          id={item.id}
          name={item.name}
          profileImg={item.profileImg}
        />
      ))
    ) : (
      <EmptyContent type="group" />
    )}
  </ContentBox>
);

export default GroupList;
