import { useParams, useNavigate } from 'react-router-dom';
import { api_getHangoutDetail } from '@/apis/hangoutDetail';
import useApiQuery from '@/hooks/useApiQuery';
import HangoutDetailContent from '@/components/hangout/detail/HangoutDetailContent';
import { HangoutInfoType } from '@/types/hangout';
import PageSubHeader from '@/components/common/PageSubHeader';

const HangoutDetailTab = () => {
  const navigate = useNavigate();
  const { hid } = useParams();

  const hangoutId = Number(hid);

  const { data: apiData } = useApiQuery(api_getHangoutDetail, {
    pathParams: [hangoutId],
  });

  const data = apiData?.data;

  const membersData = data?.clubMemberInfo.members?.map((member: any) => ({
    id: member.id,
    name: member.nickname,
    profileImg: member.profileImg,
    email: member.email,
    status: member.status,
  }));

  const hangoutInfo: HangoutInfoType = {
    id: data?.id,
    name: data?.name,
    date: new Date(data?.startDate),
    location: data?.placeName,
    members: membersData,
    groupName: data?.clubMemberInfo.clubName,
    groupId: data?.clubMemberInfo.clubId,
    isAccepted: data?.approved,
    latitude: data?.latitude,
    longitude: data?.longitude,
  };

  const buttonInfo = [
    { label: '약속 수정', onClick: () => {} },
    { label: '취소 요청', onClick: () => {} },
  ];

  const mainTitle = hangoutInfo.members ? '약속' : '일정';

  const onMovePrevPage = () => {
    navigate('/');
  };

  return (
    <>
      <div style={{ margin: '0 -20px' }}>
        <PageSubHeader title={mainTitle} goBefore={onMovePrevPage} />
      </div>
      <HangoutDetailContent
        hangoutInfo={hangoutInfo}
        footerButtonInfo={buttonInfo}
      />
    </>
  );
};

export default HangoutDetailTab;
