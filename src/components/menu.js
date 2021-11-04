import React from 'react';
import { Container } from './styles/menu-style';
import logo from '../assets/logo.svg'
import HamburgMenu from '../components/hamburg';
const Header = (props) => {
    const { txt1, txt2, txt3, txt4 } = props

    return (
        <>
        <Container>
        
            <img src={logo} alt="Varsel" />
            
            <ul>
                <li>
                    <a href="https://">{txt1}</a>
                </li>
                <li>
                    <a href="https://">{txt2}</a>
                </li>
                <li>
                    <a href="https://">{txt3}</a>
                </li>
                <li>
                    <a href="https://">{txt4}</a>
                </li>
            </ul>
        </Container>
        <HamburgMenu />
        </>
    )
}

export default Header;