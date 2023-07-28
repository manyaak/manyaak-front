import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS, TEXT_STYLES } from '@/constants/styles';

export const header = style({
  display: 'flex',
  alignItems: 'center',
});

export const date = style({
  ...TEXT_STYLES.body1B,
  color: COLORS.grayscale.gray700,
  margin: '0 8px',
});

export const arrow = styleVariants({
  left: { transform: 'rotate(90deg)' },
  right: { transform: 'rotate(270deg)' },
});
