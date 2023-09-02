import { style, styleVariants } from '@vanilla-extract/css';
import { TEXT_STYLES } from '@/constants/styles';

export const wrapper = style({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const logo = style({
  position: 'relative',
  top: '150px',
});

export const buttonsWrap = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  position: 'relative',
  bottom: '150px',
});

export const buttonBase = style({
  width: '300px',
  height: '42px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
});

export const loginButton = styleVariants({
  kakao: [buttonBase, { backgroundColor: '#FEE500', color: '#000' }],
  apple: [buttonBase, { backgroundColor: '#0A0A0A', color: '#FFF' }],
});

export const buttonLabel = style({
  ...TEXT_STYLES.body2B,
  margin: '0 auto',
});

export const buttonIcon = style({
  position: 'absolute',
  top: '12px',
  left: '16px',
});
