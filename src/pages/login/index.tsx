import { ReactComponent as LogoIcon } from '@/assets/icons/LogoIcon.svg';
import { ReactComponent as KakaoLogoIcon } from '@/assets/icons/KakaoLogoIcon.svg';
import { ReactComponent as AppleLogoIcon } from '@/assets/icons/AppleLogoIcon.svg';

import * as styles from './login.css';

const LoginTab = () => {
  const onKakaoLogin = () => {};
  const onAppleLogin = () => {};

  return (
    <div className={styles.wrapper}>
      <LogoIcon className={styles.logo} />
      <div className={styles.buttonsWrap}>
        <button
          type="button"
          onClick={onKakaoLogin}
          className={styles.loginButton.kakao}
        >
          <KakaoLogoIcon className={styles.buttonIcon} />
          <div className={styles.buttonLabel}>카카오 로그인</div>
        </button>
        <button
          type="button"
          onClick={onAppleLogin}
          className={styles.loginButton.apple}
        >
          <AppleLogoIcon className={styles.buttonIcon} />
          <div className={styles.buttonLabel}>Apple로 계속하기</div>
        </button>
      </div>
    </div>
  );
};

export default LoginTab;
