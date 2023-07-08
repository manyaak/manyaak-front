import { NavLink } from 'react-router-dom';
import { COLORS } from '@/constants/styles';
import { NAV_INFO } from './NavInfo';
import * as styles from './NavigationBar.css';

type NavListType = keyof typeof NAV_INFO;

interface NavItemPropsType {
  type: NavListType;
  isFocused?: boolean;
}

const NavItem = ({ type, isFocused }: NavItemPropsType) => {
  const key = isFocused ? 'focused' : 'default';
  const { label, url, icon: Icon } = NAV_INFO[type];

  const iconColor = isFocused
    ? COLORS.grayscale.gray800
    : COLORS.grayscale.gray500;

  return (
    <NavLink to={url} className={styles.navItem[key]}>
      <div className={styles.focusedBar[key]} />
      <Icon fill={iconColor} />
      <div className={styles.labelText}>{label}</div>
    </NavLink>
  );
};

export default NavItem;
