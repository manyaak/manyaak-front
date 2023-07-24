import { memo } from 'react';
import { NAV_LIST } from '@/constants/navigation';
import NavItem from './NavItem';
import * as styles from './NavigationBar.css';
import useNavigationState from '@/hooks/useNavigationState';

function NavigationBar() {
  const { activeNavType } = useNavigationState();

  return (
    <div className={styles.navigation}>
      <NavItem
        type={NAV_LIST.HOME}
        isFocused={activeNavType === NAV_LIST.HOME}
      />
      <NavItem
        type={NAV_LIST.HANGOUT}
        isFocused={activeNavType === NAV_LIST.HANGOUT}
      />
      <NavItem
        type={NAV_LIST.FRIEND}
        isFocused={activeNavType === NAV_LIST.FRIEND}
      />
      <NavItem
        type={NAV_LIST.MY_PAGE}
        isFocused={activeNavType === NAV_LIST.MY_PAGE}
      />
    </div>
  );
}

export default memo(NavigationBar);
