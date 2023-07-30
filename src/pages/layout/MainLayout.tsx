import { Outlet } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import useNavigationState from '@/hooks/useNavigationState';
import NavigationBar from '@/components/common/NavigationBar';
import FloatingButton from '@/components/common/FloatingButton';

import * as styles from './layout.css';

const MainLayout = ({ children }: PropsWithChildren) => {
  const { activeNavType } = useNavigationState();

  return (
    <div className={styles.wrapper.withBar}>
      {children || <Outlet />}
      <div className={styles.navBarWrapper}>
        <FloatingButton />
        <NavigationBar focusType={activeNavType} />
      </div>
    </div>
  );
};

export default MainLayout;
