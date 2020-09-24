import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        font-size: 16px;
        margin: 0;
        width: 100%;
        height: 100vh;
        font-family: 'Barlow Semi Condensed', sans-serif;
        background-image: radial-gradient(circle at center top, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
    }
    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }

    button {
        font-family: 'Barlow Semi Condensed';
    }
    #modal {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }
`

export default GlobalStyle;