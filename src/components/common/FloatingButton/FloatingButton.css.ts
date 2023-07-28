import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS, TEXT_STYLES } from '@/constants/styles';

export const overlay = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
  background: '#000000B2',
  zIndex: '10',
  width: '100vw',
  height: '100vh',
});

export const itemsWrapper = style({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  bottom: '70px',
  right: '0',
  gap: '8px',
  zIndex: '11',
  marginBottom: '20px',
  marginRight: '16px',
});

export const menuItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '13px',
});

export const button = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  background: COLORS.primary.yellow,
  cursor: 'pointer',
  transition: 'all 0.3s ease-in',
  padding: '14px',
});

export const mainButton = styleVariants({
  add: [
    button,
    {
      transform: 'rotate(0deg)',
      boxShadow: '0px 8px 26px 0px rgba(0, 0, 0, 0.15)',
      padding: '0',
    },
  ],
  close: [button, { transform: 'rotate(45deg)', padding: '0' }],
});

export const label = style({
  ...TEXT_STYLES.body1B,
  color: COLORS.grayscale.white,
});
