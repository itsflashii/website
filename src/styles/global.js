import {  createGlobalStyle  } from 'styled-components'


export default createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
        
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
        height: 1000%;
    }

    body {
        background-color: #000000;
        color: #333;
        -webkit-font-smoothing: antialiased !important;
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