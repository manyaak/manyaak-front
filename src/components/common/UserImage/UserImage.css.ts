import { COLORS } from '@/constants/styles';
import { createThemeContract, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

export const imageVars = createThemeContract({
  size: null,
});

export const image = style({
  width: calc(imageVars.size).multiply('1px').toString(),
  height: calc(imageVars.size).multiply('1px').toString(),
  borderRadius: calc(imageVars.size).divide(2).multiply('1px').toString(),
  backgroundColor: COLORS.grayscale.gray100,
});
