import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  height: 700px;
  background-color: #060607;

  h1 {
    position: absolute;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 35px;
    color: white;

    margin-top: 150px;
    margin-left: 150px;
  }

  p {
    position: absolute;
    width: 650px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #737380;

    margin-top: 220px;
    margin-left: 150px;
  }

  img {
    position: absolute;
    width: 550px;
    height: auto;
    right: 0;

    margin-right: 170px;
    margin-top: 70px;
    z-index: 1;
  }
`;

export const Cards = styled.div`
    display: flex;
    position: absolute;
    
    width: 700px;
   // border: 1px solid red;
    margin-top: -250px;
    margin-left: 50px;
`; 
