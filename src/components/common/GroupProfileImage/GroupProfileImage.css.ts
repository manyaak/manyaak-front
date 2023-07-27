import { styleVariants } from '@vanilla-extract/css';

export const profileImgWrap = styleVariants({
  2: {
    width: 36,
    height: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

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
