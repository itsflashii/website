import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  position: relative;
  width: 100%;
  height: 300px;
  background-color: #060607;
  border-top: 1px solid rgba(115, 115, 128, 0.29);
  top: 1000px;

  h2 {
    position: absolute;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;


    color: white;
    top: 60px;
    margin-right: 600px;
    right: 0;
  }

  img {
    position: absolute;
    width: 350px;
    top: 50px;
    left: 174px;
  }

  .Email {
    position: absolute;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    font-weight: 400;
    top: 140px;
    left: 215px;
    color: #53535a;
  }

  .Fone {
    position: absolute;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    font-weight: 400;
    top: 160px;
    left: 215px;
    color: #53535a;
  }

  .Varsel {
    position: absolute;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;


    color: white;
    top: 60px;
    margin-right: 390px;
    right: 0;
  }
  

  .Social {
    position: absolute;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;


    color: white;
    top: 60px;
    margin-right: 190px;
    right: 0;
  }

  ul {
    position: absolute;
    margin-right: 508px;
    margin-top: 90px;
    right: 0;
  }
    
  li{
    margin-bottom: 3px;
    font-family: 'Poppins', sans-serif;
  }

  a {
    text-decoration: none;
    color: #53535a;
    transition: 1s;
  }

  a:hover {
    color: #FFFFFF;
  }



  .ulVarsel {
    position: absolute;
    margin-right: 297px;
    margin-top: 90px;
    right: 0;
  }
    
  .ulVarsel li{
    margin-bottom: 3px;
    font-family: 'Poppins', sans-serif;
  }

  .ulVarsel a {
    text-decoration: none;
    color: #53535a;
    transition: 1s;
  }

  .ulVarsel a:hover {
    color: #FFFFFF;
  }



  .ulSocial {
    position: absolute;
    margin-right: 120px;
    margin-top: 90px;
    right: 0;
  }
    
  .ulSocial li{
    margin-bottom: 3px;
    font-family: 'Poppins', sans-serif;
  }

  .ulSocial a {
    text-decoration: none;
    color: #53535a;
    transition: 1s;
  }

  .ulSocial a:hover {
    color: #FFFFFF;
  }

  @media only screen and (min-width: 1064px) and (max-width: 1220px) {
    img {
      margin-right: 0px;
      margin-left: -130px;
    }

    .Fone {
      left: 87px;
    }

    .Email {
      left: 87px;
    }
    
  }

  @media only screen and (min-width: 940px) and (max-width: 1064px) {
    img {
      width: 300px;
      margin-right: 0px;
      margin-left: -170px;
    }

    .Fone {
      left: 46px;
    }

    .Email {
      left: 46px;
    }
    
  }

  @media only screen and (min-width: 925px) and (max-width: 960px) {
    img {
      width: 300px;
      margin-right: 0px;
      margin-left: -170px;
    }

    h2 {
      margin-right: 560px;
    }

    ul {
      margin-right: 468px;
    }

    .Varsel {
      margin-right: 360px;
    }

    .ulVarsel {
      margin-right: 268px;
    }

    .Social {
      margin-right: 165px;
    }

    .ulSocial {
      margin-right: 97px;
    }

    .Fone {
      left: 46px;
    }

    .Email {
      left: 46px;
    }
    
  }

  @media only screen and (min-width: 700px) and (max-width: 925px) {
    height: 405px;

    img {
      width: 300px;
      margin-right: 0px;
      margin-left: 50px;
    }

    h2 {
      top: 211px;
      margin-right: 560px;
    }

    ul {
      margin-top: 238px;
      margin-right: 468px;
    }

    .Varsel {
      top: 211px;
      margin-right: 360px;
    }

    .ulVarsel {
      margin-top: 238px;
      margin-right: 268px;
    }

    .Social {
      top: 211px;
      margin-right: 165px;
    }

    .ulSocial {
      margin-top: 238px;
      margin-right: 97px;
    }

    .Fone {
      left: 260px;
    }

    .Email {
      left: 260px;
    }
    
  }

  @media only screen and (min-width: 525px) and (max-width: 700px) {
    height: 405px;

    img {
      width: 300px;
      margin-right: 0px;
      margin-left: 10px;
    }

    h2 {
      top: 211px;
      margin-right: 442px;
    }

    ul {
      margin-top: 238px;
      margin-right: 350px;
    }

    .Varsel {
      top: 211px;
      margin-right: 262px;
    }

    .ulVarsel {
      margin-top: 238px;
      margin-right: 170px;
    }

    .Social {
      top: 211px;
      margin-right: 89px;
    }

    .ulSocial {
      margin-top: 238px;
      margin-right: 20px;
    }

    .Fone {
      left: 220px;
    }

    .Email {
      left: 220px;
    }
    
  }

  @media only screen and (min-width: 495px) and (max-width: 525px) {
    height: 405px;

    img {
      width: 300px;
      margin-right: 0px;
      margin-left: -70px;
    }

    h2 {
      top: 211px;
      margin-right: 412px;
    }

    ul {
      margin-top: 238px;
      margin-right: 320px;
    }

    .Varsel {
      top: 211px;
      margin-right: 242px;
    }

    .ulVarsel {
      margin-top: 238px;
      margin-right: 150px;
    }

    .Social {
      top: 211px;
      margin-right: 79px;
    }

    .ulSocial {
      margin-top: 238px;
      margin-right: 10px;
    }

    .Fone {
      left: 140px;
    }

    .Email {
      left: 140px;
    }
    
  }

  @media only screen and (min-width: 400px) and (max-width: 495px) {
    height: 853px;

    img {
      width: 300px;
      margin-right: 0px;
      margin-left: -70px;
    }

    h2 {
      top: 211px;
      margin-right: 217px;
    }

    ul {
      margin-top: 238px;
      margin-right: 124px;
    }

    .Varsel {
      top: 370px;
      margin-right: 232px;
    }

    .ulVarsel {
      margin-top: 396px;
      margin-right: 140px;
    }

    .Social {
      top: 528px;
      margin-right: 232px;
    }

    .ulSocial {
      margin-top: 556px;
      margin-right: 162px;
    }

    .Fone {
      left: 140px;
    }

    .Email {
      left: 140px;
    }
    
  }

  @media only screen and (min-width: 335px) and (max-width: 400px) {
    height: 853px;

    img {
      width: 300px;
      margin-right: 0px;
      margin-left: -135px;
    }

    h2 {
      top: 211px;
      margin-right: 188px;
    }

    ul {
      margin-top: 238px;
      margin-right: 95px;
    }

    .Varsel {
      top: 370px;
      margin-right: 203px;
    }

    .ulVarsel {
      margin-top: 396px;
      margin-right: 111px;
    }

    .Social {
      top: 528px;
      margin-right: 203px;
    }

    .ulSocial {
      margin-top: 556px;
      margin-right: 133px;
    }

    .Fone {
      left: 76px;
    }

    .Email {
      left: 76px;
    }
    
  }

  @media only screen and (min-width: 280px) and (max-width: 335px) {
    height: 710px;

    img {
      width: 300px;
      margin-right: 0px;
      margin-left: -167px;
    }

    h2 {
      top: 211px;
      margin-right: 188px;
    }

    ul {
      margin-top: 238px;
      margin-right: 95px;
    }

    .Varsel {
      top: 370px;
      margin-right: 203px;
    }

    .ulVarsel {
      margin-top: 396px;
      margin-right: 111px;
    }

    .Social {
      top: 528px;
      margin-right: 203px;
    }

    .ulSocial {
      margin-top: 556px;
      margin-right: 133px;
    }

    .Fone {
      left: 43px;
    }

    .Email {
      left: 43px;
    }
    
  }

`;

export const Navi = styled.div`
  text-align: center;

  position: absolute;
  width: 100%;
  height: 40px;
  background-color: #030303;
  bottom: 0;
    
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    margin-top: 15px;
    color: #53535a;
  }

`