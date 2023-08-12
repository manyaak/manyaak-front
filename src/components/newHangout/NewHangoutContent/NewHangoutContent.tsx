import SelectFriendStep from './SelectFriendStep';
import SelectDateStep from './SelectDateStep';
import SelectLocationStep from './SelectLocationStep';
import CheckStep from './CheckStep';
import CompleteStep from './CompleteStep';
import * as styles from './NewHangoutContent.css';

interface NewHangoutContentProps {
  step: number;
  setValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewHangoutContent = ({ step, setValid }: NewHangoutContentProps) => {
  // eslint-disable-next-line consistent-return
  const renderContent = () => {
    switch (step) {
      case 1:
        return <SelectFriendStep setValid={setValid} />;
      case 2:
        return <SelectDateStep setValid={setValid} />;
      case 3:
        return <SelectLocationStep setValid={setValid} />;
      case 4:
        return <CheckStep />;
      case 5:
        return <CompleteStep />;
      default:
    }
  };

  return <div className={styles.contentWrapper}>{renderContent()}</div>;
};

export default NewHangoutContent;
