import styled from 'styled-components';


export const Container = styled.div`
    
    position: fixed;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    color: #f1f1f1;
    width: 100%;
    padding: 20px;
    z-index: -1;
    top: 60px;

    video {
        min-width: 100%;
        min-height: 100%;
    }
    
`;