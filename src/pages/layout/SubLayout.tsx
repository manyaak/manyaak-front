import { Outlet } from 'react-router-dom';
import { PropsWithChildren, useLayoutEffect } from 'react';
import { SUB_LAYOUT_INFO } from './layoutInfo';

import * as styles from './layout.css';

const SubLayout = ({ children }: PropsWithChildren) => {
  useLayoutEffect(() => {
    (window as any).ReactNativeWebView.postMessage(
      JSON.stringify({
        backgroundColor: SUB_LAYOUT_INFO.backgroundColor,
      }),
    );
  }, []);

  return (
    <div className={styles.wrapper.withoutBar}>{children || <Outlet />}</div>
  );
};

export default SubLayout;
