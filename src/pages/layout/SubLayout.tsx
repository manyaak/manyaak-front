import { Outlet } from 'react-router-dom';
import { PropsWithChildren } from 'react';

import * as styles from './layout.css';

const SubLayout = ({ children }: PropsWithChildren) => (
  <div className={styles.wrapper.withoutBar}>{children || <Outlet />}</div>
);

export default SubLayout;
