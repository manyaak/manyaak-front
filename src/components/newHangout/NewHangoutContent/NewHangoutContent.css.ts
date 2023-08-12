import { style } from '@vanilla-extract/css';

export const displayCenterWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
});

export const displayTopWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: '100%',
  width: '100%',
});

export const completeText = style({
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: 'normal',
  whiteSpace: 'pre-wrap',
  textAlign: 'center',
});
