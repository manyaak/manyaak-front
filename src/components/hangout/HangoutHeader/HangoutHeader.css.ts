import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from '@/constants/styles';

export const toggleButtonBase = style({
  position: 'absolute',
  top: 85,
  right: 20,
  color: COLORS.grayscale.gray700,
  background: 'transparent',
  border: `1px solid ${COLORS.grayscale.gray700}`,
});

export const toggleButton = styleVariants({
  nonActive: [toggleButtonBase],
  active: [
    toggleButtonBase,
    {
      color: COLORS.grayscale.white,
      backgroundColor: COLORS.grayscale.gray700,
      border: 'none',
    },
  ],
});
