import { style } from '@vanilla-extract/css';
import { COLORS, TEXT_STYLES } from '@/constants/styles';

export const layout = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const item = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '4px 0px',
});

export const buttonWrapper = style({
  display: 'flex',
  gap: '2px',
});

export const headerChildren = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
});

export const numberBox = style({
  width: '20px',
  height: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  background: COLORS.grayscale.gray200,
  color: COLORS.grayscale.black,
  ...TEXT_STYLES.caption1,
});
