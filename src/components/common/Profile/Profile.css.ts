import { style } from '@vanilla-extract/css';
import { COLORS, TEXT_STYLES } from '@/constants/styles';

export const profileWrap = style({
  display: 'flex',
  alignItems: 'center',
});

export const textWrap = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginLeft: 10,
});

export const name = style({
  ...TEXT_STYLES.body2B,
  color: COLORS.grayscale.black,
});

export const statusMessage = style({
  ...TEXT_STYLES.body3,
  color: COLORS.grayscale.gray700,
});
