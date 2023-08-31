import { style } from '@vanilla-extract/css';
import { COLORS, TEXT_STYLES } from '@/constants/styles';

export const selectedPlaceInfo = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start;',
  justifyContent: 'center',
  width: '100%',
  padding: '19px 18px',
  borderRadius: '8px',
  background: COLORS.grayscale.white,
  boxShadow: '0px 0px 2px 0px rgba(32, 32, 32, 0.25)',
  gap: '6px',
});

export const placeNameWrapper = style({
  ...TEXT_STYLES.subtitle3,
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
});

export const addressNameWrapper = style({
  ...TEXT_STYLES.caption1,
  color: '#4BBEFF',
  marginLeft: '30px',
});
