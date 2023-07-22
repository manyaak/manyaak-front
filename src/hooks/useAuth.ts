import { create } from 'zustand';
import { useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { shallow } from 'zustand/shallow';

interface AuthToken {
  accessToken?: string;
}

interface AuthTokenStore extends AuthToken {
  setToken: (accessToken: string | undefined) => void;
}

const useAuthTokenStore = create<AuthTokenStore>()((set) => ({
  setToken: (accessToken) => set((state) => ({ ...state, accessToken })),
}));

const KEY = 'auth-token';

/**
 * access token 등 인증 관련 정보를 사용하는 custom hook
 */
const useAuth = () => {
  const authToken = useAuthTokenStore(
    (state) => ({
      accessToken: state.accessToken,
    }),
    shallow,
  );
  const setToken = useAuthTokenStore((state) => state.setToken);

  const isLogined = authToken.accessToken !== undefined;

  const updateAuthToken = useCallback(
    (accessToken: string) => {
      localStorage.setItem(KEY, JSON.stringify({ accessToken }));
      setToken(accessToken);
    },
    [setToken],
  );

  const clearAuthToken = useCallback(() => {
    localStorage.removeItem(KEY);
    setToken(undefined);
  }, [setToken]);

  const restoreAuthTokenFromStorage = useCallback(() => {
    const storedAuthToken = localStorage.getItem(KEY);
    if (storedAuthToken !== null) {
      const newAuthToken = JSON.parse(storedAuthToken);
      if (newAuthToken.accessToken) {
        setToken(newAuthToken.accessToken);
      } else {
        clearAuthToken();
      }
    }
  }, [setToken, clearAuthToken]);

  return {
    authToken,
    isLogined,
    updateAuthToken,
    clearAuthToken,
    restoreAuthTokenFromStorage,
  };
};

/**
 * 로그아웃 함수를 반환하는 custom hook
 * - 로그아웃 시 반드시 활용해야 한다!
 */
export const useLogout = () => {
  const { clearAuthToken } = useAuth();
  const queryClient = useQueryClient();

  const logout = useCallback(() => {
    clearAuthToken();
    queryClient.clear();
  }, [clearAuthToken, queryClient]);

  return logout;
};

export default useAuth;
