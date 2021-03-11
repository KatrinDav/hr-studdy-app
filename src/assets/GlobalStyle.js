import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html {
    box-sizing: border-box;
}

*, *::after, *::before{
    box-sizing: inherit;
}

body {
    font-family: 'Montserrat';
}

a, button {
    font-family: 'Montserrat';
}

`

export default GlobalStyle;