import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    html, body {
        width: 100%;
        height: 100%;
        
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #root {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    ::-webkit-scrollbar {
        width: 8px; /* Largura do scrollbar vertical */
        height: 8px; /* Altura do scrollbar horizontal */
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.5); /* Cor do thumb (parte que você arrasta) */
        border-radius: 10px; /* Bordas arredondadas */
    }

    ::-webkit-scrollbar-thumb:hover {
        background: black; 
    }

    body {
        background-color: #f0f2f5;
        font-family: 'Poppins', sans-serif;
        width: 100%;
        height: 100%;
    }
`;
