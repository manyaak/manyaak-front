import SelectFriendStep from './SelectFriendStep';
import SelectDateStep from './SelectDateStep';
import SelectLocationStep from './SelectLocationStep';
import CheckStep from './CheckStep';
import { HangoutDataType, NEW_HANGOUT_STEP_KEY } from './NewHangoutInfo';
import * as styles from './NewHangoutContent.css';

interface NewHangoutContentProps {
  step: number;
  hangoutInfo: HangoutDataType;
  onMoveNextStep: (
    type: keyof typeof NEW_HANGOUT_STEP_KEY,
    data?: HangoutDataType[Exclude<typeof type, 'check'>],
  ) => void;
}

const NewHangoutContent = ({
  step,
  hangoutInfo,
  onMoveNextStep,
}: NewHangoutContentProps) => {
  // eslint-disable-next-line consistent-return
  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <SelectFriendStep
            onNextStep={(data) =>
              onMoveNextStep(NEW_HANGOUT_STEP_KEY.selectFriend, data)
            }
          />
        );
      case 2:
        return (
          <SelectDateStep
            onNextStep={(data) =>
              onMoveNextStep(NEW_HANGOUT_STEP_KEY.selectDate, data)
            }
          />
        );
      case 3:
        return (
          <SelectLocationStep
            onNextStep={(data) =>
              onMoveNextStep(NEW_HANGOUT_STEP_KEY.selectLocation, data)
            }
          />
        );
      case 4:
        return (
          <CheckStep
            hangoutInfo={hangoutInfo}
            onNextStep={(data) =>
              onMoveNextStep(NEW_HANGOUT_STEP_KEY.check, data)
            }
          />
        );

      default:
    }
  };

  return <div className={styles.contentWrapper}>{renderContent()}</div>;
};

export default NewHangoutContent;
