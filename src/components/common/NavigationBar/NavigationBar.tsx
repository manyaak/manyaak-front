import { NAV_LIST } from '@/constants/navigation';
import NavItem from './NavItem';
import * as styles from './NavigationBar.css';

interface NavigationPropsType {
  focusType: keyof typeof NAV_LIST;
}

const NavigationBar = ({ focusType }: NavigationPropsType) => {
  return (
    <div className={styles.Navigation}>
      <NavItem type={NAV_LIST.home} isFocused={focusType === NAV_LIST.home} />
      <NavItem
        type={NAV_LIST.hangout}
        isFocused={focusType === NAV_LIST.hangout}
      />
      <NavItem
        type={NAV_LIST.friend}
        isFocused={focusType === NAV_LIST.friend}
      />
      <NavItem
        type={NAV_LIST.myPage}
        isFocused={focusType === NAV_LIST.myPage}
      />
    </div>
  );
};

export default NavigationBar;
