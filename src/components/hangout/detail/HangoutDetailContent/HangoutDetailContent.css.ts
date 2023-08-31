import { style } from '@vanilla-extract/css';
import { COLORS, TEXT_STYLES } from '@/constants/styles';

export const container = style({
  width: '100%',
  backgroundColor: COLORS.grayscale.white,
  display: 'flex',
  flexDirection: 'column',
  gap: '35px',
  paddingBottom: '70px',
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '15px',
  paddingTop: '30px',
});

export const tag = style({
  borderRadius: '12px',
  padding: '3px 10px',
  color: COLORS.grayscale.gray700,
  backgroundColor: COLORS.grayscale.gray200,
});

export const name = style({
  ...TEXT_STYLES.title3,
  color: COLORS.grayscale.black,
});

export const infoListWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
});

export const infoSection = style({
  display: 'flex',
  gap: '10px',
});

export const label = style({
  ...TEXT_STYLES.body2R,
  color: COLORS.grayscale.gray700,
});

export const data = style({
  ...TEXT_STYLES.body2B,
  color: COLORS.grayscale.gray800,
});

export const mapContainer = style({
  width: '100%',
  height: '280px',
  marginTop: '15px',
});

export const groupMembersWrap = style({
  margin: '15px 0px 0px 35px',
  display: 'flex',
  flexDirection: 'row',
  gap: '15px',
  overflowX: 'scroll',
});

export const member = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '8px',
});

export const userName = style({
  ...TEXT_STYLES.body1B,
  color: COLORS.grayscale.gray800,
  width: '42px',
});

export const footer = style({
  width: '100%',
  height: '59px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
  boxShadow: '0px -2px 3px 0px rgba(193, 193, 193, 0.25)',
  backgroundColor: COLORS.grayscale.white,

  position: 'fixed',
  left: 0,
  bottom: 0,
});

export const footerButton = style({
  width: '100px',
  backgroundColor: COLORS.grayscale.gray100,
});
