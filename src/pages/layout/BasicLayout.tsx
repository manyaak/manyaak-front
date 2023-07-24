import { Outlet } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import useNavigationState from '@/hooks/useNavigationState';
import NavigationBar from '@/components/common/NavigationBar';
import FloatingButton from '@/components/common/FloatingButton';

import * as styles from './BasicLayout.css';

function BasicLayout({ children }: PropsWithChildren) {
  const { isNavBarVisible } = useNavigationState();

  return (
    <div className={styles.wrapper[isNavBarVisible ? 'withBar' : 'withoutBar']}>
      {children || <Outlet />}

      {isNavBarVisible && (
        <div className={styles.navBarWrapper}>
          <FloatingButton />
          <NavigationBar />
        </div>
      )}
    </div>
  );
}

export default BasicLayout;
