import PageSubHeader from '@/components/common/PageSubHeader';
import SelectLocationMap, {
  SelectLocationMapProps,
} from '../SelectLocationMap';
import * as styles from './SelectLocationTab.css';

interface SelectLocationTabProps extends SelectLocationMapProps {
  onCloseTab: () => void;
}

const SelectLocationTab = ({
  onConfirm,
  onCloseTab,
}: SelectLocationTabProps) => (
  <div className={styles.tabWrapper}>
    <PageSubHeader title="장소 선택하기" goBefore={onCloseTab} />
    <SelectLocationMap onConfirm={onConfirm} />
  </div>
);

export default SelectLocationTab;
