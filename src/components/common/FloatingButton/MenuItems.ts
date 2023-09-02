import { ReactComponent as HangoutOutlineIcon } from '@/assets/icons/HangoutOutlineIcon.svg';
import { ReactComponent as AddScheduleIcon } from '@/assets/icons/AddScheduleIcon.svg';

export interface MenuType {
  label?: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  url?: string;
  onClick?: () => void;
}

export const MENU_ITEMS: MenuType[] = [
  {
    label: '약속 추가',
    icon: HangoutOutlineIcon,
    url: '/hangout/new',
  },
  {
    label: '일정 추가',
    icon: AddScheduleIcon,
    url: '', // TODO: 일정 추가 URL
  },
];
