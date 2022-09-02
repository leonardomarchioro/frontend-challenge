import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Lato', sans-serif;
        transition: all linear ease 0.5s;
    }

    #_next{
        width: 100vw;
        height: 100vh;
        background-color: ${({ theme }) => theme.background.primary};
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: ${({ theme }) => theme.background.primary};
    }

    button{
        cursor: pointer;
        border: none;
        border-radius: 4px;

    }

    a{
        text-decoration: none;
    }
    ul,li {
        list-style: none;
    }


`;
