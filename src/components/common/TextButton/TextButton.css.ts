import { style, styleVariants } from '@vanilla-extract/css';

import { TEXT_STYLES } from '@/constants/styles';

const buttonBase = style({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,
  padding: '0px 16px',
  border: 'none',
  borderRadius: 50,
});

const buttonHeight = {
  small: 30,
  medium: 35,
  large: 45,
};

export const button = styleVariants(buttonHeight, (buttonSize) => [
  buttonBase,
  { height: buttonSize },
]);

export const label = styleVariants({
  small: {
    ...TEXT_STYLES.button3,
  },
  medium: {
    ...TEXT_STYLES.button2B,
  },
  large: {
    ...TEXT_STYLES.button1B,
  },
});

export const icon = style({
  width: 16,
  height: 16,
});
