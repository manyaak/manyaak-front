import { create } from 'zustand';
import { type SetStateAction, useCallback } from 'react';
import { ApiError } from '@/utils/api';

interface GlobalApiErrorStore {
  globalApiError: ApiError | null;
  setGlobalApiError: (action: SetStateAction<ApiError | null>) => void;
}

const useGlobalApiError = create<GlobalApiErrorStore>()((set) => ({
  globalApiError: null,
  setGlobalApiError: (action) =>
    set((state) => ({
      ...state,
      globalApiError:
        typeof action === 'function' ? action(state.globalApiError) : action,
    })),
}));

const useGlobalAlert = () => {
  const globalApiError = useGlobalApiError((state) => state.globalApiError);
  const setGlobalApiError = useGlobalApiError(
    (state) => state.setGlobalApiError,
  );

  const alertFromApiError = useCallback(
    (apiError: ApiError) => {
      setGlobalApiError((prev) => {
        // 이미 팝업이 열려 있으면 무시
        if (prev) return prev;
        return apiError;
      });
    },
    [setGlobalApiError],
  );

  const closeGlobalAlert = useCallback(() => {
    setGlobalApiError(null);
  }, [setGlobalApiError]);

  return { globalApiError, alertFromApiError, closeGlobalAlert };
};

export default useGlobalAlert;
