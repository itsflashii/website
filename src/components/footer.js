import React from 'react';
import { Container, Navi } from './styles/footer-style';
import svgLogo from '../assets/varselInfos.webp';

const Footer = (props) => {

  // const {
  //   Duv,
  //   Pag,
  //   Acom,
  //   Sup,
  //   Aten,
  //   Var,
  //   Crea,
  //   Porti,
  //   Trab,
  //   Dir
  // } = props

  return (
    <>
    <Container>
    
    <img src={svgLogo} alt="Varsel Logo" />
    <h5 className='Email'>Email: contato.varsel@gmail.com</h5>
    <h5 className='Fone' >Campina Grande: (83) 8689-3506 | São Paulo: (11) 97696-3786</h5>
    {/* <h2>{Duv}</h2>
      <ul>
        <li>
          <a href="https://">{Pag}</a>
        </li>
        <li>
          <a href="https://">{Acom}</a>
        </li>
        <li>
          <a href="https://">{Sup}</a>
        </li>
        <li>
          <a href="https://">{Aten}</a>
        </li>
      </ul>  

      <h2 className="Varsel" >Varsel:</h2>
        <ul className="ulVarsel">
          <li>
            <a href="https://">{Var}</a>
          </li>
          <li>
            <a href="https://">{Crea}</a>
          </li>
          <li>
            <a href="https://">{Porti}</a>
          </li>
          <li>
            <a href="https://">{Trab}</a>
          </li>
        </ul> 

      <h2 className="Social" >Social:</h2> 
        <ul className="ulSocial">
          <li>
            <a href="https://">Github Content</a>
          </li>
          <li>
            <a href="https://">Discord</a>
          </li>
          <li>
            <a href="https://">Youtube</a>
          </li>
          <li>
            <a href="https://">Instagram</a>
          </li>
        </ul>  */}

    <Navi>
      <p>{props.Dir}</p>
    </Navi>
    </Container>
     </>
  )
}
export default Footer;
