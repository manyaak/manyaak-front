/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import InputBar from '@/components/common/InputBar';
import SelectLocationTab from './SelectLocationTab';
import SelectLocationInfo from './SelectLocationInfo';
import { SelectedPlaceInfoType } from './SelectLocationMap';
import * as styles from './SelectLocationStep.css';

interface SelectLocationStepProps {
  setValid: React.Dispatch<React.SetStateAction<boolean>>;
}

// TODO: 약속 이름, 장소 데이터 저장
const SelectLocationStep = ({ setValid }: SelectLocationStepProps) => {
  const [hangoutName, setHangoutName] = useState('');
  const [selectedPlaceInfo, setSelectedPlaceInfo] =
    useState<SelectedPlaceInfoType>();
  const [showSelectLocationTab, setShowSelectLocationTab] = useState(false);

  useEffect(() => {
    const isValid = !!hangoutName && !!selectedPlaceInfo;
    setValid(isValid);
  }, [hangoutName, selectedPlaceInfo]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;
    setHangoutName(inputVal);
  };

  const onToggleSelectLocationTab = () => {
    setShowSelectLocationTab((prev) => !prev);
  };

  const onConfirmSelectLocation = (placeInfo: SelectedPlaceInfoType) => {
    setSelectedPlaceInfo(placeInfo);
    setShowSelectLocationTab(false);
  };

  return (
    <>
      <div className={styles.contentWrapper}>
        <div className={styles.sectionWrapper}>
          <div className={styles.title}>이름</div>
          <InputBar
            value={hangoutName}
            handleInputChange={onChangeInput}
            placeholder="약속 이름 입력"
          />
        </div>
        <div className={styles.sectionWrapper}>
          <div className={styles.title}>장소</div>
          <div
            className={styles.selectLocationBtn}
            onClick={onToggleSelectLocationTab}
          >
            약속 장소 선택하기
          </div>
          {selectedPlaceInfo && (
            <SelectLocationInfo selectedPlaceInfo={selectedPlaceInfo} />
          )}
        </div>
      </div>
      {showSelectLocationTab && (
        <SelectLocationTab
          onConfirm={onConfirmSelectLocation}
          onCloseTab={onToggleSelectLocationTab}
        />
      )}
    </>
  );
};

export default SelectLocationStep;
