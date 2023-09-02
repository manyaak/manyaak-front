import MainHeader from '@/components/common/MainHeader';
import { ReactComponent as SettingIcon } from '@/assets/icons/SettingIcon.svg';
import { useLogout } from '@/hooks/useAuth';

import * as styles from './mypage.css';
import ContentBox from '@/components/common/ContentBox';
import TextButton from '@/components/common/TextButton';
import { COLORS } from '@/constants/styles';

const MyPage = () => {
  const logout = useLogout();

  return (
    <>
      <MainHeader title="내 정보">
        <div className={styles.settingIcon}>
          <SettingIcon />
        </div>
      </MainHeader>

      <ContentBox title="내 정보">
        <div className={styles.mypageText}>준비중이에요... 했다 생각해줘 🥹</div>
      </ContentBox>

      <TextButton
        label="로그아웃"
        backgroundColor={COLORS.primary.yellow}
        className={styles.logoutButton}
        onClick={() => {
          logout();
        }}
      />
    </>
  );
};

export default MyPage;
