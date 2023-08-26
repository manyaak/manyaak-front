import { style } from '@vanilla-extract/css';
import { TEXT_STYLES } from '@/constants/styles/textStyles';
import { COLORS } from '@/constants/styles';

export const headerWrapper = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '60px',
  width: '100vw',
  background: COLORS.grayscale.white,
  boxShadow: '0px 3px 5px 0px rgba(199, 199, 199, 0.25)',
});

export const title = style({
  ...TEXT_STYLES.body1B,
  color: COLORS.grayscale.black,
});

export const leftArrow = style({
  position: 'absolute',
  left: '16px',
  width: '20px',
  height: '20px',
  transform: 'rotate(90deg)',
});
