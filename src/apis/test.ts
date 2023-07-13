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

export const api_updatePost = getApi('PUT', '/posts', {
  needToLogin: false,
  baseUrl: 'https://jsonplaceholder.typicode.com',
  requestSchema: z.object({
    pathParams: z.tuple([z.number().describe('post id')]),
    body: z.object({
      id: z.number(),
      title: z.string(),
      body: z.string(),
      userId: z.number(),
    }),
  }),
  getQueryKey: () => [...BASE_QUERY_KEY, 'upload'],
  _resultType: {} as {
    id: number;
    title: string;
    body: string;
    userId: number;
  },
  getQueryKeysToInvalidate: (requestInput) => [
    api_getPost.getQueryKey({ pathParams: requestInput.pathParams }),
  ],
});
