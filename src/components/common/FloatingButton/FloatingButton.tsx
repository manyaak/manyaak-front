import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as PlusIcon } from '@/assets/icons/PlusIcon.svg';
import { MENU_ITEMS, MenuType } from './MenuItems';
import * as styles from './FloatingButton.css';

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

  const basicList = withoutBasic ? [] : MENU_ITEMS;
  const allMenuList = [...menuList, ...basicList];

  return (
    <>
      {isShow && <div onClick={onClose} className={styles.overlay} />}
      <div className={styles.itemsWrapper}>
        {isShow &&
          allMenuList.map(({ label, icon: Icon, url, onClick }) => (
            <div className={styles.menuItem} key={label}>
              {label && <div className={styles.label}>{label}</div>}
              <Link to={url || ''} onClick={onClick} className={styles.button}>
                <Icon />
              </Link>
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
