import { style } from '@vanilla-extract/css';
import { COLORS, TEXT_STYLES } from '@/constants/styles';

export const layoutStyle = style({
  position: 'relative',
  width: '100%',
  borderRadius: '12px',
  padding: '20px 24px',
  background: COLORS.grayscale.white,
  boxShadow: '0px 0px 3px 0px rgba(193, 193, 193, 0.25)',
  overflow: 'hidden',
});

export const headerStyle = style({
  position: 'absolute',
  top: '0',
  left: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '62px',
  borderRadius: '12px',
  padding: '0px 24px',
  background: COLORS.grayscale.white,
});

export const contentStyle = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginTop: '22px',
});

export const titleStyle = style({
  ...TEXT_STYLES.subtitle3,
  color: COLORS.grayscale.black,
});
