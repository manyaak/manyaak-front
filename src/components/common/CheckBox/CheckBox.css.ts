import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from '@/constants/styles';

const boxBase = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20px',
  height: '20px',
  padding: '2px',
  borderRadius: '6px',
  cursor: 'pointer',
  background: COLORS.grayscale.gray200,
});

const checkedStyle = style({
  background: COLORS.primary.yellow,
});

export const box = styleVariants({
  checked: [boxBase, checkedStyle],
  unchecked: [boxBase],
});

export const icon = style({
  width: '100%',
  height: '100%',
});
