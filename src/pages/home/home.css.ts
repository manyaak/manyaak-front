import { style } from '@vanilla-extract/css';
import { COLORS } from '@/constants/styles';

export const layout = style({
  background: COLORS.grayscale.gray50,
  paddingTop: '32px',
});

export const header = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: '20px',
});

export const icon = style({
  width: '60px',
  margin: '0 auto',
});
