import { ReactComponent as HomeIcon } from '@/assets/icons/HomeIcon.svg';
import { ReactComponent as PromiseIcon } from '@/assets/icons/PromiseIcon.svg';
import { ReactComponent as FriendIcon } from '@/assets/icons/FriendIcon.svg';
import { ReactComponent as MyPageIcon } from '@/assets/icons/MyPageIcon.svg';
import { NAV_LIST, NAV_URL_LIST } from '@/constants/navigation';

interface NavItemType {
  label: string;
  url: (typeof NAV_URL_LIST)[keyof typeof NAV_URL_LIST];
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const NAV_INFO = {
  [NAV_LIST.home]: {
    label: '홈',
    url: NAV_URL_LIST.home,
    icon: HomeIcon,
  },
  [NAV_LIST.promise]: {
    label: '약속',
    url: NAV_URL_LIST.promise,
    icon: PromiseIcon,
  },
  [NAV_LIST.friend]: {
    label: '친구',
    url: NAV_URL_LIST.friend,
    icon: FriendIcon,
  },
  [NAV_LIST.myPage]: {
    label: '내 정보',
    url: NAV_URL_LIST.myPage,
    icon: MyPageIcon,
  },
} as const satisfies Record<string, NavItemType>;
