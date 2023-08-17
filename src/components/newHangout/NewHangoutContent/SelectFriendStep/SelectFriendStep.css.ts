import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS, TEXT_STYLES } from '@/constants/styles';

export const buttonsWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

export const activate = style({
  backgroundColor: COLORS.primary.yellow,
});

export const friendList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  margin: '40px 4px 0',
});

export const friendItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '60px',
});

export const selectGroupTitle = style({
  ...TEXT_STYLES.subtitle3,
  marginBottom: '16px',
});

export const groupList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  margin: '0 -12px',
});

export const groupItem = style({
  padding: '4px 12px',
  borderRadius: '8px',
});

export const selectedGroupItem = styleVariants({
  selected: [groupItem, { backgroundColor: COLORS.primary.yellow }],
  unselected: [groupItem],
});
