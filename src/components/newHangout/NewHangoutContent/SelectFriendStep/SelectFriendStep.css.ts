import { style } from '@vanilla-extract/css';
import { COLORS } from '@/constants/styles';

export const buttonsWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

export const activate = style({
  backgroundColor: COLORS.primary.yellow,
});
