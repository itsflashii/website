import React from 'react';
import { Container } from './styles/header-style';
import logo from './assets/logo.svg'

const Header = () => {
    return (
        <Container>
            <img src={logo} alt="Varsel" />
            
            <ul>
                <li>
                    <a href="https://">Home</a>
                </li>
                <li>
                    <a href="https://">Soluçoes</a>
                </li>
                <li>
                    <a href="https://">Varsel Source</a>
                </li>
                <li>
                    <a href="https://">Sobre</a>
                </li>
            </ul>
        </Container>
    )
}

export default Header;