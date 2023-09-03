import { z } from 'zod';
import { getApi } from '@/utils/api';

const BASE_QUERY_KEY = ['hangout'];

// TODO type
/** 약속 상세 정보를 조회하는 API */
export const api_getHangoutDetail = getApi('GET', '/api/hangout', {
  needToLogin: true,
  requestSchema: z.object({
    pathParams: z.tuple([z.number().describe('hangout id')]),
  }),
  getQueryKey: (requestInput?) =>
    requestInput
      ? [...BASE_QUERY_KEY, 'single', requestInput.pathParams[0]]
      : [...BASE_QUERY_KEY, 'single'],
  _resultType: {} as any,
});
