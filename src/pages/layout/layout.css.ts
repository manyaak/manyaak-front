import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from '@/constants/styles';
import { MAIN_LAYOUT_INFO, SUB_LAYOUT_INFO } from './layoutInfo';

export const wrapperBase = style({
  margin: '0 auto',
  minHeight: '100vh',
  overflow: 'auto',
  padding: '0 20px 90px',
  position: 'relative',
});

export const wrapper = styleVariants({
  withBar: [wrapperBase, { backgroundColor: MAIN_LAYOUT_INFO.backgroundColor }],
  withoutBar: [
    wrapperBase,
    { backgroundColor: SUB_LAYOUT_INFO.backgroundColor, padding: '0 20px' },
  ],
});

export const navBarWrapper = style({
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
  zIndex: 10,
});
