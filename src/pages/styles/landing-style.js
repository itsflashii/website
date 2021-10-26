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

    span {
        position: absolute;
        width: 500px;
        color: #737380;
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        font-weight: 400;
        top: 280px;
        left: 140px;
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

        .arrowDown {/* ARRUMAR */
            left: 40%;
        }
    }

    @media only screen and (min-width: 628px) and (max-width: 900px) {
        h1 {
            left: 27%;
        }
    
        p {
            left: 27%;
        }
        
        span {
            left: 27%;
        }

        .arrowDown {/* ARRUMAR */
            left: 40%;
        }
    }

    @media only screen and (min-width: 504px) and (max-width: 628px) {
        h1 {
            left: 40px;
        }
    
        p {
            left: 40px;
        }
        
        span {
            left: 40px;
        }

        .arrowDown {/* ARRUMAR */
            left: 40%;
        }
    }

    @media only screen and (min-width: 300px) and (max-width: 504px) {
        h1 {
            font-size: 27px;
            width: 412px;
            top: 210px;
            left: 40px;
        }
    
        p {
            top: 361px;
            left: 40px;
        }
        
        span {
            width: 410px;
            left: 40px;
        }

        .arrowDown {/* ARRUMAR */
            top: 366px;
            left: 178px;
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
