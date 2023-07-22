import { ReactComponent as HomeIcon } from '@/assets/icons/HomeIcon.svg';
import { ReactComponent as HangoutIcon } from '@/assets/icons/HangoutIcon.svg';
import { ReactComponent as FriendIcon } from '@/assets/icons/FriendIcon.svg';
import { ReactComponent as MyPageIcon } from '@/assets/icons/MyPageIcon.svg';
import { NAV_LIST, NAV_URL_LIST } from '@/constants/navigation';

interface NavItemType {
  label: string;
  url: (typeof NAV_URL_LIST)[keyof typeof NAV_URL_LIST];
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const NAV_INFO = {
  [NAV_LIST.HOME]: {
    label: '홈',
    url: NAV_URL_LIST.HOME,
    icon: HomeIcon,
  },
  [NAV_LIST.HANGOUT]: {
    label: '약속',
    url: NAV_URL_LIST.HANGOUT,
    icon: HangoutIcon,
  },
  [NAV_LIST.FRIEND]: {
    label: '친구',
    url: NAV_URL_LIST.FRIEND,
    icon: FriendIcon,
  },
  [NAV_LIST.MY_PAGE]: {
    label: '내 정보',
    url: NAV_URL_LIST.MY_PAGE,
    icon: MyPageIcon,
  },
} as const satisfies Record<
  (typeof NAV_LIST)[keyof typeof NAV_LIST],
  NavItemType
>;
