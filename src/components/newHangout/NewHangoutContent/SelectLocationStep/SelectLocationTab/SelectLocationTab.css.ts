import { style } from '@vanilla-extract/css';

export const tabWrapper = style({
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  width: '100vw',
  height: '100vh',
  background: 'white',
  zIndex: '1',
});
