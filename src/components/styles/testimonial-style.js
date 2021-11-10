import styled from 'styled-components';

export const TestiMonialCard = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  


  
  cursor: pointer;
  position: relative;
  width: 363px;
  height: 200px;
  background-color: #060607;
  border-radius: 5px;
  left: 115px;
  margin-left: 10px;
  margin-bottom: 10px;
  
  p {
    position: relative;
    width: 93%;
    height: 80px;
    color: #C2C2C2;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    top: 27px;
    left: 15px;
  }

  img {
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 100%;
      top: 130px;
      left: 20px;
      border: 2px solid #C2C2C2;
  }

  h3 {
    width: 200px;
    position: relative;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: white;
    font-size: 14px;
    top: 55px;
    left: 80px;
  }

  h5 {
    position: relative;
    width: 200px;
    color: #737380;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    top: 55px;
    left: 80px;
  }

  @media only screen and (min-width: 846px) and (max-width: 986px) {
    margin-left: 30px;

    width: 340px;
  }

  @media only screen and (min-width: 700px) and (max-width: 846px) {
    width: 60%;

    margin-left: 15px;
  }

  @media only screen and (min-width: 458px) and (max-width: 560px) {
    margin-left: -85px;
  }

  @media only screen and (min-width: 410px) and (max-width: 458px) {

    width: 90%;
    margin-left: -80px;

    p {
      font-size: 14px;
    }

  }

  @media only screen and (min-width: 250px) and (max-width: 410px) {

    width: 99%;
    margin-left: -115px;

    p {
      font-size: 12px;
    }

    h5 {
      top: 60px;
      font-size: 11px;
    }

    h3 {
      top: 60px;
      font-size: 13px;
    }

    img {
      width: 40px;
      height: 40px;
      top: 135px;
      left: 30px;
    }
    
  }

`;


export const BoxRatings = styled.div`
    position: absolute;
    top: 165px;
    right: 0;
    margin-right: 15px;
`;
