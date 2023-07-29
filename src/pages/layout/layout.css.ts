import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from '@/constants/styles';

export const wrapperBase = style({
  margin: '0 auto',
  minHeight: '100vh',
  overflow: 'auto',
  padding: '0 20px 90px',
  position: 'relative',
});

export const wrapper = styleVariants({
  withBar: [wrapperBase, { backgroundColor: COLORS.grayscale.gray50 }],
  withoutBar: [wrapperBase, { backgroundColor: COLORS.grayscale.white }],
});

export const navBarWrapper = style({
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
  zIndex: 10,
});
