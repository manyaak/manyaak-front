import { style } from '@vanilla-extract/css';

export const inputStyle = style({
  width: '100%',
  height: '100%',
  border: 'none',
  backgroundColor: 'transparent',

  ':focus': {
    outline: 'none',
  },
});
