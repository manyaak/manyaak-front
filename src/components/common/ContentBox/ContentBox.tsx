import { useState } from 'react';
import * as styles from './ContentBox.css';

interface ContentBoxProps {
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
}: ContentBoxProps) => {
  const [closed, setClosed] = useState(false);

  return (
    <div className={styles.layout} style={{ height }}>
      <div className={styles.content}>{children}</div>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <div>{headerChildren}</div>
      </div>
    </div>
  );
};

export default ContentBox;
