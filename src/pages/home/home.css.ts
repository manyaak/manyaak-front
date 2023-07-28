import { style } from '@vanilla-extract/css';
import { COLORS } from '@/constants/styles';

export const layout = style({
  background: COLORS.grayscale.gray50,
  paddingTop: '32px',
});

export const icon = style({
  width: '60px',
  margin: '0 auto',
});
