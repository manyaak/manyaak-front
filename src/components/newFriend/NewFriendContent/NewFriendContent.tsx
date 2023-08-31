import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBar from '@/components/common/InputBar';
import FooterButton from '@/components/common/FooterButton';
import SelectUserList from '@/components/common/SelectUserList';
import * as styles from './NewFriendContent.css';
import { userDummydata } from '@/dummyData';

const NewFriendContent = () => {
  const description = '친구의 아이디를 검색해보세요';
  const searchPlaceholder = '아이디 입력';
  const footerBtnText = '완료';

  const [searchVal, setSearchVal] = useState('');
  const [selectedId, setSelectedId] = useState<number>();

  const navigate = useNavigate();

  const onSelect = (id: number) => {
    setSelectedId(id);
  };

  const onChangeSearchVal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;
    setSearchVal(inputVal);
  };

  // TODO
  const onSearch = () => {
    console.log('검색 동작');

    setSelectedId(undefined);
  };

  const onComplete = () => {
    console.log('완료 동작');

    navigate('/');
  };

  return (
    <>
      <div className={styles.contentWrapper}>
        <div className={styles.description}>{description}</div>
        <InputBar
          value={searchVal}
          handleInputChange={onChangeSearchVal}
          onClickBtn={onSearch}
          placeholder={searchPlaceholder}
        />
        <div className={styles.listWrapper}>
          <SelectUserList
            type="friend"
            list={userDummydata}
            selectedIdList={selectedId ? [selectedId] : undefined}
            onSelect={onSelect}
          />
        </div>
      </div>
      <FooterButton
        label={footerBtnText}
        onClick={onComplete}
        disabled={!selectedId}
      />
    </>
  );
};

export default NewFriendContent;
