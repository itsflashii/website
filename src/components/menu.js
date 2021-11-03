import React from 'react';
import { Container } from './styles/menu-style';
import logo from '../assets/logo.svg'
import HamburgMenu from '../components/hamburg';
const Header = () => {
    return (
        <>
        <Container>
        
            <img src={logo} alt="Varsel" />
            
            <ul>
                <li>
                    <a href="https://">Home</a>
                </li>
                <li>
                    <a href="https://">Sobre</a>
                </li>
                <li>
                    <a href="https://">Nosso Time</a>
                </li>
                <li>
                    <a href="https://">Portifolio</a>
                </li>
            </ul>
        </Container>
        <HamburgMenu />
        </>
    )
}

export default Header;