import { Outlet } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import useNavigationState from '@/hooks/useNavigationState';
import NavigationBar from '@/components/common/NavigationBar';
import FloatingButton from '@/components/common/FloatingButton';

import * as styles from './BasicLayout.css';

const BasicLayout = ({ children }: PropsWithChildren) => {
  const { isNavBarVisible, activeNavType } = useNavigationState();

  return (
    <div className={styles.wrapper[isNavBarVisible ? 'withBar' : 'withoutBar']}>
      {children || <Outlet />}

      {isNavBarVisible && (
        <div className={styles.navBarWrapper}>
          <FloatingButton />
          <NavigationBar focusType={activeNavType} />
        </div>
      )}
    </div>
  );
};

export default BasicLayout;
