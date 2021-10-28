import styled from 'styled-components';

export const HamburgStyle = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;500&display=swap');

  content: '';
  display: none;
  width: 100%;
  height: 100%;
  background-color: black;
  position: fixed;
  opacity: 87%;
  z-index: 1;
  top: 0;

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

  svg {
    cursor: pointer;
    position: absolute;
    bottom: 0;
    margin-bottom: 50px;
    margin-left: 46%;
    opacity: 50%;
  }
`;

export const Svghamburg = styled.div`
    svg {
    display: none;
    cursor: pointer !important;
    position: absolute;
    right: 0;
    top: 65px;
    margin-right: 11%;
    z-index: 1;
  }
  

  @media only screen and (min-width: 0px) and (max-width: 813px) {
      svg {
        display: block;
      }
    }
`;
