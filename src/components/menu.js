import * as React from 'react';
import { Container } from './styles/menu-style';
import logo from '../assets/logo.svg'
import HamburgMenu from '../components/hamburg';
import { Link } from "react-scroll";

const Header = (props) => {
    const { txt1, txt2, txt3, txt4 } = props
    


    return (
        <>
        <Container id='menu'>
        
            <img src={logo} alt="Varsel" />
            
            <ul>
                <li>
                <Link
                    activeClass="active"
                    to="menu"
                    spy={true}
                    smooth={true}
                    offset={-0.1}
                    duration={1500}
                >
                {txt1}
                </Link>
                </li>
                <li>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-0.1}
                    duration={1500}
                >
                 {txt2}
                </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="portifolio"
                        spy={true}
                        smooth={true}
                        offset={10}
                        duration={1500}
                    >
                    {txt3}
                    </Link>
                </li>
                <li>
                <Link
                        activeClass="active"
                        to="contato"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={2000}
                    >
                    {txt4}
                    </Link>
                </li>
            </ul>
        </Container>
        <HamburgMenu 
            txt1={txt1}
            txt2={txt2}
            txt3={txt3}
            txt4={txt4}
        />
        </>
    )
}

export default Header;