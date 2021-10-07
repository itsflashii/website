import styled from 'styled-components';


export const Container = styled.div`
    
    position: relative;
    right: 0;
    overflow-y: hidden;
    overflow-x: hidden;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    color: #f1f1f1;
    width: 100%;
    padding: 20px;
    margin-top: -95px;
    z-index: -1;
    top: 60px;


    video {
        min-width: 100%;
        min-height: 100%;
    }

    h1 {
        position: absolute;
        width: 500px;
        font-family: 'Roboto', sans-serif;
        font-size: 40px;
        font-weight: 600;
        margin-top: 220px;
        margin-left: 100px;
    }

    span {
        position: absolute;
        width: 500px;
        color: #737380;
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        font-weight: 400;
        margin-top: 330px;
        margin-left: 100px;
    }
`;