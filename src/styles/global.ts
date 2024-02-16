import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
    }

    body {
        background-color: ${props => props.theme.background};
        color: ${props => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }
`