import { create } from 'zustand';
import { useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { shallow } from 'zustand/shallow';

interface AuthToken {
  accessToken?: string;
  refreshToken?: string;
}

interface AuthTokenStore extends AuthToken {
  setToken: (token: Partial<AuthToken>) => void;
}

const KEY = 'auth-token';

const storedAuthToken = localStorage.getItem(KEY);

const useAuthTokenStore = create<AuthTokenStore>()((set) => ({
  ...(storedAuthToken ? JSON.parse(storedAuthToken) : {}),
  setToken: (token) => set((state) => ({ ...state, ...token })),
}));

/**
 * access token 등 인증 관련 정보를 사용하는 custom hook
 */
const useAuth = () => {
  const authToken = useAuthTokenStore(
    (state) => ({
      accessToken: state.accessToken,
      refreshToken: state.refreshToken,
    }),
    shallow,
  );
  const setToken = useAuthTokenStore((state) => state.setToken);

  const isLogined =
    authToken.accessToken !== undefined && authToken.refreshToken !== undefined;

  const updateAuthToken = useCallback(
    (accessToken: string, refreshToken: string) => {
      localStorage.setItem(KEY, JSON.stringify({ accessToken, refreshToken }));
      setToken({ accessToken, refreshToken });
    },
    [setToken],
  );

  const clearAuthToken = useCallback(() => {
    localStorage.removeItem(KEY);
    setToken({ accessToken: undefined, refreshToken: undefined });
  }, [setToken]);

  return {
    authToken,
    isLogined,
    updateAuthToken,
    clearAuthToken,
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
