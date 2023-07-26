import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS, TEXT_STYLES } from '@/constants/styles';

export const dayBase = style({
  ...TEXT_STYLES.caption1,
  minWidth: 40,
  height: 36,
  color: COLORS.grayscale.black,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  position: 'relative',
});

export const day = styleVariants({
  general: [dayBase],
  today: [dayBase, { color: '#00A3FF' }],
  notThisMonth: [dayBase, { color: COLORS.grayscale.gray500 }],
});

export const selectedDayBackground = style({
  width: 28,
  height: 28,
  borderRadius: 14,
  backgroundColor: COLORS.primary.yellow,

  position: 'absolute',
  zIndex: -2,
});

export const weekColumn = style({
  display: 'flex',
  flexDirection: 'column',
});

export const weekRow = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const dayOfWeek = style([dayBase, { color: COLORS.grayscale.gray600 }]);
