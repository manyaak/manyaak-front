import { z } from 'zod';
import { getApi } from '@/utils/api';

const BASE_QUERY_KEY = ['friend'] as const;

// TODO type

/** 유저의 친구 목록, 그룹 목록, 친구 요청 목록을 조회하는 API */
export const api_getFriendData = getApi('GET', '/api/friend', {
  needToLogin: true,
  requestSchema: z.object({}),
  getQueryKey: (requestInput?) => [...BASE_QUERY_KEY],
  _resultType: {} as any,
});

/** 아이디를 통해 친구 검색하는 API */
export const api_searchFriend = getApi('GET', '/api/friend/search', {
  needToLogin: true,
  requestSchema: z.object({
    pathParams: z.tuple([z.string().describe('search value')]),
  }),
  getQueryKey: () => [...BASE_QUERY_KEY, 'friend-search'],
  _resultType: {} as {
    id: number;
    friendEmail: string;
    friendName: string;
    profileImg: string | null;
  }[],
});

/** 친구 추가 요청을 보내는 API */
export const api_requestFriend = getApi('POST', '/api/request/friend', {
  needToLogin: true,
  requestSchema: z.object({
    pathParams: z.tuple([z.number().describe('request id')]),
  }),
  getQueryKey: () => [...BASE_QUERY_KEY, 'friend-request'],
  _resultType: {} as any,
});

/** 그룹 생성하는 API */
export const api_createGroup = getApi('POST', '/api/club', {
  needToLogin: true,
  requestSchema: z.object({
    body: z.object({
      clubName: z.string(),
      friendList: z.array(z.number()),
    }),
  }),
  getQueryKey: () => [...BASE_QUERY_KEY, 'friend-request'],
  _resultType: {} as any,
});
