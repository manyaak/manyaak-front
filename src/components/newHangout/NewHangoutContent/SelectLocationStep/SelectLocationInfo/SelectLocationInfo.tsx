import { ReactComponent as LocationIcon } from '@/assets/icons/LocationIcon.svg';
import * as styles from './SelectLocationInfo.css';

interface SelectLocationInfoProps {
  selectedPlaceInfo: any;
}

const SelectLocationInfo = ({ selectedPlaceInfo }: SelectLocationInfoProps) => (
  <div className={styles.selectedPlaceInfo}>
    <div className={styles.placeNameWrapper}>
      <LocationIcon width={24} height={24} />
      <div>
        {selectedPlaceInfo?.place_name ||
          '선택한 장소에 대한 이름 정보가 없습니다.'}
      </div>
    </div>
    <div className={styles.addressNameWrapper}>
      {selectedPlaceInfo?.address_name ||
        '선택한 장소에 대한 주소 정보가 없습니다.'}
    </div>
  </div>
);

export default SelectLocationInfo;
