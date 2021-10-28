import * as React from 'react';
import { HamburgStyle, Svghamburg } from './styles/hamburg-style'
import { BiMenu } from 'react-icons/bi'
const HamburgMenu = () => {
  return (
    <>
    <Svghamburg>
        <BiMenu color='white' size={34}></BiMenu>
    </Svghamburg>
    <HamburgStyle>
      
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
    </HamburgStyle>
    </>
  )
}

export default HamburgMenu;