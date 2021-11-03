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
    height: 350.25px;
    margin-right: 90px;
    
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
    z-index: 1;
    margin-left: 20px;
    margin-bottom: 30px;
    

  }

  img:hover {
    border: 1px solid red;
  }
`;
