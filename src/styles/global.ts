import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { ThemeType } from './theme';

interface IThemeProps {
  theme: ThemeType;
}
const GlobalStyle = createGlobalStyle<IThemeProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ${normalize}

  body {
    color: ${({ theme }) => theme.colors.light.color};
    background: ${({ theme }) => theme.colors.light.background};
  }

  body, input, button, textarea {
    font-family: ${({ theme }) => theme.fontsFamily.Nunito};
  }

  .leaflet-container {
    z-index: 2;
  }
`;

export default GlobalStyle;
