import { create, useStore } from 'zustand';
import { NAV_LIST } from '@/constants/navigation';

type NavType = keyof typeof NAV_LIST;

interface NavigationStore {
  /** 네비게이션 바 보여줄지 여부 */
  isNavBarVisible: boolean;
  /** 현재 활성화된 탭에 해당하는 NAV_TYPE */
  activeNavType: NavType;
  /** 네비게이션 바를 숨기는 액션 함수 */
  hideNavBar: () => void;
  /** NAV_TYPE을 결정하는 함수 */
  setActiveNavType: (navType: NavType) => void;
}

const navigationStore = create<NavigationStore>((set) => ({
  isNavBarVisible: true,
  activeNavType: NAV_LIST.HOME,
  hideNavBar: () => set({ isNavBarVisible: false }),
  setActiveNavType: (newType: NavType) => set({ activeNavType: newType }),
}));

/**
 * Navigation Bar state를 위한 hook
 */
const useNavigationState = () => {
  const { isNavBarVisible, activeNavType, hideNavBar, setActiveNavType } =
    useStore(
      navigationStore,
      (state) => state,
      () => true,
    );

  return {
    isNavBarVisible,
    activeNavType,
    hideNavBar,
    setActiveNavType,
  };
};

export default useNavigationState;
