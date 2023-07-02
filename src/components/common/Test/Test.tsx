import * as styles from './Test.css';

interface PropsType {
  text: string;
}

function Test({ text }: PropsType) {
  return <h1 className={styles.text}>{text}</h1>;
}

export default Test;
