import { Navigate, Outlet } from 'react-router-dom';
import { PropsWithChildren, useLayoutEffect } from 'react';
import { SUB_LAYOUT_INFO } from './layoutInfo';

import * as styles from './layout.css';
import { sendDataToMobile } from '@/utils/mobile';
import useAuth from '@/hooks/useAuth';

const SubLayout = ({ children }: PropsWithChildren) => {
  const { isLogined } = useAuth();

  useLayoutEffect(() => {
    sendDataToMobile({
      backgroundColor: SUB_LAYOUT_INFO.backgroundColor,
    });
  }, []);

  if (!isLogined) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={styles.wrapper.withoutBar}>{children || <Outlet />}</div>
  );
};

export default SubLayout;
