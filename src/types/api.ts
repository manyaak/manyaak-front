/* eslint-disable @typescript-eslint/no-explicit-any */

import { z } from 'zod';

export type ApiRequest = z.ZodObject<{
  /** `/test/:id/:type`처럼 path에 붙는 파라미터 */
  pathParams?: z.ZodTuple;
  headers?: z.ZodObject<any>;
  /** query parameter (ex: `/test?id=4&type=5`) */
  params?: z.ZodObject<any>;
  /** stringify는 내부적으로 처리 */
  body?: z.ZodTypeAny;
}>;

export type ApiRequestInput<T extends ApiRequest> = z.infer<T>;

export interface ApiRequestInputBasic {
  pathParams?: (string | number)[];
  headers?: Record<string, any>;
  params?: Record<string, any>;
  body?: any;
}

export interface ApiInfo<Result, Request extends ApiRequest> {
  needToLogin: boolean;
  /** 기본 서버 주소 외 다른 서버로 요청해야 하는 경우 */
  baseUrl?: string;
  errorMessages?: {
    [errorCode: number]: {
      title?: string;
      message: string;
      onPopupPress?: () => void;
    };
  };
  /** `zod` 객체 */
  requestSchema: Request;
  /** React Query를 위한 query/mutation key getter */
  getQueryKey: (requestInfo?: ApiRequestInput<Request>) => any[];
  /**
   * API 호출 성공 시 받을 결과의 타입
   * @example
   * ```
   * {
   *   _resultType: {} as { test: string };
   * }
   * ```
   */
  _resultType: Result;
}

export interface ApiInfoFull<Result, Request extends ApiRequest>
  extends ApiInfo<Result, Request> {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  endpoint: string;
}

type ApiFetcher<Result, Request extends ApiRequest> = (
  requestInput: ApiRequestInput<Request>,
  acecssToken?: string,
) => Promise<Result>;

export type Api<Result, Request extends ApiRequest> = {
  readonly fetcher: ApiFetcher<Result, Request>;
  readonly getQueryKey: (requestInfo?: ApiRequestInput<Request>) => any[];
};
