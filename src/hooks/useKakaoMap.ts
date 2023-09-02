/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEffect, useRef } from 'react';

const useKakaoMap = (latitude: number, longitude: number) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const { kakao } = window;

  // kakao map load
  useEffect(() => {
    kakao.maps.load(() => {
      const map = renderMap();

      const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(latitude, longitude),
      });
      marker.setMap(map);
    });
  }, []);

  const renderMap = () => {
    const mapOption = {
      center: new kakao.maps.LatLng(latitude, longitude), // 내가 지정한 센터(초기에 보여지는)
      level: 3, // 지도의 확대 레벨
    };
    const kakaoMap = new kakao.maps.Map(mapContainerRef.current, mapOption);
    return kakaoMap;
  };

  return mapContainerRef;
};

export default useKakaoMap;
