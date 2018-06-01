import { BASE_SIZE_PX, BASE_FONT_SIZE_PX } from './constants';

export default {
  fontSizeXS: `${BASE_FONT_SIZE_PX * 0.6}px`,
  fontSizeSM: `${BASE_FONT_SIZE_PX * 0.8}px`,
  fontSize: `${BASE_FONT_SIZE_PX}px`,
  fontSizeLG: `${BASE_FONT_SIZE_PX * 1.4}px`,
  fontSizeXL: `${BASE_FONT_SIZE_PX * 1.8}px`,
  fontSizeXXL: `${BASE_FONT_SIZE_PX * 2.2}px`,

  screenSM: 'min-width: 768px',
  screenMD: 'min-width: 960px',
  screenLG: 'min-width: 1280px',
  screenXL: 'min-width: 1920px',

  footerHeight: `${BASE_SIZE_PX * 30}px`,
  minBodyHeight: `${BASE_SIZE_PX * 50}px`,
  topNavHeight: `${BASE_SIZE_PX * 8}px`,
};
