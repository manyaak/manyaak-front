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

export const userList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  margin: '40px 4px 0',
});

export const userItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '60px',
});
