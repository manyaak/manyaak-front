import {
  useMutation,
  useQueryClient,
  type UseMutationOptions,
} from '@tanstack/react-query';
import useApi from './useApi';
import type { Api, ApiRequest, ApiRequestInput } from '@/types/api';
import { ApiError } from '@/utils/api';

/**
 * `useMutation` wrapper
 * @param api `Api`
 * @param options `UseMutationOptions & { shouldAlertOnError?: boolean }`
 * @returns `UseMutationResult`
 * @example
 * ```
 * const mutation = useApiMutation(api_postArticle);
 * ```
 */
const useApiMutation = <Result, Request extends ApiRequest, TContext = unknown>(
  api: Api<Result, Request>,
  options?: UseMutationOptions<
    Result,
    ApiError,
    ApiRequestInput<Request>,
    TContext
  > & {
    shouldAlertOnError?: boolean;
  },
) => {
  const { fetchWithToken } = useApi();
  const { getQueryKey, getQueryKeysToInvalidate } = api;
  const { onSuccess, shouldAlertOnError, ...otherOptions } = options ?? {};
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getQueryKey(),
    mutationFn: (request: ApiRequestInput<Request>) =>
      fetchWithToken(api, request, { shouldAlertOnError }),
    onSuccess: (data, variables, context) => {
      onSuccess?.(data, variables, context);
      const queryKeysToInvalidate = getQueryKeysToInvalidate?.(variables, data);
      if (queryKeysToInvalidate) {
        queryKeysToInvalidate.forEach((queryKeyToInvalidate) => {
          queryClient.invalidateQueries({ queryKey: queryKeyToInvalidate });
        });
      }
    },
    ...otherOptions,
  });
};

export default useApiMutation;
