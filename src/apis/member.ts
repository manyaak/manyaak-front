import { z } from 'zod';
import { getApi } from '@/utils/api';

const KEY_BASE = ['member'];

export const api_login = getApi('POST', '/api/member', {
  needToLogin: false,
  requestSchema: z.object({
    pathParams: z.tuple([z.enum(['kakao', 'apple'])]),
    body: z.object({
      token: z.string(),
    }),
  }),
  getQueryKey: () => [...KEY_BASE, 'login'],
  _resultType: '' as string,
});
