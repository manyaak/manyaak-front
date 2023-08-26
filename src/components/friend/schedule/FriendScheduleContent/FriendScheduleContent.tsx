import { useState } from 'react';
import { ReactComponent as ArrowDownIcon } from '@/assets/icons/ArrowDownIcon.svg';
import { ReactComponent as HangoutOutlineIcon } from '@/assets/icons/HangoutOutlineIcon.svg';
import * as styles from './FriendScheduleContent.css';
import TextButton from '@/components/common/TextButton';
import UserImage from '@/components/common/UserImage';
import ScheduleList from './ScheduleList';

interface FriendScheduleContentProps {
  userProfileInfo: {
    profileImg: string;
    name: string;
    statusMessage?: string;
  };
}

const FriendScheduleContent = ({
  userProfileInfo,
}: FriendScheduleContentProps) => {
  const { profileImg, name, statusMessage } = userProfileInfo;

  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <ArrowDownIcon className={styles.arrowIcon} />
        <div className={styles.headerTitle}>친구 일정</div>
        <TextButton
          label="약속 잡기"
          iconSvg={<HangoutOutlineIcon />}
          className={styles.hangoutButton}
        />
      </div>
      <div className={styles.userProfile}>
        <UserImage src={profileImg} size={70} />
        <div className={styles.name}>{name}</div>
        {statusMessage && (
          <div className={styles.statusMessage}>{statusMessage}</div>
        )}
      </div>
      <ScheduleList />
      <button
        type="button"
        className={styles.noFriendButton}
        onClick={() => {}}
      >
        친구 연결 끊기
      </button>
    </div>
  );
};

export default FriendScheduleContent;
