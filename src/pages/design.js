import React from 'react';
import { Container } from './styles/design-style';


const Design = (props) => {
    const { largeText, smallText, propImage } = props
    
    return (
        <Container>
            <img src={propImage} alt="Phone" />
            <h1>{largeText}</h1>
            <p>{smallText}</p>
        </Container>
    )
}

export default Design;