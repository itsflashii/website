import styled from 'styled-components';

export const HamburgStyle = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;500&display=swap');

  display: none;
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
  opacity: 0%;
  z-index: 1;


  ul {
    margin-top: 50px;
    text-align: center;
  }
    
  li{
   
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
    color: #737380;
    transition: 1s;
    font-family: 'Poppins', sans-serif;
        
  }

  a:hover {
        color: #FFFFFF;
  }

`;

export const Svghamburg = styled.div`
    svg {
    opacity: 0;
  }
  

  @media only screen and (min-width: 0px) and (max-width: 813px) {
      svg {
        opacity: 1;
      }
    }
`;
