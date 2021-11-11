import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    

    position: relative;
    right: 0;
    overflow-y: hidden;
    overflow-x: hidden;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    color: #f1f1f1;
    width: 100%;
    top: -95px;
    z-index: -1;
    top: 60px;

    video {
        width: 100%;
        float: right;
    }

    h1 {
        position: absolute;
        width: 500px;
        font-family: 'Roboto', sans-serif;
        font-size: 40px;
        font-weight: 700;
        top: 170px;
        left: 140px;
    }


    .bgBlock1 {
        position: absolute;
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-position: center;
        z-index: -1;
        background-color: black;
        opacity: 0.6;
    
    }

    span {
        position: absolute;
        width: 500px;
        color: #737380;
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        font-weight: 400;
        top: 280px;
        left: 145px;
    }

    p {
        cursor: pointer !important;
        position: absolute;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        top: 380px;
        left: 140px;
        z-index: 1;
        
    }

    .arrowDown {
        position: absolute;
        top: 385px;
        left: 270px;
       
        -webkit-animation: sdb04 1.5s infinite;
        animation: sdb04 2.5s infinite;
    }

    @media only screen and (min-width: 0px) and (max-width: 1210px) {
        height: 760px;
        top: 0px;



        video {
            display: none;
        }
    }


    @media only screen and (min-width: 900px) and (max-width: 1210px) {
        h1 {
            left: 37%;
        }
    
        p {
            left: 37%;
        }
        
        span {
            left: 37%;
        }

        .arrowDown {
            left: 50%;
        }
    }

    @media only screen and (min-width: 650px) and (max-width: 900px) {
        h1 {
            left: 27%;
        }
    
        p {
            left: 27%;
        }
        
        span {
            left: 27%;
        }

        .arrowDown {
            left: 45%;
        }
    }

    @media only screen and (min-width: 504px) and (max-width: 650px) {
        h1 {
            left: 40px;
        }
    
        p {
            left: 40px;
        }
        
        span {
            left: 40px;
        }

        .arrowDown {
            left: 34%;
        }
    }

    @media only screen and (min-width: 350px) and (max-width: 504px) {
        h1 {
            font-size: 30px;
            width: 310px;
            top: 200px;
            left: 30px;
        }
    
        p {
            top: 371px;
            left: 30px;
        }
        
        span {
          
            width: 300px;
            left: 30px;
        }

        .arrowDown {
            top: 375px;
            left: 160px;
        }
    }

    @media only screen and (min-width: 250px) and (max-width: 350px) {
        h1 {
            font-size: 30px;
            width: 100%;
            top: 90px;
            left: 13px;
        }
    
        p {
            top: 285px;
            left: 20px;
        }
        
        span {
            width: 90%;
            top: 175px;
            left: 13px;
        }

        .arrowDown {
            top: 290px;
            left: 150px;
        }
    }

    @-webkit-keyframes sdb04 {
        0% {
                -webkit-transform: rotate(0deg) translate(0, 0);
        }
        20% {
                -webkit-transform: rotate(0deg) translate(-10px, 10px);
        }
        40% {
                -webkit-transform: rotate(0deg) translate(0, 0);
        }
    }
    @keyframes sdb04 {
        0% {
            transform: rotate(0deg) translate(0, 0);
        }
        20% {
            transform: rotate(0deg) translate(-1px, 10px);
        }
        40% {
            transform: rotate(0deg) translate(0, 0);
        }
    }

`;
