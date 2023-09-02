import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from '@/constants/styles';

export const navigation = style({
  display: 'flex',
  height: '70px',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: COLORS.grayscale.white,
  boxShadow: '0px -1px 2px 0px rgba(189, 189, 189, 0.25)',
});

export const navItemBase = style({
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

export const navItem = styleVariants({
  default: [navItemBase, { color: COLORS.grayscale.gray500 }],
  focused: [navItemBase, { color: COLORS.grayscale.gray800 }],
});

export const labelText = style({
  fontSize: 12,
  fontWeight: 500,
  lineHeight: 'normal',
});

export const focusedBarBase = style({
  position: 'absolute',
  top: 0,
  width: '35px',
  height: '3.5px',
  borderRadius: '5px',
  background: COLORS.grayscale.gray800,
});

export const focusedBar = styleVariants({
  default: [focusedBarBase, { display: 'none' }],
  focused: [focusedBarBase, { display: 'block' }],
});
