import { css } from 'styled-components';

function buildGlobalStyleString(theme) {
  return css`
    html {
      box-sizing: border-box;
    }
    body {
      background-color: ${theme.colors.base.background};
      color: ${theme.colors.base.text};
      font-family: ${theme.fonts.fontFamily};
      font-size: ${theme.dimensions.fontSize};
      font-weight: 300;
      line-height: 24px;
    }
    html,
    body {
      min-height: 100%;
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    :root {
      -moz-tab-size: 4;
      tab-size: 4;
    }
  `;
}

export default {
  buildGlobalStyleString,
};
