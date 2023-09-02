import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '16px',
});

export const calendarHeader = style({
  justifyContent: 'center',
});

export const hangoutListWrap = style({
  width: '100%',
  maxHeight: '280px',
  overflowY: 'scroll',
});
