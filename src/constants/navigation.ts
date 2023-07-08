export const NAV_LIST = {
  home: 'home',
  hangout: 'hangout',
  friend: 'friend',
  myPage: 'myPage',
} as const;

export const NAV_URL_LIST = {
  [NAV_LIST.home]: '/',
  [NAV_LIST.hangout]: '/hangout',
  [NAV_LIST.friend]: '/friend',
  [NAV_LIST.myPage]: '/myPage',
} as const;
