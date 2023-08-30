import { style } from '@vanilla-extract/css';

export const wrapper = style({
  position: 'relative',
  height: '100%',
  width: '100vw',
});

export const mapContainer = style({
  width: '100%',
  height: '100%',
});

export const searchBarWrapper = style({
  position: 'absolute',
  top: '17px',
  width: '100%',
  zIndex: '2',
  padding: '0 24px',
});

export const footerWrapper = style({
  zIndex: '2',
});

export const selectLocationInfoWrapper = style({
  position: 'absolute',
  margin: '0 25px',
  bottom: '76px',
  left: '0',
  right: '0',
  zIndex: '2',
});
