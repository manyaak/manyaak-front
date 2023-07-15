export const NAV_LIST = {
  HOME: 'HOME',
  HANGOUT: 'HANGOUT',
  FRIEND: 'FRIEND',
  MY_PAGE: 'MY_PAGE',
} as const;

export const NAV_URL_LIST = {
  [NAV_LIST.HOME]: '/',
  [NAV_LIST.HANGOUT]: '/hangout',
  [NAV_LIST.FRIEND]: '/friend',
  [NAV_LIST.MY_PAGE]: '/myPage',
} as const;
