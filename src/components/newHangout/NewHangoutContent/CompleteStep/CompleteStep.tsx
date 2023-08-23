import * as styles from '../NewHangoutContent.css';

const CompleteStep = () => {
  const completeText = `친구들에게 약속 요청을 보냈어요!\n 친구들이 모두 수락하면 약속이 확정되어요!`;

  return (
    <div className={styles.displayCenterWrapper}>
      <div className={styles.completeText}>{completeText}</div>
    </div>
  );
};

export default CompleteStep;
