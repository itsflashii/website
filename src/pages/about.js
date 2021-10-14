import React from 'react';
import { Container } from './styles/about-style'
import MobileLogin from '../assets/undraw_mobile_login.png'

const About = () => {
    return (
        <Container>
            <h1>Por que contratar a Varsel ?</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
            <img src={MobileLogin} alt="Mobile App" />
        </Container>
    )
}
export default About;