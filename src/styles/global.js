import {  createGlobalStyle  } from 'styled-components'

export default createGlobalStyle `  
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;

       // overflow-x: hidden;
      // border: 1px solid red; // DEBUG


       border: 0;
       outline: 0;
       vertical-align: baseline;
       font-weight: inherit;
       font-family: inherit;
       font-style: inherit;
       font-size: 100%;
    }

    

    html, body #root {
        /* HEIGHT DEVE FICAR EM 100VH! */
        height: 100vh;
    }

    body {
        margin: 10px 0px;
        background-color: #000000;

        color: #333;
        -webkit-font-smoothing: antialiased !important;
        overflow-x: hidden;
    }

    ul {
        list-style: none;
    }

    ::-webkit-scrollbar {
        
        width: 7px;
    }

    ::-webkit-scrollbar-track {
        background: #141414;
  
    }

    ::-webkit-scrollbar-thumb {
        background: #262626;

    }
`;