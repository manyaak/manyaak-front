export const NAV_LIST = {
  home: 'home',
  promise: 'promise',
  friend: 'friend',
  myPage: 'myPage',
} as const;

export const NAV_URL_LIST = {
  [NAV_LIST.home]: '/',
  [NAV_LIST.promise]: '/promise',
  [NAV_LIST.friend]: '/friend',
  [NAV_LIST.myPage]: '/myPage',
} as const;
