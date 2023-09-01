import type {
  Api,
  ApiInfo,
  ApiInfoFull,
  ApiRequest,
  ApiRequestInput,
  ApiRequestInputBasic,
} from '@/types/api';
import { log } from './log';

const CommonError: Record<
  number,
  { title: string; message: string; onPopupPress?: () => void }
> = {
  401: {
    title: '오류가 발생했어요',
    message: '로그인이 필요합니다',
    onPopupPress: () => {},
  },
} as const;

interface ClientError {
  status?: number;
  title?: string;
  message?: string;
  fetchUrl: string;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  clientError?: any;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  serverError?: any;
  onPopupPress?: () => void;
}

export class ApiError extends Error {
  public status?: number;

  public title: string;

  public fetchUrl: string;

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  public clientError?: any;

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  public serverError?: any;

  public onPopupPress?: () => void;

  constructor(error: ClientError) {
    super(error.message ?? '잠시 후 다시 시도해주세요');
    this.name = 'ApiError';
    this.status = error.status;
    this.title = error.title ?? '오류가 발생했어요';
    this.fetchUrl = error.fetchUrl;
    this.clientError = error.clientError;
    this.serverError = error.serverError;
    this.onPopupPress = error.onPopupPress;
  }
}

const fetchApi = async <Result, Request extends ApiRequest>(
  apiInfo: ApiInfoFull<Result, Request>,
  requestInput: ApiRequestInput<Request>,
  accessToken?: string,
): Promise<Result> => {
  const baseUrl = apiInfo.baseUrl ?? 'https://jmleeex.co.kr';
  const url = `${baseUrl}${apiInfo.endpoint}`;

  try {
    // zod로 요청 정보 validate
    const parsedRequestInput = (apiInfo.requestSchema?.parse(requestInput) ??
      {}) as ApiRequestInputBasic;

    const authorizationHeader = accessToken
      ? { Authorization: accessToken }
      : undefined;

    const pathString =
      parsedRequestInput.pathParams?.reduce<string>(
        (prev, cur) => `${prev}/${cur}`,
        '',
      ) ?? '';

    const params = parsedRequestInput.params ?? {};
    const queryString = Object.keys(params).reduce(
      (prev, cur) =>
        `${prev}${
          params[cur] !== null && params[cur] !== undefined
            ? `&${cur}=${params[cur]}`
            : ''
        }`,
      '',
    );
    const fetchUrl = `${url}${pathString}${
      queryString ? `?${queryString.slice(1)}` : ''
    }`;

    // 로그인이 필수인데 token이 없는 경우 요청을 보내지 않고 바로 에러
    if (!accessToken && apiInfo.needToLogin) {
      throw new ApiError({
        status: 401,
        fetchUrl,
        ...CommonError[401],
      });
    }

    const response = await fetch(fetchUrl, {
      method: apiInfo.method,
      body:
        parsedRequestInput.body !== undefined
          ? JSON.stringify(parsedRequestInput.body)
          : undefined,
      headers: {
        'Content-type': 'application/json',
        ...authorizationHeader,
        ...parsedRequestInput.headers,
      },
      mode: 'cors',
    });

    let result;
    try {
      result = await response.json();
    } catch (error) {
      result = null;
    }

    if (response.ok) {
      return result;
    }

    throw new ApiError({
      status: response.status,
      fetchUrl,
      title:
        apiInfo.errorMessages?.[response.status]?.title ??
        CommonError[response.status]?.title,
      message:
        apiInfo.errorMessages?.[response.status]?.message ??
        CommonError[response.status]?.message,
      serverError: result,
      onPopupPress: CommonError[response.status]?.onPopupPress,
    });
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }

    log('error', url, error);

    // `fetchApi`의 모든 에러가 `ApiError`임을 보장
    throw new ApiError({
      fetchUrl: url,
      clientError: error,
    });
  }
};

/**
 * API 호출용 정보를 얻는 함수
 * @param method REST API method
 * @param endpoint 서버 주소를 제외한 endpoint (ex: '/test')
 * @param info `ApiInfo`
 * @returns `Api`
 * @example
 * ```
 * const api_getTest = getApi('GET', '/test', {
 *   needToLogin: false,
 *   requestSchema: z.object({
 *     pathParams: z.tuple([z.string()]),
 *   }),
 *   getQueryKey: (requestInput?) => ['test', requestInput?.pathParams[0] ?? ''],
 *   _resultType: {} as { test: string },
 * });
 * ```
 */
export const getApi = <Result, Request extends ApiRequest>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  endpoint: string,
  info: ApiInfo<Result, Request>,
): Api<Result, Request> => {
  const fetcher = async (
    requestInput: ApiRequestInput<Request>,
    accessToken?: string,
  ) => {
    const response = await fetchApi(
      { method, endpoint, ...info },
      requestInput,
      accessToken,
    );
    return response;
  };

  return {
    fetcher,
    getQueryKey: info.getQueryKey,
    getQueryKeysToInvalidate: info.getQueryKeysToInvalidate,
  } as const;
};
