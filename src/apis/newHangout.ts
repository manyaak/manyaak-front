import { z } from 'zod';
import { getApi } from '@/utils/api';

const KEY_BASE = ['hangout'];

// TODO: 타입 정의
export const api_newHangout = getApi('POST', '/api/hangout', {
  needToLogin: true,
  requestSchema: z.object({
    body: z.any(),
  }),
  getQueryKey: () => [...KEY_BASE, 'new'],
  _resultType: {} as {
    data: any;
  },
});
