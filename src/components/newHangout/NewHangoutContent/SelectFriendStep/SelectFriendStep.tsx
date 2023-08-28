import { useState } from 'react';
import TextButton from '@/components/common/TextButton';
import SelectUserList from '@/components/common/SelectUserList';
import * as styles from './SelectFriendStep.css';
import { friendDummyData, userDummydata } from '@/dummyData';

interface SelectFriendStepProps {
  setValid: React.Dispatch<React.SetStateAction<boolean>>;
}
type HangoutUserType = 'friend' | 'group';

const SelectFriendStep = ({ setValid }: SelectFriendStepProps) => {
  const [hangoutUserType, setHangoutUserType] =
    useState<HangoutUserType>('friend');
  const [selectedId, setSelectedId] = useState<number>();

  const onSelect = (id: number) => {
    setSelectedId(id);
    setValid(true);
  };

  // TODO: dummy data
  // eslint-disable-next-line consistent-return
  const renderContentByType = () => {
    switch (hangoutUserType) {
      case 'friend':
        return (
          <SelectUserList
            type="friend"
            list={userDummydata}
            selectedId={selectedId}
            onSelect={onSelect}
          />
        );
      case 'group':
        return (
          <SelectUserList
            type="group"
            list={friendDummyData.group}
            selectedId={selectedId}
            onSelect={onSelect}
          />
        );
      default:
    }
  };

  const onChangeHangoutUserType = (type: HangoutUserType) => {
    setHangoutUserType(type);
    setSelectedId(undefined);
    setValid(false);
  };

  return (
    <div>
      <div className={styles.buttonsWrapper}>
        <TextButton
          label="1:1 약속"
          sizeType="small"
          className={hangoutUserType === 'friend' ? styles.activate : undefined}
          onClick={() => onChangeHangoutUserType('friend')}
        />
        <TextButton
          label="그룹 약속"
          sizeType="small"
          className={hangoutUserType === 'group' ? styles.activate : undefined}
          onClick={() => onChangeHangoutUserType('group')}
        />
      </div>
      <div>{renderContentByType()}</div>
    </div>
  );
};

export default SelectFriendStep;
