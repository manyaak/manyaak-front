import { useState } from 'react';
import * as styles from './ContentBox.css';

interface PropsType {
  children: React.ReactNode;
  headerChildren?: React.ReactNode;
  title: string | React.ReactNode;
  height?: string;
  toggle?: boolean;
}

const ContentBox = ({
  children,
  headerChildren,
  title,
  height,
  toggle,
}: PropsType) => {
  const [closed, setClosed] = useState(false);

  return (
    <div className={styles.layoutStyle} style={{ height }}>
      <div className={styles.contentStyle}>{children}</div>
      <div className={styles.headerStyle}>
        <div className={styles.titleStyle}>{title}</div>
        <div>{headerChildren}</div>
      </div>
    </div>
  );
};

export default ContentBox;
