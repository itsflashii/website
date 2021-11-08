import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');


   position: absolute;
   width: 90%;
   height: 100vh;

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
      width: 100%!important;
      color: #737380;
      font-family: 'Roboto', sans-serif;
      font-size: 20px;
      top: 110px;
      left: 150px;
  }

  @media only screen and (min-width: 846px) and (max-width: 986px) {
    h1 {
      width: 100%!important;
      left: 100px;
    }

    p {
      width: 100%!important;
      left: 100px;
    }

  }

  @media only screen and (min-width: 546px) and (max-width: 846px) {

    h1 {
      width: 100%!important;
      left: 50px;
    }

    p {
      width: 100%!important;
      left: 50px;
      
    }

  }

  @media only screen and (min-width: 458px) and (max-width: 560px) {

    h1 {
      font-size: 27px;
      width: 100%!important;
      left: 20px;
    }

    p {
      font-size: 17px;
      width: 100%;
      left: 20px;
    }

  }

  @media only screen and (min-width: 410px) and (max-width: 458px) {

    h1 {
      font-size: 22px;
      width: 100%!important;
      left: 20px;
    }

    p {
      font-size: 15px;
      width: 100%!important;
      left: 20px;
    }

  }

  @media only screen and (min-width: 230px) and (max-width: 410px) {

    h1 {
      width: 90%;
      font-size: 24.5px;
      left: 11px;
    }

    p {
      font-size: 14px;
      left: 11px;
    }

  }

`;

export const ContainerTestimonail = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    flex-direction: row;
    position: relative;
    width: 90%;
    top: 350px;
    left: 10px;
    
`;