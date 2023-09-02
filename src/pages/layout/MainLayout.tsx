import { Location, Navigate, Outlet, useLocation } from 'react-router-dom';
import { PropsWithChildren, useEffect, useState, useLayoutEffect } from 'react';
import NavigationBar from '@/components/common/NavigationBar';
import FloatingButton from '@/components/common/FloatingButton';
import { MAIN_LAYOUT_INFO } from './layoutInfo';
import * as styles from './layout.css';
import { NAV_LIST, NAV_URL_LIST } from '@/constants/navigation';
import { sendDataToMobile } from '@/utils/mobile';
import useAuth from '@/hooks/useAuth';

type NavType = keyof typeof NAV_LIST;
const NavTypes = Object.keys(NAV_URL_LIST) as NavType[];

const MainLayout = ({ children }: PropsWithChildren) => {
  const { pathname }: Location = useLocation();
  const [activeNavType, setActiveNavType] = useState<NavType>('HOME');
  const { isLogined } = useAuth();

  useEffect(() => {
    Object.values(NAV_URL_LIST).forEach((url, idx) => {
      if (pathname === url) setActiveNavType(NavTypes[idx]);
    });
  }, [pathname]);

  useLayoutEffect(() => {
    sendDataToMobile({ backgroundColor: MAIN_LAYOUT_INFO.backgroundColor });
  }, []);

  if (!isLogined) {
    return <Navigate to="/login" />;
  }

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
