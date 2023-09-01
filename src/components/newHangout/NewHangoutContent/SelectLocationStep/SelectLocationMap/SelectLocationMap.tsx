/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEffect, useRef, useState } from 'react';
import InputBar from '@/components/common/InputBar';
import FooterButton from '@/components/common/FooterButton';
import { SelectedPlaceInfoType } from '@/types/hangout';
import SelectLocationInfo from '../SelectLocationInfo';
import * as styles from './SelectLocationMap.css';

const INIT_LATITUDE = 37.4963;
const INIT_LONGITUDE = 126.9569;
const MARKER_IMG_URL = 'http://t1.daumcdn.net/mapjsapi/images/2x/marker.png';
const MARKER_WIDTH = 29;
const MARKER_HEIGHT = 42;
const OVER_MARKER_WIDTH = 35;
const OVER_MARKER_HEIGHT = 50;

export interface SelectLocationMapProps {
  onConfirm: (placeInfo: SelectedPlaceInfoType) => void;
}

const SelectLocationMap = ({ onConfirm }: SelectLocationMapProps) => {
  const [selectedPlaceInfo, setSelectedPlaceInfo] =
    useState<SelectedPlaceInfoType>();
  const [searchVal, setSearchVal] = useState('');

  // 카카오맵 관련 states
  const [map, setMap] = useState<any>();
  const [ps, setPs] = useState<any>();
  const [markers, setMarkers] = useState<any[]>([]);
  const [selectedMarker, setSelectedMarker] = useState<any>();

  const mapContainerRef = useRef<HTMLDivElement>(null);

  const { kakao } = window;

  useEffect(() => {
    kakao.maps.load(() => {
      // 지도 렌더링
      renderMap();

      // 검색 객체
      const kakaoPs = new kakao.maps.services.Places();
      setPs(kakaoPs);
    });
  }, []);

  // 지도 렌더링 함수
  const renderMap = () => {
    const mapOption = {
      center: new kakao.maps.LatLng(INIT_LATITUDE, INIT_LONGITUDE), // 내가 지정한 센터(초기에 보여지는)
      level: 3, // 지도의 확대 레벨
    };
    const kakaoMap = new kakao.maps.Map(mapContainerRef.current, mapOption);
    kakaoMap.setZoomable(true);
    setMap(kakaoMap);
  };

  // 마커 목록 지도에 표시
  const displayMarkers = (places: any[]) => {
    // 초기화
    removeMarkers(markers);
    setMarkers([]);

    const bounds = new kakao.maps.LatLngBounds();
    const newMarkers = [] as any[];

    places.forEach((place) => {
      const placePosition = new kakao.maps.LatLng(place.y, place.x);
      const marker = addMarker(placePosition, map);
      addMarkerClickEvent(marker, place, markerClickCB);

      newMarkers.push(marker);
      bounds.extend(placePosition);
    });

    setMarkers(newMarkers);
    map.setBounds(bounds);
  };

  // 마커 그리기
  const addMarker = (position: any, kakaoMap: any) => {
    const markerSize = new kakao.maps.Size(MARKER_WIDTH, MARKER_HEIGHT);
    const markImage = createMarkerImage(markerSize, MARKER_IMG_URL);

    const marker = new kakao.maps.Marker({ position });

    marker.normalImage = markImage;
    marker.setMap(kakaoMap);

    return marker;
  };

  // 마커 모두 제거
  const removeMarkers = (targetMarkers: any[]) => {
    targetMarkers.forEach((marker) => {
      marker.setMap(null);
    });
  };

  // MakrerImage 객체를 생성하여 반환하는 함수
  const createMarkerImage = (markerSize: any, markerImgURL: string) => {
    const markerImage = new kakao.maps.MarkerImage(markerImgURL, markerSize);

    return markerImage;
  };

  // 마커에 클릭 이벤트 추가
  const addMarkerClickEvent = (
    marker: any,
    place: any,
    eventCallBackFunc: any,
  ) => {
    kakao.maps.event.addListener(marker, 'click', () =>
      eventCallBackFunc(place, marker),
    );
  };

  // 클릭 이벤트 콜백 함수
  const markerClickCB = (place: any, marker: any) => {
    const overMarkerSize = new kakao.maps.Size(
      OVER_MARKER_WIDTH,
      OVER_MARKER_HEIGHT,
    );
    const overMarkImage = createMarkerImage(overMarkerSize, MARKER_IMG_URL);

    // 마커 확대
    if (!selectedMarker || selectedMarker !== marker) {
      marker.setImage(overMarkImage);
    }

    // 선택 장소 업데이트
    setSelectedPlaceInfo(place);

    setSelectedMarker((prev: any) => {
      if (prev && prev !== marker) prev.setImage(prev.normalImage); // 기존 마커 원상복구
      return marker;
    });
  };

  // 검색값 입력
  const onChangeSearchVal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;
    setSearchVal(inputVal);
  };

  // 검색
  const searchByKeyword = () => {
    ps.keywordSearch(searchVal, placesSearchCB);
  };

  // 검색 콜백 함수
  const placesSearchCB = (data: any, status: any) => {
    if (status === kakao.maps.services.Status.OK) {
      displayMarkers(data);
    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
      alert('검색 결과가 존재하지 않습니다.'); // TODO: 에러 처리
    } else if (status === kakao.maps.services.Status.ERROR) {
      alert('검색 결과 중 오류가 발생했습니다.'); // TODO: 에러 처리
    }
  };

  // 확인
  const onConfirmPlace = () => {
    if (selectedPlaceInfo) {
      onConfirm(selectedPlaceInfo);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchBarWrapper}>
        <InputBar
          value={searchVal}
          handleInputChange={onChangeSearchVal}
          placeholder="장소 입력"
          onClickBtn={searchByKeyword}
        />
      </div>
      <div className={styles.mapContainer} ref={mapContainerRef} />
      {selectedPlaceInfo && (
        <div className={styles.selectLocationInfoWrapper}>
          <SelectLocationInfo selectedPlaceInfo={selectedPlaceInfo} />
        </div>
      )}
      <FooterButton
        className={styles.footerWrapper}
        label="선택"
        disabled={!selectedPlaceInfo?.id}
        onClick={onConfirmPlace}
      />
    </div>
  );
};
export default SelectLocationMap;
