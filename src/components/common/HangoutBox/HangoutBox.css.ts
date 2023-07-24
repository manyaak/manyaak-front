import { style } from '@vanilla-extract/css';
import { COLORS, TEXT_STYLES } from '@/constants/styles';

export const boxWrap = style({
  padding: 16,
  background: COLORS.grayscale.white,
  borderRadius: 12,
  position: 'relative',
});

export const dashedBoxWrap = style([
  boxWrap,
  {
    opacity: 0.55,
    border: `1px dashed ${COLORS.grayscale.black}`,
  },
]);

export const boxShadow = style({
  boxShadow: `0px 0px 3px 2px rgba(46, 46, 46, 0.02)`,
});

export const mainInfo = style({
  display: 'flex',
  marginBottom: 12,
});

export const ddayBox = style({
  ...TEXT_STYLES.caption1,
  width: 'fit-content',
  padding: '5px 10px',
  color: COLORS.grayscale.gray700,
  backgroundColor: COLORS.grayscale.gray200,
  borderRadius: 12,
  marginRight: 12,
});

export const name = style({
  ...TEXT_STYLES.body1B,
  color: COLORS.grayscale.black,
});

export const subInfoWrap = style({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
});

export const subInfo = style({
  ...TEXT_STYLES.body3,
  display: 'flex',
  alignItems: 'center',
  color: COLORS.grayscale.gray700,
});

export const memberInfoWrap = style({
  position: 'absolute',
  top: '16px',
  right: '16px',
  display: 'flex',
});

export const memberImage = style({
  marginRight: '-8px',
});
