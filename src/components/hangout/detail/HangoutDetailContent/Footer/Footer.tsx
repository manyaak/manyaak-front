import TextButton from '@/components/common/TextButton';
import * as styles from '../HangoutDetailContent.css';

export type FooterButtonInfo = { label: string; onClick: () => void };

interface FooterProps {
  buttonInfo: FooterButtonInfo[];
}

const Footer = ({ buttonInfo }: FooterProps) => (
  <div className={styles.footer}>
    {buttonInfo.map((info) => (
      <TextButton
        key={info.label}
        label={info.label}
        onClick={info.onClick}
        className={styles.footerButton}
      />
    ))}
  </div>
);

export default Footer;
