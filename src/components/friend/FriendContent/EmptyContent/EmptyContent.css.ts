import { style } from '@vanilla-extract/css';
import { TEXT_STYLES, COLORS } from '@/constants/styles';

export const contentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});

export const suggestText = style({
  ...TEXT_STYLES.body2R,
  color: COLORS.grayscale.gray700,
  whiteSpace: 'pre-wrap',
  textAlign: 'center',
});

export const buttonWrapper = style({
  marginTop: '15px',
  marginBottom: '40px',
});
