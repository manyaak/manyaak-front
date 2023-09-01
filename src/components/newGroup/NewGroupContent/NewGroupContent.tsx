import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBar from '@/components/common/InputBar';
import FooterButton from '@/components/common/FooterButton';
import SelectUserList from '@/components/common/SelectUserList';
import { FriendInfo } from '@/types/friend';
import * as styles from './NewGroupContent.css';

const NewGroupContent = ({
  userList,
  createGroupAsync,
}: {
  userList: FriendInfo[];
  createGroupAsync: (name: string, idList: number[]) => Promise<void>;
}) => {
  const description = '약속을 함께할 친구들을 선택해 그룹을 만들어보세요.';
  const searchPlaceholder = '그룹 이름 입력';
  const footerBtnText = '완료';

  const [groupName, setgroupName] = useState('');
  const [selectedIdList, setSelectedIdList] = useState<number[]>([]);

  const navigate = useNavigate();

  const isValid = selectedIdList.length > 0 && groupName.length > 0;

  // toggle
  const onSelect = (id: number) => {
    const newSelectedIdList = [...selectedIdList];
    const targetIdx = newSelectedIdList.indexOf(id);
    if (targetIdx !== -1) {
      newSelectedIdList.splice(targetIdx, 1);
    } else {
      newSelectedIdList.push(id);
    }

    setSelectedIdList(newSelectedIdList);
  };

  const onChangeGroupNameVal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;
    setgroupName(inputVal);
  };

  const onComplete = () => {
    if (isValid) {
      createGroupAsync(groupName, selectedIdList);
      alert('그룹 생성을 성공적으로 완료했어요!');
      navigate('/friend');
    }
  };

  return (
    <>
      <div className={styles.contentWrapper}>
        <div className={styles.description}>{description}</div>
        <InputBar
          value={groupName}
          handleInputChange={onChangeGroupNameVal}
          placeholder={searchPlaceholder}
        />
        <div className={styles.listWrapper}>
          <SelectUserList
            type="friend"
            list={userList}
            selectedIdList={selectedIdList}
            onSelect={onSelect}
          />
        </div>
      </div>
      <FooterButton
        label={footerBtnText}
        onClick={onComplete}
        // disabled={!isValid}
      />
    </>
  );
};

export default NewGroupContent;
