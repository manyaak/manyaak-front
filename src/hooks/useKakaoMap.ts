import { useEffect, useRef, useState } from 'react';

const useKakaoMap = (latitude: number, longitude: number) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // kakao map script load
  useEffect(() => {
    const $script = document.createElement('script');
    $script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_APP_KEY
    }&autoload=false`;
    $script.addEventListener('load', () => setMapLoaded(true));
    document.head.appendChild($script);
  }, []);

  // kakao map load
  useEffect(() => {
    if (!mapLoaded) return;

    const { kakao } = window;

    kakao.maps.load(() => {
      const map = new kakao.maps.Map(mapContainerRef.current, {
        center: new kakao.maps.LatLng(latitude, longitude),
      });
      const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(latitude, longitude),
      });
      marker.setMap(map);
    });
  }, [mapLoaded, latitude, longitude]);

  return mapContainerRef;
};

export default useKakaoMap;
