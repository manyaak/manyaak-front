import { z } from 'zod';
import { getApi } from '@/utils/api';

const KEY_BASE = ['hangout'];

export const api_getHangouts = getApi('GET', '/api/hangout', {
  needToLogin: true,
  requestSchema: z.object({
    params: z.object({
      /** yyyy/MM/dd */
      date: z.string(),
    }),
  }),
  getQueryKey: (requestInput?) =>
    requestInput
      ? [...KEY_BASE, 'list', requestInput.params.date]
      : [...KEY_BASE, 'list'],
  _resultType: {} as {
    data: {
      id: number;
      name: string;
      /** yyyy/MM/dd HH:mm */
      startDateTime: string;
      /** yyyy/MM/dd HH:mm */
      endDateTime: string;
      placeName: string;
      address: string;
      latitude: number;
      longitude: number;
      requester: number;
      approved: boolean;
      clubMemberInfo: {
        clubId: number;
        clubName?: string | null;
        members: {
          id: number;
          email: string;
          nickname: string;
          profileImg: string;
          status: string;
        }[];
      };
    }[];
  },
});
