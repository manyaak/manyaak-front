/* eslint-disable consistent-return */
import { useState } from 'react';
import TextButton from '@/components/common/TextButton';
import SelectUserList from '@/components/common/SelectUserList';
import FooterButton from '@/components/common/FooterButton';
import { HangoutDataType, NEW_HANGOUT_STEP_KEY } from '../NewHangoutInfo';
import * as styles from './SelectFriendStep.css';

import { friendDummyData, userDummydata } from '@/dummyData';

interface SelectFriendStepProps {
  onNextStep: (
    data?: HangoutDataType[typeof NEW_HANGOUT_STEP_KEY.selectFriend],
  ) => void;
}

type HangoutUserType = 'friend' | 'group';

const SelectFriendStep = ({ onNextStep }: SelectFriendStepProps) => {
  const [hangoutUserType, setHangoutUserType] =
    useState<HangoutUserType>('friend');
  const [selectedId, setSelectedId] = useState<number>();
  const [isValid, setIsValid] = useState(false);

  const onSelect = (id: number) => {
    setSelectedId(id);
    setIsValid(true);
  };

  // TODO: dummy data
  const renderContentByType = () => {
    switch (hangoutUserType) {
      case 'friend':
        return (
          <SelectUserList
            type="friend"
            list={userDummydata}
            selectedIdList={selectedId ? [selectedId] : undefined}
            onSelect={onSelect}
          />
        );
      case 'group':
        return (
          <SelectUserList
            type="group"
            list={friendDummyData.group}
            selectedIdList={selectedId ? [selectedId] : undefined}
            onSelect={onSelect}
          />
        );
      default:
    }
  };

  const onChangeHangoutUserType = (type: HangoutUserType) => {
    setHangoutUserType(type);
    setSelectedId(undefined);
    setIsValid(false);
  };

  const onClickNextBtn = () => {
    if (isValid) {
      const data = {
        type: hangoutUserType,
        selectedId: selectedId as number,
      };

      onNextStep(data);
    }
  };

  return (
    <>
      <div>
        <div className={styles.buttonsWrapper}>
          <TextButton
            label="1:1 약속"
            sizeType="small"
            className={
              hangoutUserType === 'friend' ? styles.activate : undefined
            }
            onClick={() => onChangeHangoutUserType('friend')}
          />
          <TextButton
            label="그룹 약속"
            sizeType="small"
            className={
              hangoutUserType === 'group' ? styles.activate : undefined
            }
            onClick={() => onChangeHangoutUserType('group')}
          />
        </div>
        <div>{renderContentByType()}</div>
      </div>
      <FooterButton onClick={onClickNextBtn} disabled={!isValid} label="다음" />
    </>
  );
};

export default SelectFriendStep;
