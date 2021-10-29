import styled from 'styled-components';

export const HamburgStyle = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;500&display=swap');
  
  content: '';
  display: none;
  width: 100%;
  height: 112vh;
  background-color: black;
  position: fixed;
  opacity: 87%;
  z-index: 1;
  top: 0;
  text-align: center;
  
  ul {
    position: absolute;
    width: 100%;
    margin-top: 50px;
    display: table;
    margin: 0 auto;
    top: 150px;
  }
    
  li{ 
    margin-bottom: 10px;
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

  svg {
    position: absolute;
    cursor: pointer;
  

    
    right: 0;
    margin-right: 65px;
    top: 55px;
    transition: 12s;
    z-index: 1;
  }
`;

export const Svghamburg = styled.div`
    svg {
    display: none;
    cursor: pointer !important;
    position: absolute;
    right: 0;
    top: 60px;
    margin-right: 17%;
    z-index: 1;
  }
  

  @media only screen and (min-width: 0px) and (max-width: 813px) {
      svg {
        display: block;
      }
    }
`;
