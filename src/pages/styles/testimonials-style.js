import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    
    scroll-snap-align: center;

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
      width: 330px;
      color: #737380;
      font-family: 'Roboto', sans-serif;
      font-size: 20px;
      top: 110px;
      left: 150px;
  }

  @media only screen and (min-width: 846px) and (max-width: 986px) {
    h1 {
      left: 100px;
    }

    p {
      left: 100px;
    }

  }

  @media only screen and (min-width: 546px) and (max-width: 846px) {

    h1 {
      left: 50px;
    }

    p {
      left: 50px;
    }

  }

  @media only screen and (min-width: 458px) and (max-width: 560px) {

    h1 {
      font-size: 25px;
      left: 20px;
    }

    p {
      font-size: 17px;
      left: 20px;
    }

  }

  @media only screen and (min-width: 410px) and (max-width: 458px) {

    h1 {
      font-size: 22px;
      left: 20px;
    }

    p {
      font-size: 15px;
      left: 20px;
    }

  }

  @media only screen and (min-width: 300px) and (max-width: 410px) {

    h1 {
      width: 339px;
      font-size: 20px;
      left: 17px;
    }

    p {
      font-size: 14px;
      left: 17px;
    }

  }

`;

export const ContainerTestimonail = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    position: relative;
    width: 90%;
    top: 150px;
    left: 130px;

    @media only screen and (min-width: 770px) and (max-width: 846px) {
      margin-left: 90px;
      left: -45px;
    }

    @media only screen and (min-width: 846px) and (max-width: 986px) {
      margin-left: 85px;
      left: -25px;
    }
`;