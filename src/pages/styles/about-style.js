import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

  position: relative;
  height: 700px;
  background-color: #060607;


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

    img {
      top: 200px;

      width: 350px;
    }

  }


  @media only screen and (min-width: 0px) and (max-width: 900px) {
    h1 {
      width: 90%;
      font-size: 27px;
      left: 15px;
    }

    p {
      width: 90%;
      font-size: 13px;
      left: 15px;
    }

    margin-top: -150px;

}

  @media only screen and (min-width: 1160px) and (max-width: 1249px) {

    img {
      top: 195px;
      margin-right: -65px;

      width: 340px;
    }
    
  }

  @media only screen and (min-width: 1110px) and (max-width: 1160px) {

    img {
      top: 195px;
      margin-right: -80px;

      width: 320px;
    }
    
  }

  @media only screen and (min-width: 50px) and (max-width: 1110px) {

    img {
      display: none;
    }
    
  }

  @media only screen and (min-width: 200px) and (max-width: 800px) {
    h1 {
      top: 100px;
    }

    p {
      top: 120px;
    }

  }

  @media only screen and (min-width: 700px) and (max-width: 800px) {
    h1 {
      left: 92px;
    }

    p {
      left: 93px;
    }
  }

  @media only screen and (min-width: 690px) and (max-width: 760px) {
    h1 {
      left: 78px;
    }

    p {
      width: 570px;
      left: 80px;
    }
  }

  @media only screen and (min-width: 569px) and (max-width: 690px) {

    h1 {
      font-size: 27px;
      width: 400px;

      left: 72px;
    }

    p {
      width: 450px;
      font-size: 13px;

      left: 75px;
    }

  }

  @media only screen and (min-width: 552px) and (max-width: 569px) {

    h1 {
      font-size: 27px;
      width: 400px;

      left: 62px;
    }

    p {
      width: 450px;
      font-size: 13px;

      left: 65px;
    }
  }

  @media only screen and (min-width: 490px) and (max-width: 552px) {

    h1 {
      font-size: 27px;
      width: 417px;

      left: 34px;
    }

    p {
      width: 450px;
      font-size: 13px;

      left: 34px;
    }
  }

  @media only screen and (min-width: 475px) and (max-width: 490px) {

    h1 {
      font-size: 27px;
      width: 375px;

      left: 30px;
    }

    p {
      width: 450px;
      font-size: 13px;

      left: 30px;
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
    @media only screen and (min-width: 200px) and (max-width: 800px) {
      top: -395px!important;
    }

    @media only screen and (min-width: 700px) and (max-width: 800px) {
      left: 24px!important;
    }

    @media only screen and (min-width: 300px) and (max-width: 800px) {
      left: 0px;
    }

    @media only screen and (min-width: 690px) and (max-width: 760px) {
      top: -360px!important;
      left: 0px!important;
    }

    @media only screen and (min-width: 340px) and (max-width: 552px) {
      left: -40px!important;
    }
    
    @media only screen and (min-width: 340px) and (max-width: 475px) {
      top: -340px!important;
    }

    @media only screen and (min-width: 200px) and (max-width: 395px) {
      left: -75px!important;
    }

    @media only screen and (min-width: 200px) and (max-width: 430px) {
      top: -284px!important;
    }

    @media only screen and (min-width: 300px) and (max-width: 700px) {
      top: -230px;
    }

    @media only screen and (min-width: 460px) and (max-width: 569px) {
      top: -245px;
      left: -10px;
    }


`; 
