/* eslint-disable @typescript-eslint/no-use-before-define */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDateTimeAPIString } from '@/utils/date';
import { api_newHangout } from '@/apis/newHangout';
import useApi from '@/hooks/useApi';
import PageHeader from '@/components/common/PageHeader';
import NewHangoutContent, {
  NEW_HANGOUT_STEP_INFO,
  NEW_HANGOUT_STEP_INFO_BY_KEY,
  NEW_HANGOUT_STEP_KEY,
  HEADER_TEXT,
} from '@/components/newHangout/NewHangoutContent';
import { HangoutDataType } from '@/components/newHangout/NewHangoutContent/NewHangoutInfo';

const NewHangoutTab = () => {
  const navigate = useNavigate();
  const { fetchWithToken } = useApi();

  const [step, setStep] = useState<keyof typeof NEW_HANGOUT_STEP_INFO>(1);
  const [hangoutInfo, setHangoutInfo] = useState<HangoutDataType>({
    [NEW_HANGOUT_STEP_KEY.selectFriend]: undefined,
    [NEW_HANGOUT_STEP_KEY.selectDate]: undefined,
    [NEW_HANGOUT_STEP_KEY.selectLocation]: undefined,
  });

  // 다음 단계로 이동
  const onMoveNextStep = async (
    type: keyof typeof NEW_HANGOUT_STEP_KEY,
    data?: HangoutDataType[Exclude<typeof type, 'check'>],
  ) => {
    const thisStep = NEW_HANGOUT_STEP_INFO_BY_KEY[type];

    // 완료 단계 처리
    if (thisStep === 4) {
      const result = await onMakeHangout();
      if (result) {
        alert('약속이 생성되었습니다.');
        navigate(`/hangout/${result.data.id}`);
      }
      return;
    }

    // 다음 단계 처리
    if (data) {
      const nextStep = thisStep + 1;
      setHangoutInfo((prev) => ({ ...prev, [type]: data }));
      setStep(nextStep as keyof typeof NEW_HANGOUT_STEP_INFO);
    }
  };

  // 이전 단계로 이동
  const onMovePrevStep = () => {
    if (step <= 1) {
      navigate('/');
      return;
    }

    setStep((prev) => (prev - 1) as keyof typeof NEW_HANGOUT_STEP_INFO);
  };

  // 약속 생성 API
  const onMakeHangout = async () => {
    try {
      const filteredData = filterData(hangoutInfo);
      const result = await fetchWithToken(api_newHangout, {
        body: filteredData,
      });

      return result;
    } catch (error) {
      console.error(error);
    }
  };

  // API 전송을 위한 데이터 전처리
  const filterData = (data: HangoutDataType) => {
    // 친구 선택 데이터
    const clubId =
      data.selectFriend?.type === 'group' ? data.selectFriend?.selectedId : 0;

    const friendId =
      data.selectFriend?.type === 'friend' ? data.selectFriend.selectedId : 0;

    // 날짜 선택 데이터
    const startDateTime =
      data.selectDate?.start && getDateTimeAPIString(data.selectDate.start);
    const endDateTime =
      data.selectDate?.end && getDateTimeAPIString(data.selectDate.end);

    // 장소 선택 데이터
    const placeName = data.selectLocation?.placeInfo.place_name;
    const address = data.selectLocation?.placeInfo.address_name;
    const latitude = Number(data.selectLocation?.placeInfo.y);
    const longitude = Number(data.selectLocation?.placeInfo.x);

    // 약속 이름
    const name = data.selectLocation?.hangoutName;

    return {
      clubId,
      friendId,
      startDateTime,
      endDateTime,
      placeName,
      address,
      latitude,
      longitude,
      name,
    };
  };

  return (
    <div>
      <PageHeader
        mainTitle="약속 만들기"
        subTitle={HEADER_TEXT[NEW_HANGOUT_STEP_INFO[step]]}
        goBefore={onMovePrevStep}
      />
      <NewHangoutContent
        step={step}
        hangoutInfo={hangoutInfo}
        onMoveNextStep={onMoveNextStep}
      />
    </div>
  );
};

export default NewHangoutTab;
