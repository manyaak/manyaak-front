import { style } from '@vanilla-extract/css';
import { COLORS, TEXT_STYLES } from '@/constants/styles';

export const contentWrapper = style({
  marginTop: '28px',
});

export const sectionWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  gap: '15px',
  margin: '23px 0',
});

export const title = style({
  ...TEXT_STYLES.body1B,
  color: COLORS.grayscale.gray800,
});

export const selectLocationBtn = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '55px',
  borderRadius: '10px',
  backgroundColor: COLORS.grayscale.gray100,
  color: COLORS.grayscale.gray700,
  ...TEXT_STYLES.body1B,
});
