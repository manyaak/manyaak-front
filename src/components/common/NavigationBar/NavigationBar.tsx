import { NAV_LIST } from '@/constants/navigation';
import NavItem from './NavItem';
import * as styles from './NavigationBar.css';

interface NavigationBarProps {
  focusType: keyof typeof NAV_LIST;
}

const NavigationBar = ({ focusType }: NavigationBarProps) => {
  return (
    <div className={styles.navigation}>
      <NavItem type={NAV_LIST.HOME} isFocused={focusType === NAV_LIST.HOME} />
      <NavItem
        type={NAV_LIST.HANGOUT}
        isFocused={focusType === NAV_LIST.HANGOUT}
      />
      <NavItem
        type={NAV_LIST.FRIEND}
        isFocused={focusType === NAV_LIST.FRIEND}
      />
      <NavItem
        type={NAV_LIST.MY_PAGE}
        isFocused={focusType === NAV_LIST.MY_PAGE}
      />
    </div>
  );
};

export default NavigationBar;
