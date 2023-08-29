import { style } from '@vanilla-extract/css';
import { TEXT_STYLES } from '@/constants/styles';

export const contentWrapper = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '40px 0 76px',
});

export const description = style({
  ...TEXT_STYLES.body3,
  color: '#5E5E5E',
  marginBottom: '12px',
});

export const listWrapper = style({
  height: '100%',
  overflowY: 'scroll',
});
