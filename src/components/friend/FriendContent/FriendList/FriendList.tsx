import ContentBox from '@/components/common/ContentBox';
import FriendItem, { FriendItemProps } from './FriendItem';
import EmptyContent from '../../../common/EmptyContent';

interface FriendListProps {
  list: FriendItemProps[];
}

const FriendList = ({ list }: FriendListProps) => (
  <ContentBox title="친구" toggle>
    {list.length > 0 ? (
      list.map((item) => (
        <FriendItem
          key={item.id}
          id={item.id}
          name={item.name}
          profileImg={item.profileImg}
          statusMessage={item.statusMessage}
        />
      ))
    ) : (
      <EmptyContent type="friend" />
    )}
  </ContentBox>
);

export default FriendList;
