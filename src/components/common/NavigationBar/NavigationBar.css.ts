import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from '@/constants/styles';

export const NavigationStyle = style({
  display: 'flex',
  height: '80px',
  paddingTop: '27.5px',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: COLORS.grayscale.white,
  boxShadow: '0px -1px 2px 0px rgba(189, 189, 189, 0.25)',
});

export const navItemBaseStyle = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  width: '25%',
  height: '100%',
  textDecoration: 'none',
});

export const navItemStyle = styleVariants({
  default: [navItemBaseStyle, { color: COLORS.grayscale.gray500 }],
  focused: [navItemBaseStyle, { color: COLORS.grayscale.gray800 }],
});

export const labelTextStyle = style({
  fontSize: 12,
  fontWeight: 500,
  lineHeight: 'normal',
});

export const focusedBarBaseStyle = style({
  position: 'absolute',
  top: 0,
  width: '35px',
  height: '3.5px',
  borderRadius: '5px',
  background: COLORS.grayscale.gray800,
});

export const focusedBarStyle = styleVariants({
  default: [focusedBarBaseStyle, { display: 'none' }],
  focused: [focusedBarBaseStyle, { display: 'block' }],
});
