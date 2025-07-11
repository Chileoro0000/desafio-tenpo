import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Graphie';
    src: url('/fonts/graphie/GraphieRegular.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Graphie';
    src: url('/fonts/graphie/GraphieExtraBold.otf') format('opentype');
    font-weight: 800;
    font-style: normal;
  }

  * {
    font-family: 'Graphie', sans-serif;
  }
`;

export default GlobalStyles;
