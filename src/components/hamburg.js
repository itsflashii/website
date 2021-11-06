import * as React from 'react';
import { HamburgStyle, Svghamburg } from './styles/hamburg-style'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'
import { Link } from "react-scroll";



const HamburgMenu = (props) => {
  const { txt1, txt2, txt3, txt4 } = props
  const [openMenuRef, setMenuState] = React.useState('none')

  const handleOpen = () => {
    setMenuState('block')
  }

  const handleClose = () => {
    setMenuState('none')
  }
  
  
  return (
    <>
    <Svghamburg>
        <BiMenu color='#737380' size={34} onClick={handleOpen} />
    </Svghamburg>

    <HamburgStyle style={{display: openMenuRef}}>
      
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
        <AiOutlineCloseCircle color='#737380' size={34} onClick={handleClose} />
    </HamburgStyle>
    </>
  )
}

export default HamburgMenu;