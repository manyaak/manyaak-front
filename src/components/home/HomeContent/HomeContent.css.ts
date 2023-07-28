import { style } from '@vanilla-extract/css';
import { COLORS, TEXT_STYLES } from '@/constants/styles';

export const layout = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  height: '100%',
  backgroundColor: COLORS.grayscale.gray50,
  padding: '20px',
  paddingTop: '32px',
});

export const groupItemsWrap = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  margin: '0 auto',
});

export const groupItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '90px',
});

export const groupName = style({
  ...TEXT_STYLES.body1B,
  color: COLORS.grayscale.gray900,
  width: '100%',
  margin: '8px 0px 10px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const groupHangoutButton = style({
  width: '70px',
  padding: '0px 10px',
});

export const notiLayout = style({
  position: 'relative',
  width: '100%',
  borderRadius: '12px',
  height: '48px',
  padding: '0px 22px',
  background: COLORS.grayscale.white,
  boxShadow: '0px 0px 3px 0px rgba(193, 193, 193, 0.25)',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const notiText = style({
  ...TEXT_STYLES.body2R,
});

export const notiCount = style({
  ...TEXT_STYLES.body2B,
});

export const notiButton = style({
  width: '30px',
  height: '30px',
  borderRadius: '15px',
  border: 'none',
  backgroundColor: COLORS.primary.yellow,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: 0,
});

export const calendarHeader = style({
  justifyContent: 'flex-end',
});
