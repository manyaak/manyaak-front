import { style } from '@vanilla-extract/css';
import { TEXT_STYLES } from '@/constants/styles/textStyles';
import { COLORS } from '@/constants/styles';

export const inputBarWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 15px 0 17px',
  height: '40px',
  borderRadius: '8px',
  background: COLORS.grayscale.gray100,
  width: '100%',
});

export const iconWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '17px',
  height: '17px',
});

export const textStyle = style({
  ...TEXT_STYLES.body3,

  '::placeholder': {
    color: COLORS.grayscale.gray600,
  },
});
