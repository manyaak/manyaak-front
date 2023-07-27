import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from '@/constants/styles';

export const wrapperBase = style({
  backgroundColor: COLORS.grayscale.gray50,
  margin: '0 auto',
  minHeight: '100vh',
  overflow: 'auto',

  position: 'relative',
});

export const wrapper = styleVariants({
  withBar: [wrapperBase, { paddingBottom: 90 }],
  withoutBar: [wrapperBase],
});

export const navBarWrapper = style({
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
  zIndex: 10,
});
