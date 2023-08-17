import { style } from '@vanilla-extract/css';
import { COLORS } from '@/constants/styles';

export const headerWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '10px',
  margin: '20px 0',
});

export const mainHeaderText = style({
  color: COLORS.grayscale.black,
  fontSize: '24px',
  fontWeight: '700',
  lineHeight: '21px',
});

export const subHeaderText = style({
  color: '#5E5E5E',
  fontSize: ' 14px',
  fontWeight: ' 400',
  lineHeight: '21px',
});
