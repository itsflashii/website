import * as React from 'react';
import { HamburgStyle, Svghamburg } from './styles/hamburg-style'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'



const HamburgMenu = () => {

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
        <AiOutlineCloseCircle color='#737380' size={34} onClick={handleClose} />
    </HamburgStyle>
    </>
  )
}

export default HamburgMenu;