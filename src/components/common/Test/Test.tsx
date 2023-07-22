import * as styles from './Test.css';

interface PropsType {
  text: string;
}

const Test = ({ text }: PropsType) => <h1 className={styles.text}>{text}</h1>;

export default Test;
