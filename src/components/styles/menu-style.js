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


    img {
        width: 100px;
        height: 100px;
        margin-top: 25px;
        margin-left: 310px;
    }

    ul {
        margin-top: -65px;
        margin-left: 490px;
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
`;
