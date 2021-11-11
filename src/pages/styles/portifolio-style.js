import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

  position: relative;
  height: 850px;
  top: 500px;

  background-color: #060607;
  border-top: 1px solid rgba(115, 115, 128, 0.29);
  border-bottom: 1px solid rgba(115, 115, 128, 0.29);
 

  h1 {
    position: relative;
    width: 500px;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    top: 100px;
    left: 150px;
  }

  p {
      position: relative;
      width: 558px;
      color: #737380;
      font-family: 'Roboto', sans-serif;
      font-size: 20px;
      top: 110px;
      left: 150px;
  }

  img {
    position: relative;
    width: 500px;
    height: 340.25px;
    margin-right: 90px;
    
  }

  @media only screen and (min-width: 1100px) and (max-width: 1255px) {
    img {
      width: 325px;
      height: 290px;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 1100px) {
    img {
      display: none;
    }
  }

  @media only screen and (min-width: 625px) and (max-width: 745px) {
    h1 {
      left: 60px;
    }

    p {
      left: 60px;
    }

  }

  @media only screen and (min-width: 300px) and (max-width: 625px) {
    h1 {
      left: 30px;
      width: 470px;
      font-size: 24px;
    }

    p {
      left: 30px;
      width: 470px;
      font-size: 18px;
    }

  }

  @media only screen and (min-width: 300px) and (max-width: 505px) {
    h1 {
      width: 90%;
    }

    p {
      width: 90%;
    }

  }

`;

export const Products = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    position: relative;
    width: 45%;
    top: -50px;
    left: 135px;


  img {
    cursor: pointer;
    width: 150px;
    height: 170px;
   
    margin-left: 20px;
    margin-bottom: 30px;
    transition: 1s;
    border: 1px solid rgba(255,255,255,0.0);
  }

  img:hover {
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: 3%;
  }

  @media only screen and (min-width: 300px) and (max-width: 1095px) {
    width: 75%;
    height: 100px;
  }

  @media only screen and (min-width: 600px) and (max-width: 800px) {
    img {
      width: 130px;
      height: 140px;
    }

    left: 40px;
    
  }

  @media only screen and (min-width: 400px) and (max-width: 600px) {
    img {
      width: 120px;
      height: 140px;
    }

    left: 40px;
  }

  @media only screen and (min-width: 315px) and (max-width: 400px) {
    img {
      width: 90px;
      height: 110px;
    }
  
      left: 10px;
  }

  @media only screen and (min-width: 280px) and (max-width: 315px) {
    img {
      width: 90px;
      height: 140px;
    }
  
      left: 10px;
  }

`;
