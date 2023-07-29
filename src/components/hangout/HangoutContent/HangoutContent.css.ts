import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS, TEXT_STYLES } from '@/constants/styles';

export const container = style({
  width: '100%',
  backgroundColor: COLORS.grayscale.gray50,
  position: 'relative',
  marginTop: 62,
});

export const title = style({
  ...TEXT_STYLES.title2,
  margin: 0,
  padding: '33px 0px 39px 24px',
});

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

export const hangoutBox = style({
  marginBottom: 10,
});

export const dateLabel = style({
  ...TEXT_STYLES.body3,
  color: COLORS.grayscale.gray600,
  marginTop: 23,
  marginBottom: 14,
});
