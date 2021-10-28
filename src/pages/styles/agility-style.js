import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    position: relative;
    height: 490px;

    h1 {
        position: absolute;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 34px;
        color: white;
        
        top: 10px;
        left: 500px;
    }


    p {
        position: absolute;
        width: 650px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: #737380;

        top: 80px;
        left: 500px;
    }

    img {
        position: absolute;
        width: 300px;
        top: 10px;
        left: 100px;

    }

    @media only screen and (min-width: 846px) and (max-width: 986px) {
        img {
            left: 10px;
        }
    }
`;

export const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    position: relative;
    
    width: 800px;
   // border: 1px solid red;
    top: -260px;
    left: 415px;

`;