import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import useApi from '@/hooks/useApi';
import type { Api, ApiRequest, ApiRequestInput } from '@/types/api';
import { ApiError } from '@/utils/api';

/**
 * `useQuery` wrapper
 * @param api `Api`
 * @param requestInput API request
 * @param options `UseQueryOptions & { shouldAlertOnError?: boolean }`
 * @returns `UseQueryResult`
 * @example
 * ```
 * const { data } = useApiQuery(api_getTest, { pathParams: [42] });
 * ```
 */
const useApiQuery = <Result, Request extends ApiRequest, TData = Result>(
  api: Api<Result, Request>,
  requestInput: ApiRequestInput<Request>,
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  options?: UseQueryOptions<Result, ApiError, TData, readonly any[]> & {
    shouldAlertOnError?: boolean;
  },
) => {
  const { fetchWithToken } = useApi();
  const [, getQueryKey] = api;

  return useQuery({
    queryKey: getQueryKey(requestInput),
    queryFn: () =>
      fetchWithToken(api, requestInput, {
        shouldAlertOnError: options?.shouldAlertOnError,
      }),
    ...options,
  });
};

export default useApiQuery;
