import { Location, Outlet, useLocation } from 'react-router-dom';
import { PropsWithChildren, useEffect, useState } from 'react';
import NavigationBar from '@/components/common/NavigationBar';
import FloatingButton from '@/components/common/FloatingButton';

import * as styles from './layout.css';
import { NAV_LIST, NAV_URL_LIST } from '@/constants/navigation';

type NavType = keyof typeof NAV_LIST;
const NavTypes = Object.keys(NAV_URL_LIST) as NavType[];

const safeAreaInset = ((window as any).safeAreaInsets as
  | { top: number; bottom: number }
  | undefined) ?? { top: 0, bottom: 0 };

const MainLayout = ({ children }: PropsWithChildren) => {
  const { pathname }: Location = useLocation();
  const [activeNavType, setActiveNavType] = useState<NavType>('HOME');

  useEffect(() => {
    Object.values(NAV_URL_LIST).forEach((url, idx) => {
      if (pathname === url) setActiveNavType(NavTypes[idx]);
    });
  }, [pathname]);

  return (
    <div
      className={styles.wrapper.withBar}
      style={{
        paddingTop: safeAreaInset.top,
        paddingBottom: safeAreaInset.bottom,
      }}
    >
      {children || <Outlet />}
      <div className={styles.navBarWrapper}>
        <FloatingButton />
        <NavigationBar focusType={activeNavType} />
      </div>
    </div>
  );
};

export default MainLayout;
