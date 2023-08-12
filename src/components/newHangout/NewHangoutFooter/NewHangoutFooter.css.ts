import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS, TEXT_STYLES } from '@/constants/styles';

export const footerWrapper = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  gap: '12px',
});

export const button = style({
  width: '100%',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '21px',
  borderRadius: '55px',
});

export const nextButton = styleVariants({
  activate: [
    button,
    {
      backgroundColor: COLORS.primary.yellow,
      color: COLORS.grayscale.black,
    },
  ],
  inactivate: [
    button,
    {
      backgroundColor: COLORS.grayscale.gray200,
      color: COLORS.grayscale.gray600,
    },
  ],
  skip: [
    button,
    {
      backgroundColor: COLORS.grayscale.gray200,
      color: COLORS.grayscale.black,
      width: '120px',
    },
  ],
});
