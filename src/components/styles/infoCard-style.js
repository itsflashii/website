import styled from 'styled-components';

export const Card = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    position: relative;
    width: 300px;
    margin-left: 90px;
    padding-bottom: 50px;
    
    h2 {
        color: white;
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        padding-bottom: 14px;
    }

    p {
        width: 300px;
        color: #737380;
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    img {
        width: 35px;
        padding-bottom: 15px;
    }

    @media only screen and (min-width: 986px) and (max-width: 1080px) {
        width: 250px;
        margin-left: 70px;
    }

    @media only screen and (min-width: 475px) and (max-width: 490px) {
        h2 {
            font-size: 17px;
        }

        p {
            font-size: 13px;
        }
    }

    @media only screen and (min-width: 250px) and (max-width: 475px) {
        h2 {
            font-size: 15px;
        }
        
        p {
            font-size: 11px;
        }

    }

    /* INFO CARD - AGILITY */

    @media only screen and (min-width: 1080px) and (max-width: 1167px) {
        
        .h2 {
            margin-left: -80px;
        }

        .p {
            margin-left: -80px;
        }

        img {
            margin-left: -80px;
        }

    }

    @media only screen and (min-width: 986px) and (max-width: 1080px) {
        
        .h2 {
            margin-left: -80px;
        }

        .p {
            margin-left: -80px;
        }

        img {
            margin-left: -80px;
        }

    }
`;
