import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  position: relative;
  width: 100%;
  height: 300px;
  background-color: #060607;
  top: 50vh;
  border-top: 1px solid rgba(115, 115, 128, 0.29);

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
  }

  .Fone {
    position: absolute;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    font-weight: 400;
    top: 160px;
    left: 215px;
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
    color: #3C3C43;
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
    color: #3C3C43;
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
    color: #3C3C43;
    transition: 1s;
  }

  .ulSocial a:hover {
    color: #FFFFFF;
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
  }

`