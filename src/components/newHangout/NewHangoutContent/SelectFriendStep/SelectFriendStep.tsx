/* eslint-disable consistent-return */
import { useState } from 'react';
import useApiQuery from '@/hooks/useApiQuery';
import { api_getFriendData } from '@/apis/friend';
import { FriendInfo } from '@/types/friend';
import TextButton from '@/components/common/TextButton';
import SelectUserList from '@/components/common/SelectUserList';
import FooterButton from '@/components/common/FooterButton';
import { HangoutDataType, NEW_HANGOUT_STEP_KEY } from '../NewHangoutInfo';

import * as styles from './SelectFriendStep.css';

interface SelectFriendStepProps {
  onNextStep: (
    data?: HangoutDataType[typeof NEW_HANGOUT_STEP_KEY.selectFriend],
  ) => void;
}

type HangoutUserType = 'friend' | 'group';

const SelectFriendStep = ({ onNextStep }: SelectFriendStepProps) => {
  const { data: apiData } = useApiQuery(api_getFriendData, {});

  const clubList = apiData?.clubList;
  const friendList = apiData?.friendList;

  const groupList = clubList?.map((club: any) => ({
    id: club.id,
    name: club.clubName,
    profileImg: club.clubMemberList.map(
      (member: FriendInfo) => member.profileImg ?? '',
    ),
  }));

  const [hangoutUserType, setHangoutUserType] =
    useState<HangoutUserType>('friend');
  const [selectedId, setSelectedId] = useState<number>();
  const [isValid, setIsValid] = useState(false);

  const onSelect = (id: number) => {
    setSelectedId(id);
    setIsValid(true);
  };

  const renderContentByType = () => {
    switch (hangoutUserType) {
      case 'friend':
        return (
          <SelectUserList
            type="friend"
            list={friendList || []}
            selectedIdList={selectedId ? [selectedId] : undefined}
            onSelect={onSelect}
          />
        );
      case 'group':
        return (
          <SelectUserList
            type="group"
            list={groupList || []}
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
