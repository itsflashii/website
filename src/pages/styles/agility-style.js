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
        left: 550px;
    }


    p {
        position: absolute;
        width: 650px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: #737380;

        top: 80px;
        left: 550px;
    }

    img {
        position: absolute;
        width: 300px;
        top: 10px;
        left: 160px;
    }

    @media only screen and (min-width: 1080px) and (max-width: 1167px) {
        margin-top: 200px;

        h1 {
            left: 415px;
        }

        p {
            left: 415px;
        }
    }

    @media only screen and (min-width: 986px) and (max-width: 1080px) {
        margin-top: 200px;

        h1 {
            left: 400px;
        }

        p {
            width: 584px;
            left: 400px;
        }

        img {
            width: 250px;
        }
    }


    @media only screen and (min-width: 0px) and (max-width: 986px) {
        margin-top: 200px;

        img {
            display: none;
        }
    }

    @media only screen and (min-width: 660px) and (max-width: 986px) {
        margin-top: 200px;
        h1 {
            left: 27%;
        }

        p {
            width: 450px;

            left: 27%;
        }
    }

    @media only screen and (min-width: 496px) and (max-width: 660px) {
        margin-top: 200px;
        h1 {
            font-size: 30px;
            left: 15%;
        }

        p {
            width: 421px;
            font-size: 14px;
            left: 15%;
        }
    }

    @media only screen and (min-width: 325px) and (max-width: 496px) {
        margin-top: 200px;
        h1 {
            width: 95%;
            font-size: 26px;
            left: 15px;
        }

        p {
            width: 90%;
            font-size: 13px;
            left: 15px;
        }
    }

    @media only screen and (min-width: 285px) and (max-width: 325px) {
        margin-top: 200px;
        h1 {
            width: 100%;
            font-size: 25px;
            left: 10px;
        }

        p {
            width: 100%;
            font-size: 13px;
            top: 85px;
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
    left: 465px;


    @media only screen and (min-width: 660px) and (max-width: 986px) {
        left: 18%;
        top: -223px;
        width: 100px;
    }

    @media only screen and (min-width: 496px) and (max-width: 660px) {
        left: 8%;
        top: -223px;
        width: 100px;
    }

    @media only screen and (min-width: 395px) and (max-width: 496px) {
        left: -30px;
        top: -223px;
        width: 100px;
    }

    @media only screen and (min-width: 300px) and (max-width: 395px) {
        left: -70px;
        top: -223px;
        width: 100px;
    }

`;