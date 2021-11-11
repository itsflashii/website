import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    position: relative;
    height: 300px;

    h1 {
        position: absolute;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 34px;
        color: white;
        top: -80px;
        left: 550px;
    }


    p {
        position: absolute;
        width: 650px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: #737380;

        top: -20px;
        left: 550px;
    }

    img {
        position: absolute;
        width: 300px;
        height: 611px;
        top: -100px;
        left: 160px;
    }

    @media only screen and (min-width: 1210px) and (max-width: 1230px) {
        /*margin-top: 200px;*/

        h1 {
            left: 525px;
        }

        p {
            left: 525px;
        }
    }

    @media only screen and (min-width: 1010px) and (max-width: 1210px) {
        /*margin-top: 200px;*/

        h1 {
            left: 400px;
        }

        p {
            width: 584px;
            left: 400px;
        }

        img {
            width: 250px;
            left: 120px;
        }
    }



    @media only screen and (min-width: 0px) and (max-width: 1010px) {
        img {
            display: none;
        }
    }

    @media only screen and (min-width: 705px) and (max-width: 1010px) {

        h1 {
            left: 27%;
        }

        p {
            width: 550px;
            left: 27%;
        }
    }

    @media only screen and (min-width: 496px) and (max-width: 705px) {
        margin-top: -250px;

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
        margin-top: -250px;
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

    @media only screen and (min-width: 285px) and (max-width: 362px) {
        margin-top: -200px;

        h1 {
            width: 100%;
            font-size: 25px;
            left: 10px;
        }

        p {
            width: 90%;
            font-size: 13px;
            top: -5px;
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
    top: -150px;
    left: 465px;

    @media only screen and (min-width: 1210px) and (max-width: 1230px) {
        left: 433px;
    }

    @media only screen and (min-width: 1185px) and (max-width: 1210px) {
        left: 322px;
    }

    @media only screen and (min-width: 1085px) and (max-width: 1185px) {
        left: 393px;
    }

    @media only screen and (min-width: 1010px) and (max-width: 1085px) {
        left: 413px;
    }

    @media only screen and (min-width: 705px) and (max-width: 1010px) {
        left: 30%;
        width: 80%;
    
        p {

            width: 100%;
        }
    }

    @media only screen and (min-width: 496px) and (max-width: 705px) {
        left: 8%;
        top: -145px;
        width: 80%;
    
        p {

            width: 100%;
        }
    }

    @media only screen and (min-width: 395px) and (max-width: 496px) {
        left: -30px;
        top: -175px;
        width: 80%;
    
        p {

            width: 100%;
        }

    }

    @media only screen and (min-width: 300px) and (max-width: 395px) {
        left: -70px;
        top: -170px;
        width: 80%;
    
        p {
            border: 1px solid blue;
            width: 100%;
        }
    }

`;