export const TEXT_STYLE_NAME = {
  title: 'title',
  title2: 'title2',
  title3: 'title3',
  subtitle1: 'subtitle1',
  subtitle2B: 'subtitle2B',
  subtitle2R: 'subtitle2R',
  subtitle3: 'subtitle3',
  body1B: 'body1B',
  body1R: 'body1R',
  body2B: 'body2B',
  body2R: 'body2R',
  body3: 'body3',
  button1B: 'button1B',
  button1R: 'button1R',
  button2B: 'button2B',
  button2R: 'button2R',
  button3: 'button3',
  caption1: 'caption1',
  caption2: 'caption2',
} as const;

export type TextStyleNameType =
  (typeof TEXT_STYLE_NAME)[keyof typeof TEXT_STYLE_NAME];

interface TextStyleType {
  fontSize: number;
  fontWeight: number;
  lineHeight: string;
}

const LINE_HEIGHT_RATIO = 1.5;

export const TEXT_STYLES: Record<TextStyleNameType, TextStyleType> = {
  [TEXT_STYLE_NAME.title]: {
    fontSize: 30,
    fontWeight: 700,
    lineHeight: `${30 * LINE_HEIGHT_RATIO}px`,
  },
  [TEXT_STYLE_NAME.title2]: {
    fontSize: 25,
    fontWeight: 700,
    lineHeight: `${25 * LINE_HEIGHT_RATIO}px`,
  },
  [TEXT_STYLE_NAME.title3]: {
    fontSize: 22,
    fontWeight: 700,
    lineHeight: `${22 * LINE_HEIGHT_RATIO}px`,
  },
  [TEXT_STYLE_NAME.subtitle1]: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: `${22 * LINE_HEIGHT_RATIO}px`,
  },
  [TEXT_STYLE_NAME.subtitle2B]: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: `${20 * LINE_HEIGHT_RATIO}px`,
  },
  [TEXT_STYLE_NAME.subtitle2R]: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: `${20 * LINE_HEIGHT_RATIO}px`,
  },
  [TEXT_STYLE_NAME.subtitle3]: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: `${18 * LINE_HEIGHT_RATIO}px`,
  },
  [TEXT_STYLE_NAME.body1B]: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: `${16 * LINE_HEIGHT_RATIO}px`,
  },
  [TEXT_STYLE_NAME.body1R]: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: `${16 * LINE_HEIGHT_RATIO}px`,
  },
  [TEXT_STYLE_NAME.body2B]: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: `${14 * LINE_HEIGHT_RATIO}px`,
  },
  [TEXT_STYLE_NAME.body2R]: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: `${14 * LINE_HEIGHT_RATIO}px`,
  },
  [TEXT_STYLE_NAME.body3]: {
    fontSize: 13,
    fontWeight: 400,
    lineHeight: `${13 * LINE_HEIGHT_RATIO}px`,
  },
  [TEXT_STYLE_NAME.button1B]: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: `${16 * LINE_HEIGHT_RATIO}px`,
  },
  [TEXT_STYLE_NAME.button1R]: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: `${16 * LINE_HEIGHT_RATIO}px`,
  },
  [TEXT_STYLE_NAME.button2B]: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: `${14 * LINE_HEIGHT_RATIO}px`,
  },
  [TEXT_STYLE_NAME.button2R]: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: `${14 * LINE_HEIGHT_RATIO}px`,
  },
  [TEXT_STYLE_NAME.button3]: {
    fontSize: 13,
    fontWeight: 400,
    lineHeight: `${13 * LINE_HEIGHT_RATIO}px`,
  },
  [TEXT_STYLE_NAME.caption1]: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: `${12 * LINE_HEIGHT_RATIO}px`,
  },
  [TEXT_STYLE_NAME.caption2]: {
    fontSize: 12,
    fontWeight: 300,
    lineHeight: `${12 * LINE_HEIGHT_RATIO}px`,
  },
};
