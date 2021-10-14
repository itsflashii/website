import React from 'react';
import { Container } from './styles/design-style';
import Phone from '../assets/celular.png'

const Design = () => {
    return (
        <Container>
            <img src={Phone} alt="Phone" />
            <h1>Design de acordo com seu gosto & marca.</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.</p>
        </Container>
    )
}

export default Design;