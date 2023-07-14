import { useState } from 'react';

import { ReactComponent as PlusIcon } from '@/assets/icons/PlusIcon.svg';
import { ReactComponent as HangoutOutlineIcon } from '@/assets/icons/HangoutOutlineIcon.svg';
import { ReactComponent as AddScheduleIcon } from '@/assets/icons/AddScheduleIcon.svg';
import * as styles from './FloatingButton.css';

interface MenuType {
  label?: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
}

interface FloatingButtonProps {
  menuList?: MenuType[];
  withoutBasic?: boolean;
}

const FloatingButton = ({
  menuList = [],
  withoutBasic = false,
}: FloatingButtonProps) => {
  const [isShow, setIsShow] = useState(false);

  const activeStatus = isShow ? 'close' : 'add';

  const toggle = () => {
    setIsShow((prev) => !prev);
  };

  const onClose = () => {
    setIsShow(false);
  };

  const basictMenuItems: MenuType[] = [
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

  const basicList = withoutBasic ? [] : basictMenuItems;
  const allMenuList = [...menuList, ...basicList];

  return (
    <>
      {isShow && <div onClick={onClose} className={styles.overlay} />}
      <div className={styles.itemsWrapper}>
        {isShow &&
          allMenuList.map(({ label, icon: Icon, onClick }) => (
            <div className={styles.menuItem} key={label}>
              {label && <div className={styles.label}>{label}</div>}
              <div onClick={onClick} className={styles.button}>
                <Icon />
              </div>
            </div>
          ))}
        <div onClick={toggle} className={styles.mainButton[activeStatus]}>
          <PlusIcon />
        </div>
      </div>
    </>
  );
};

export default FloatingButton;
