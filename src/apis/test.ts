import { z } from 'zod';
import { getApi } from '@/utils/api';

const BASE_QUERY_KEY = ['test'] as const;

export const api_getPost = getApi('GET', '/posts', {
  needToLogin: false,
  baseUrl: 'https://jsonplaceholder.typicode.com',
  requestSchema: z.object({
    pathParams: z.tuple([z.number().describe('post id')]),
  }),
  getQueryKey: (requestInput?) =>
    requestInput
      ? [...BASE_QUERY_KEY, requestInput.pathParams[0]]
      : [...BASE_QUERY_KEY],
  _resultType: {} as {
    id: number;
    title: string;
    body: string;
    userId: number;
  },
});
