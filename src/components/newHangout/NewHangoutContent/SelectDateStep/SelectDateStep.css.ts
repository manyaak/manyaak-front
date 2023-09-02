import { style } from '@vanilla-extract/css';
import { COLORS, TEXT_STYLES } from '@/constants/styles';

export const calendarHeader = style({
  justifyContent: 'center',
  marginBottom: '20px',
});

export const scheduleListWrapper = style({
  width: '100%',
  marginTop: '25px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const scheduleBox = style({
  ...TEXT_STYLES.body2R,
  backgroundColor: COLORS.grayscale.white,
  borderRadius: '8px',
  boxShadow: '0px 0px 3px 0px rgba(85, 85, 85, 0.25)',
  width: '100%',
  height: '45px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const selectedSchedule = style({
  backgroundColor: COLORS.grayscale.gray100,
});

export const selectBoxWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  position: 'fixed',
  left: '0px',
  bottom: '0px',
  padding: '20px 10px 96px',
  width: '100%',
  backgroundColor: COLORS.grayscale.white,
  boxShadow: '0px -2px 20px 0px rgba(187, 187, 187, 0.25)',
});

export const checkboxLabel = style({
  ...TEXT_STYLES.body2B,
  color: COLORS.grayscale.gray800,
});

export const checkboxWrap = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const dateInputsWrap = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '14px',
});

export const dateLabel = style({
  ...TEXT_STYLES.body2B,
  color: COLORS.grayscale.gray700,
});

export const dateInput = style({
  border: 'none',
  borderRadius: '4px',
  backgroundColor: COLORS.grayscale.gray100,
  padding: '4px 0px 4px 12px',
  marginTop: '4px',
});
