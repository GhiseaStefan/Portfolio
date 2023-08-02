import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Gantari';
    src: url('/fonts/Gantari-Regular.ttf');
    font-weight: normal;
}

@font-face {
    font-family: 'Gantari';
    src: url('/fonts/Gantari-Bold.ttf');
    font-weight: bold;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gantari';
}
`;