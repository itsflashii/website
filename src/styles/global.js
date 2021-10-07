import {  createGlobalStyle  } from 'styled-components'


export default createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&display=swap');    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    

    html, body #root {
        height: 1000px;
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