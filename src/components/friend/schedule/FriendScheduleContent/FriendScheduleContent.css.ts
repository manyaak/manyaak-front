import { style } from '@vanilla-extract/css';
import { COLORS, TEXT_STYLES } from '@/constants/styles';

export const layout = style({
  position: 'relative',
});

export const header = style({
  width: '100%',
  height: '60px',
  backgroundColor: COLORS.grayscale.white,
  boxShadow: '0px 3px 15px 0px rgba(199, 199, 199, 0.25)',
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const headerTitle = style({
  ...TEXT_STYLES.body1B,
  width: 'fit-content',
  color: COLORS.grayscale.black,
});

export const arrowIcon = style({
  position: 'absolute',
  top: '20px',
  left: '16px',
  transform: 'rotate(90deg)',
});

export const hangoutButton = style({
  position: 'absolute',
  top: '15px',
  right: '16px',
  backgroundColor: COLORS.primary.yellow,
});

export const userProfile = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '5px',
  marginTop: '95px',
  marginBottom: '40px',
});

export const name = style({
  ...TEXT_STYLES.body1B,
  color: COLORS.grayscale.black,
});

export const statusMessage = style({
  ...TEXT_STYLES.body3,
  color: COLORS.grayscale.gray700,
});

export const calendarHeader = style({
  justifyContent: 'center',
  marginBottom: '20px',
});

export const hangoutListWrap = style({
  marginTop: 16,
});

export const noFriendButton = style({
  ...TEXT_STYLES.body3,
  display: 'block',
  color: COLORS.grayscale.gray800,
  border: 'none',
  background: 'transparent',
  borderBottom: `1px solid ${COLORS.grayscale.gray800}`,
  padding: '4px 0px',
  margin: '52px auto',
});
