import { ReactComponent as HangoutOutlineIcon } from '@/assets/icons/HangoutOutlineIcon.svg';
import { ReactComponent as AddScheduleIcon } from '@/assets/icons/AddScheduleIcon.svg';

export interface MenuType {
  label?: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
}

export const MENU_ITEMS: MenuType[] = [
  {
    label: '약속 추가',
    icon: HangoutOutlineIcon,
    onClick: () => {
      console.log('약속 추가 페이지로 이동');
    },
  },
  {
    label: '일정 추가',
    icon: AddScheduleIcon,
    onClick: () => {
      console.log('일정 추가 페이지로 이동');
    },
  },
];
