import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    position: relative;
    height: 690px;
    
    h1 {
        position: absolute;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 34px;
        color: white;
        
        top: 70px;
        left: 640px;
    }


    p {
        position: absolute;
        width: 650px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: #737380;

        top: 140px;
        left: 640px;
    }

    img {
        position: absolute;
        width: 300px;
        top: 50px;
        left: 300px;

    }
`;

export const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    position: relative;
    
    width: 800px;
   // border: 1px solid red;
    top: -370px;
    left: 550px;

`;