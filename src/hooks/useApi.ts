import { useCallback } from 'react';
import useAuth from '@/hooks/useAuth';
import type { Api, ApiRequestInput, ApiRequest } from '@/types/api';
import { ApiError } from '@/utils/api';
import useGlobalAlert from '@/hooks/useGlobalAlert';

/**
 * api wrapper를 반환하는 custom hook
 * - access token을 주입해준다.
 * - `shouldAlertOnError`를 `true`로 하면 에러 발생 시 팝업을 띄워준다.
 * - 주의! `try..catch`로 에러를 핸들링해야 한다.
 * - 주의! React Query와는 독립적이다. React Query를 이용하지 않아야 할 때만 사용하자.
 * @returns `{ fetchWithToken }`
 * @example
 * ```
 * const api_getTest = getApi(...);
 * const { fetchWithToken } = useApi();
 *
 * useEffect(() => {
 *   const init = async () => {
 *     try {
 *       const result = await fetchWithToken(
 *         api_getTest,
 *         { pathParams: [42] },
 *         { shouldAlertOnError: true }
 *       );
 *       console.log(result);
 *     } catch (error) {
 *       if (error instanceof ApiError) {
 *         console.log(error.message);
 *       }
 *     }
 *   };
 *
 *   init();
 * }, []);
 * ```
 */
const useApi = () => {
  const { authToken } = useAuth();
  const { alertFromApiError } = useGlobalAlert();

  const fetchWithToken = useCallback(
    async <Result, Request extends ApiRequest>(
      api: Api<Result, Request>,
      requestInput: ApiRequestInput<Request>,
      options?: {
        shouldAlertOnError?: boolean;
      },
    ) => {
      try {
        const { fetcher } = api;
        const response = await fetcher(requestInput, authToken?.accessToken);

        return response;
      } catch (error) {
        if (error instanceof ApiError) {
          if (options?.shouldAlertOnError) {
            alertFromApiError(error);
          }
        }
        throw error;
      }
    },
    [authToken?.accessToken, alertFromApiError],
  );

  return { fetchWithToken };
};

export default useApi;
