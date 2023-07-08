import { COLORS, TEXT_STYLES } from '@/constants/styles';
import { style } from '@vanilla-extract/css';

export const boxWrap = style({
  padding: 16,
  background: COLORS.grayscale.white,
  borderRadius: 12,
  position: 'relative',
});

export const nonAcceptedBoxWrap = style([
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
  width: 'fit-content',
  padding: '5px 10px',
  color: COLORS.grayscale.gray700,
  backgroundColor: COLORS.grayscale.gray200,
  borderRadius: 12,
  marginRight: 12,
  ...TEXT_STYLES.caption1,
});

export const name = style({
  color: COLORS.grayscale.black,
  ...TEXT_STYLES.body1B,
});
export const subInfoWrap = style({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
});

export const subInfo = style({
  display: 'flex',
  alignItems: 'center',
  color: COLORS.grayscale.gray700,
  ...TEXT_STYLES.body3,
});

export const memberInfoWrap = style({
  position: 'absolute',
  top: '16px',
  right: '16px',

  display: 'flex',

  //selectors: {
  //  '${parent} &img:nth-child(n)': {
  //    marginRight: '-6px',
  //  },
  //},
});
