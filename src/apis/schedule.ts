import { z } from 'zod';
import { getApi } from '@/utils/api';
import { ScheduleInfoType } from '@/types/schedule';

const KEY_BASE = ['schedule'];

export const api_getSchedules = getApi('GET', '/api/schedule/my', {
  needToLogin: true,
  requestSchema: z.object({
    params: z.object({
      year: z.number(),
      month: z.number().min(1).max(12),
    }),
  }),
  getQueryKey: (requestInput?) =>
    requestInput
      ? [
          ...KEY_BASE,
          'monthly',
          requestInput.params.year,
          requestInput.params.month,
        ]
      : [...KEY_BASE, 'monthly'],
  _resultType: [] as ScheduleInfoType[],
});
