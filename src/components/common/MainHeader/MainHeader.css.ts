import { style } from '@vanilla-extract/css';
import { COLORS, TEXT_STYLES } from '@/constants/styles';

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '32px 30px 17px 25px',
});

export const title = style({
  ...TEXT_STYLES.title2,
  color: COLORS.grayscale.black,
});
