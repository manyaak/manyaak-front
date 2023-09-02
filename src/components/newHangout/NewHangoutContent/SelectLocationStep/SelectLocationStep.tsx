/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import InputBar from '@/components/common/InputBar';
import SelectLocationTab from './SelectLocationTab';
import SelectLocationInfo from './SelectLocationInfo';
import FooterButton from '@/components/common/FooterButton';
import { SelectedPlaceInfoType } from '@/types/hangout';
import * as styles from './SelectLocationStep.css';
import { HangoutDataType, NEW_HANGOUT_STEP_KEY } from '../NewHangoutInfo';

interface SelectLocationStepProps {
  onNextStep: (
    data?: HangoutDataType[typeof NEW_HANGOUT_STEP_KEY.selectLocation],
  ) => void;
}

const SelectLocationStep = ({ onNextStep }: SelectLocationStepProps) => {
  const [hangoutName, setHangoutName] = useState('');
  const [selectedPlaceInfo, setSelectedPlaceInfo] =
    useState<SelectedPlaceInfoType>();
  const [showSelectLocationTab, setShowSelectLocationTab] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const valid = !!hangoutName && !!selectedPlaceInfo;
    setIsValid(valid);
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

  const onClickNextBtn = () => {
    if (isValid) {
      const data = {
        hangoutName: hangoutName as string,
        placeInfo: selectedPlaceInfo as SelectedPlaceInfoType,
      };
      onNextStep(data);
    }
  };

  const onClickSkipBtn = () => {
    // 초기화
    setHangoutName('');
    setSelectedPlaceInfo(undefined);

    onNextStep();
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
      <FooterButton onClick={onClickNextBtn} disabled={!isValid} label="다음" />
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
