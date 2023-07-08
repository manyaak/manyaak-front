import {
  createThemeContract,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { TEXT_STYLES } from '@/constants/styles';

export const buttonVars = createThemeContract({
  backgroundColor: null,
  borderColor: null,
  width: null,
});

const buttonBase = style({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,
  padding: '0px 16px',
  borderRadius: 50,
  width: calc(buttonVars.width).multiply('1px').toString(),
  backgroundColor: buttonVars.backgroundColor,
  border: buttonVars.borderColor
    ? `1px solid ${buttonVars.borderColor}`
    : 'none',
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

export const labelVars = createThemeContract({
  labelColor: null,
});

export const label = styleVariants({
  small: {
    color: labelVars.labelColor,
    ...TEXT_STYLES.button3,
  },
  medium: {
    color: labelVars.labelColor,
    ...TEXT_STYLES.button2B,
  },
  large: {
    color: labelVars.labelColor,
    ...TEXT_STYLES.button1B,
  },
});

export const icon = style({
  width: 16,
  height: 16,
  color: labelVars.labelColor,
});
