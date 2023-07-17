import ContentBox from '@/components/common/ContentBox';
import ReceivedRequestItem, {
  ReceivedRequestItemProps,
} from './ReceivedRequestItem';
import * as styles from '../Friend.css';

interface ReceivedRequestListProps {
  list: ReceivedRequestItemProps[];
}

const HeaderChildren = ({ num }: { num: number }) => (
  <div className={styles.headerChildren}>
    <div className={styles.numberBox}>{num}</div>
  </div>
);

const ReceivedRequestList = ({ list }: ReceivedRequestListProps) => (
  <ContentBox
    title="받은 요청"
    headerChildren={<HeaderChildren num={list.length} />}
    toggle
  >
    {list.map((item) => (
      <ReceivedRequestItem
        key={item.id}
        id={item.id}
        name={item.name}
        profileImg={item.profileImg}
        statusMessage={item.statusMessage}
      />
    ))}
  </ContentBox>
);

export default ReceivedRequestList;
