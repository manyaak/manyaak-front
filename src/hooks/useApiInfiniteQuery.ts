import {
  useInfiniteQuery,
  type UseInfiniteQueryOptions,
} from '@tanstack/react-query';
import useApi from './useApi';
import type { Api, ApiRequest, ApiRequestInput } from '@/types/api';
import { ApiError } from '@/utils/api';

/**
 * `useInfiniteQuery` wrapper
 * @param api `Api`
 * @param getRequestInput page에 따른 API request getter
 * @param initialPage 초기 페이지 (보통 0 아니면 1)
 * @param getNextPageParam 다음 페이지를 얻는 함수
 * @param options `UseInfiniteQueryOptions & { shouldAlertOnError?: boolean }`
 * @returns `UseInfiniteQueryResult`
 * @example
 * ```
 * const { data, hasNextPage } = useApiInfiniteQuery(
 *   api_getTests,
 *   (page) => ({ pathParams: [page] }),
 *   0,
 *   (lastPage) => lastPage.page + 1,
 * );
 * ```
 */
const useApiInfiniteQuery = <
  Result,
  Request extends ApiRequest,
  TData = Result,
>(
  api: Api<Result, Request>,
  getRequestInput: (page: number) => ApiRequestInput<Request>,
  initialPage: number, // TODO: 서버 명세 통일되면 기본값이 설정된 optional로 수정
  getNextPageParam: (
    lastPage: Result,
    allPages: Result[],
  ) => number | undefined, // TODO: 서버 명세 통일되면 파라미터로 안 받아도 자동 처리하도록 수정
  options?: UseInfiniteQueryOptions<
    Result,
    ApiError,
    TData,
    Result,
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    readonly any[]
  > & { shouldAlertOnError?: boolean },
) => {
  const { fetchWithToken } = useApi();
  const { getQueryKey } = api;

  return useInfiniteQuery({
    queryKey: getQueryKey(getRequestInput(0)),
    queryFn: ({ pageParam = initialPage }) =>
      fetchWithToken(api, getRequestInput(pageParam), {
        shouldAlertOnError: options?.shouldAlertOnError,
      }),
    getNextPageParam,
    ...options,
  });
};

export default useApiInfiniteQuery;
