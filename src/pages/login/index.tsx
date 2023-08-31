import { useCallback, useEffect, useRef, useState } from 'react';
import { ReactComponent as LogoIcon } from '@/assets/icons/LogoIcon.svg';
import { ReactComponent as KakaoLogoIcon } from '@/assets/icons/KakaoLogoIcon.svg';
import { ReactComponent as AppleLogoIcon } from '@/assets/icons/AppleLogoIcon.svg';

import * as styles from './login.css';
import useApiMutation from '@/hooks/useApiMutation';
import { api_login } from '@/apis/member';
import useAuth from '@/hooks/useAuth';

const LoginTab = () => {
  const { updateAuthToken } = useAuth();

  const socialType = useRef<'kakao' | 'apple'>('kakao');
  const [tokenFromRN, setTokenFromRN] = useState<string | null>(null);

  const loginMutation = useApiMutation(api_login, {
    shouldAlertOnError: true,
    onSuccess: (data) => {
      updateAuthToken(data);
      alert(data);
    },
    onError: () => {
      setTokenFromRN(null);
    },
  });

  useEffect(() => {
    if (tokenFromRN !== null) {
      loginMutation.mutate({
        pathParams: [socialType.current],
        body: { token: tokenFromRN },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenFromRN]);

  const messageHandler = useCallback(async (e: { data: string }) => {
    setTokenFromRN(e.data);
    window.removeEventListener('message', messageHandler);
  }, []);

  const onKakaoLogin = () => {
    (window as any).ReactNativeWebView.postMessage('kakao-login');
    socialType.current = 'kakao';
    window.addEventListener('message', messageHandler);
  };
  const onAppleLogin = () => {
    (window as any).ReactNativeWebView.postMessage('apple-login');
    socialType.current = 'apple';
    window.addEventListener('message', messageHandler);
  };

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
