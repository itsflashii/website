import styled from 'styled-components';

export const TestiMonialCard = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  

  cursor: pointer;
  position: relative;
  width: 400px;
  height: 200px;
  background-color: #060607;
  border-radius: 5px;
  margin-left: 30px;
  margin-bottom: 20px;

  
  p {
    width: 93%;
    height: 80px;
    color: #C2C2C2;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
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
    width: 100px;
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
    width: 75px;
    color: #737380;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    top: 55px;
    left: 80px;
  }

  @media only screen and (min-width: 846px) and (max-width: 986px) {
    margin-left: -40px;
  }

  @media only screen and (min-width: 700x) and (max-width: 846px) {
    margin-left: -80px;
  }

`;


export const BoxRatings = styled.div`
    position: absolute;
    top: 165px;
    right: 0;
    margin-right: 15px;
`;
