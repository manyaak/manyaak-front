import { Outlet } from 'react-router-dom';
import { PropsWithChildren } from 'react';

import * as styles from './layout.css';

const safeAreaInset = ((window as any).safeAreaInsets as
  | { top: number; bottom: number }
  | undefined) ?? { top: 0, bottom: 0 };

const SubLayout = ({ children }: PropsWithChildren) => (
  <div
    className={styles.wrapper.withoutBar}
    style={{
      paddingTop: safeAreaInset.top,
      paddingBottom: safeAreaInset.bottom,
    }}
  >
    {children || <Outlet />}
  </div>
);

export default SubLayout;
