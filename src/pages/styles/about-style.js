import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  position: relative;
  height: 700px;
  background-color: #060607;

  h1 {
    width: 500px;
    position: relative;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 35px;
    color: white;

    top: 150px;
    left: 190px;
  }

  p {
    position: relative;
    width: 650px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #737380;

    top: 170px;
    left: 190px;
  }

  img {
    position: absolute;
    width: 550px;
    height: auto;
    // right: 0;

    right: 110px;
    top: 70px;
    z-index: 1;
  }
`;

export const Cards = styled.div`
    display: flex;
    position: relative;
    
    width: 700px;
   // border: 1px solid red;
    top: -290px;
    left: 100px;
`; 
