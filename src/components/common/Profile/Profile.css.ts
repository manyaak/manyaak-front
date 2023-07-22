import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS, TEXT_STYLES } from '@/constants/styles';

export const profileWrap = style({
  display: 'flex',
  alignItems: 'center',
});

export const profileImgWrap = styleVariants({
  1: {},
  2: {
    display: 'flex',
    ':nth-child(1)': {
      marginRight: '-8px',
    },
  },
  3: {
    width: 36,
    height: 36,
    position: 'relative',

    ':nth-child(1)': {
      position: 'absolute',
      top: '0px',
      left: '7px',
      zIndex: 1,
    },
    ':nth-child(2)': {
      position: 'absolute',
      bottom: '0px',
      left: '0px',
      zIndex: 2,
    },
    ':nth-child(3)': {
      position: 'absolute',
      bottom: '0px',
      right: '0px',
      zIndex: 3,
    },
  },
});

export const textWrap = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginLeft: 10,
});

export const name = style({
  ...TEXT_STYLES.body2B,
  color: COLORS.grayscale.black,
});

export const statusMessage = style({
  ...TEXT_STYLES.body3,
  color: COLORS.grayscale.gray700,
});
