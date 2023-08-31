import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBar from '@/components/common/InputBar';
import FooterButton from '@/components/common/FooterButton';
import SelectUserList from '@/components/common/SelectUserList';
import * as styles from './NewGroupContent.css';
import { userDummydata } from '@/dummyData';

const NewGroupContent = () => {
  const description = '약속을 함께할 친구들을 선택해 그룹을 만들어보세요.';
  const searchPlaceholder = '그룹 이름 입력';
  const footerBtnText = '완료';

  const [groupName, setgroupName] = useState('');
  const [selectedIdList, setSelectedIdList] = useState<number[]>([]);

  const navigate = useNavigate();

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

  // TODO: 완료 알림 처리?
  const onComplete = () => {
    console.log('완료 동작');

    navigate('/');
  };

  const isValid = selectedIdList.length > 0 && groupName.length > 0;

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
            list={userDummydata}
            selectedIdList={selectedIdList}
            onSelect={onSelect}
          />
        </div>
      </div>
      <FooterButton
        label={footerBtnText}
        onClick={onComplete}
        disabled={!isValid}
      />
    </>
  );
};

export default NewGroupContent;
