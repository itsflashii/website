import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    position: relative;
    height: 625px;
    background-color: #060607;
    border-top: 1px solid rgba(115, 115, 128, 0.29);
    border-bottom: 1px solid rgba(115, 115, 128, 0.29);
    h1 {
        position: absolute;
        width: 490px;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 30px;
        color: white;

        top: 250px;
        left: 80px;
    }

    p {
        position: absolute;
        width: 650px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: #737380;

        top: 350px;
        left: 80px;
   
    }


    img {
        position: absolute;
        width: 390px;
        
        top: 35px;

        right: 0;
        margin-right: 130px;
    }

    @media only screen and (min-width: 1178px) and (max-width: 1360px) {
        img {
            width: 340px;
            top: 111px;
        }
    }

    @media only screen and (min-width: 1100px) and (max-width: 1178px) {
        img {
            width: 340px;
            margin-right: 100px;
            top: 111px;
        }

        h1 {
            left: 40px;
        }

        p {
            left: 40px;
        }
    }

    @media only screen and (min-width: 0px) and (max-width: 1100px) {
        img {
            display: none;
        }
    }

    @media only screen and (min-width: 995px) and (max-width: 1100px) {
        height: 522px;

        h1 {
            width: 342px;
            left: 40px;
        }

        p {
            width: 90%;
            left: 40px;
        }
    }

    @media only screen and (min-width: 887px) and (max-width: 995px) {
        height: 512px;

        img {
            width: 290px;
            height: 400px;
            margin-right: 30px;
        }

        h1 {
            font-size: 27px;
            width: 342px;
            left: 40px;
        }

        p {
            font-size: 14px;
            width: 90%;
            left: 40px;
        }
    }

    @media only screen and (min-width: 844px) and (max-width: 887px) {
        height: 492px;

        img {
            width: 270px;
            height: 380px;
            margin-right: 20px;
        }

        h1 {
            font-size: 27px;
            width: 342px;
            left: 30px;
        }

        p {
            font-size: 14px;
            width: 90%;
            left: 30px;
        }
    }

    @media only screen and (min-width: 800px) and (max-width: 844px) {
        height: 492px;
        
        img {
            width: 270px;
            height: 380px;
            margin-right: 20px;
        }

        h1 {
            font-size: 27px;
            width: 342px;
            left: 30px;
        }

        p {
            font-size: 14px;
            width: 90%;
            left: 30px;
        }
    }

    @media only screen and (min-width: 684px) and (max-width: 800px) {
        img {
            display: none;
        }

        h1 {
            font-size: 27px;
            width: 342px;
            left: 30%;
        }

        p {
            font-size: 14px;
            width: 60%;
            left: 30%;
        }
    }

    @media only screen and (min-width: 600px) and (max-width: 684px) {
        img {
            display: none;
        }

        h1 {
            font-size: 27px;
            width: 342px;
            left: 20%;
        }

        p {
            font-size: 14px;
            width: 60%;
            left: 20%;
        }
    }

    @media only screen and (min-width: 540px) and (max-width: 604px) {
        img {
            display: none;
        }

        h1 {
            font-size: 27px;
            width: 342px;
            left: 10%;
        }

        p {
            font-size: 14px;
            width: 80%;
            left: 10%;
        }
    }

    @media only screen and (min-width: 440px) and (max-width: 540px) {
        img {
            display: none;
        }

        h1 {
            font-size: 27px;
            width: 342px;
            left: 5%;
        }

        p {
            font-size: 14px;
            width: 90%;
            left: 5%;
        }
    }

    @media only screen and (min-width: 200px) and (max-width: 440px) {
        img {
            display: none;
        }

        h1 {
            font-size: 24.5px;
            width: 100%;
            left: 10px;
        }

        p {
            font-size: 13px;
            width: 90%;
            top: 366px;
            left: 10px;
        }
    }

    @media only screen and (min-width: 0px) and (max-width: 200px) {
        img {
            display: none;
        }

        h1 {
            font-size: 27px;
            width: 342px;
            left: 5%;
        }

        p {
            font-size: 14px;
            width: 90%;
            left: 5%;
        }
    }


`;