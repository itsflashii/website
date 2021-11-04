import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

   height: 90px;


    h1 {
      text-align: center;
      display: table;
      margin: 0 auto;
      width: 500px;
      color: white;
      font-family: 'Poppins', sans-serif;
      font-size: 40px;
      font-weight: 700;
      margin-top: 350px;
    }

    span {
      color: #6E64C5;
    }

    p {
        display: table;
        margin: 0 auto;
        position: relative;
        width: 558px;
        color: #737380;
        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        top: 10px; 

    }

  @media only screen and (min-width: 300px) and (max-width: 1095px) {
    h1 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 800px) {
    h1{
      width: 300px;
      font-size: 20px;
    }

    p {
      width: 300px;
    }
  }


  @media only screen and (min-width: 400px) and (max-width: 600px) {
    h1 {
      font-size: 15px;
      width: 300px;
    }

    p {
      width: 300px;
    }
  }


  @media only screen and (min-width: 280px) and (max-width: 400px) {
    h1 {
      width: 300px;
    }

    p {
      width: 300px;
    }
  }

`;
