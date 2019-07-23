import { createGlobalStyle } from 'styled-components';
import '../../styles/variables.css';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700&display=swap&subset=latin-ext');

    * {
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    html, body {
        margin: 0;
        padding: 0;
    }

    body {
        background-color: var(--main-color);
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: var(--black);
    }
`;
