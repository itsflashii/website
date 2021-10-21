import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;500&display=swap');
    
    position: relative;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    height: 80px;
    padding: 0 30px;
    color: #FFFFFF;
    align-items: center;
    /*scroll-snap-align: center;*/

    img {
        margin-top: 25px;
        margin-left: 60px;
    }

    ul {
        margin-top: -65px;
        text-align: center;
    }
    
    li{
        display: inline-block;
        margin-left: 110px;
    }

    a {
        text-decoration: none;
        color: #737380;
        transition: 1s;
    }

    a:hover {
        color: #FFFFFF;
    }

    @media only screen and (min-width: 730px) and (max-width: 820px) {
        ul {
            text-align: end;
        }

        li {
            margin-left: 90px;
        }
    }

    @media only screen and (min-width: 683px) and (max-width: 730px) {
        ul {
            text-align: end;
        }

        li {
            margin-left: 70px;
        }
    }

    @media only screen and (min-width: 565px) and (max-width: 683px) {
        ul {
            text-align: end;
        }

        li {
            margin-left: 50px;
        }

        img {
            margin-left: 10px;
        }
    }

    @media only screen and (min-width: 525px) and (max-width: 565px) {
        ul {
            text-align: end;
        }

        li {
            margin-left: 30px;
        }

        img {
            margin-left: 5px;
        }
    }
`;
