import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Lato', sans-serif;
        transition: all 0.5s ease;
    }

    #_next{
        width: 100vw;
        height: 100vh;
        
    }

    body {
        width: 100vw;
        height: 100vh;
    
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
