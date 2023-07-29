import { getHourAndMinute, getMonthAndDay } from '@/utils/date';
import * as styles from '../HangoutDetailContent.css';
import { HangoutInfoType } from '@/components/common/HangoutBox/HangoutBox';
import useKakaoMap from '@/hooks/useKakaoMap';
import UserImage from '@/components/common/UserImage';

import { userDummydata } from '@/dummyData';

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
  const { location, name } = infos;
  const mapContainerRef = useKakaoMap(37.4963, 126.9569);
  return (
    <div className={styles.infoListWrapper}>
      <InfoSection
        label="일시"
        data={`${getMonthAndDay(new Date())} ${getHourAndMinute(new Date())}`}
      />
      <div>
        <InfoSection label="위치" data={location} />
        <div className={styles.mapContainer} ref={mapContainerRef} />
      </div>
      <div>
        <InfoSection label="그룹" data={name} />
        <div className={styles.groupMembersWrap}>
          {userDummydata.map((user) => (
            <div key={user.name} className={styles.member}>
              <UserImage src={user.profileImg} />
              <div className={styles.userName}>{user.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HangoutInfoList;
