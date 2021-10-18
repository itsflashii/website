import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
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
`;

export const ContainerTestimonail = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    position: relative;
    width: 90%;
    top: 150px;
    left: 130px;
`;
