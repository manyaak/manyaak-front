import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBar from '@/components/common/InputBar';
import FooterButton from '@/components/common/FooterButton';
import SelectUserList from '@/components/common/SelectUserList';
import * as styles from './NewFriendContent.css';

const NewFriendContent = ({
  userSearchData,
  searchUserAsync,
  requestFriendAsync,
}: {
  userSearchData: any[];
  searchUserAsync: (value: string) => Promise<any>;
  requestFriendAsync: (id: number) => Promise<any>;
}) => {
  const description = '친구의 이름을 검색해보세요';
  const searchPlaceholder = '이름 입력';
  const footerBtnText = '완료';

  const [searchVal, setSearchVal] = useState('');
  const [selectedId, setSelectedId] = useState<number>();

  const navigate = useNavigate();
  const isValid = !!selectedId;

  const onSelect = (id: number) => {
    setSelectedId(id);
  };

  const onChangeSearchVal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;
    setSearchVal(inputVal);
  };

  const onSearch = () => {
    searchUserAsync(searchVal);
    setSelectedId(undefined);
  };

  const onComplete = () => {
    if (isValid) {
      requestFriendAsync(selectedId);
      alert('친구 요청을 성공적으로 보냈습니다.');
      navigate('/');
    }
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
          {userSearchData.length < 1 ? (
            <div className={styles.searchMessage}>검색 결과가 없습니다</div>
          ) : (
            <SelectUserList
              type="friend"
              list={userSearchData}
              selectedIdList={selectedId ? [selectedId] : undefined}
              onSelect={onSelect}
            />
          )}
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
