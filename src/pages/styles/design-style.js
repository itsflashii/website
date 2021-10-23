import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    position: relative;
    height: 700px;
    background-color: #060607;
    /*scroll-snap-align: center;*/
        
    h1 {
        position: absolute;
        width: 490px;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 30px;
        color: white;

        top: 280px;
        left: 305px;
    }

    p {
        position: absolute;
        width: 650px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: #737380;

        top: 380px;
        left: 305px;
   
    }


    img {
        position: absolute;
        width: 390px;
        top: 112px;

        right: 0;
        margin-right: 230px;
    }
`;