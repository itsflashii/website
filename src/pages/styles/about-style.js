import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  position: relative;
  height: 700px;
  background-color: #060607;

  scroll-snap-align: center;

  h1 {
    position: relative;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 35px;
    color: white;

    top: 150px;
    left: 130px;
  }

  p {
    position: relative;
    width: 650px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #737380;

    top: 170px;
    left: 130px;
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

  @media only screen and (min-width: 1249px) and (max-width: 1400px) {

    .responsiNo {
      top: 200px;

      width: 350px;
    }

  }

  @media only screen and (min-width: 1160px) and (max-width: 1249px) {

    .responsiNo {
      top: 195px;
      margin-right: -65px;

      width: 340px;
    }
    
  }

  @media only screen and (min-width: 1110px) and (max-width: 1160px) {

    .responsiNo {
      top: 195px;
      margin-right: -80px;

      width: 320px;
    }
    
  }

  @media only screen and (min-width: 50px) and (max-width: 1110px) {

    .responsiNo {
      display: none;
    }
    
  }

  @media only screen and (min-width: 460px) and (max-width: 569px) {

    h1 {
      font-size: 32px;
      width: 400px;
    }
    
  }

  @media only screen and (min-width: 200px) and (max-width: 800px) {

    h1 {
      left: 80px;
    }

    p {
      width: 450px;
      font-size: 14px;
      left: 80px;
    }

    .responsiNo {
      display: none;
    }
    
  }



`;

export const Cards = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    flex-wrap: wrap;
    
    top: -290px;
    left: 45px;

    @media only screen and (min-width: 300px) and (max-width: 800px) {

      left: 0px;
    }

`; 
