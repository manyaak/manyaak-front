import { getHourAndMinute, getMonthAndDay } from '@/utils/date';
import { HangoutInfoType } from '@/types/hangout';
import useKakaoMap from '@/hooks/useKakaoMap';
import UserImage from '@/components/common/UserImage';

import * as styles from '../HangoutDetailContent.css';

const InfoSection = ({ label, data }: { label: string; data: string }) => (
  <div className={styles.infoSection}>
    <div className={styles.label}>{label}</div>
    <div className={styles.data}>{data}</div>
  </div>
);

interface HangoutInfoListProps {
  infos: HangoutInfoType;
}

const HangoutInfoList = ({ infos }: HangoutInfoListProps) => {
  const { location, members, groupName, latitude, longitude } = infos;

  const mapContainerRef = useKakaoMap(Number(latitude), Number(longitude));

  return (
    <div className={styles.infoListWrapper}>
      <InfoSection
        label="일시"
        data={`${getMonthAndDay(new Date())} ${getHourAndMinute(new Date())}`}
      />
      {latitude && longitude && (
        <div>
          <InfoSection label="위치" data={location} />
          <div className={styles.mapContainer} ref={mapContainerRef} />
        </div>
      )}
      <div>
        <InfoSection label="그룹" data={groupName || ''} />
        <div className={styles.groupMembersWrap}>
          {members?.map((user) => (
            <div key={user.nickname} className={styles.member}>
              <UserImage src={user.profileImg || ''} />
              <div className={styles.userName}>{user.nickname}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HangoutInfoList;
