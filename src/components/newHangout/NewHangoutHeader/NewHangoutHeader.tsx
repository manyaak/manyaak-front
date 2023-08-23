import * as styles from './NewHangoutHeader.css';

interface NewHangoutHeaderProps {
  text: string;
}

const NewHangoutHeader = ({ text }: NewHangoutHeaderProps) => {
  const mainText = '약속 만들기';

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.mainHeaderText}>{mainText}</div>
      {text && <div className={styles.subHeaderText}>{text}</div>}
    </div>
  );
};

export default NewHangoutHeader;
