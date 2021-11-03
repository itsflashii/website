import React from 'react';
import { Container, Navi } from './styles/footer-style';
import svgLogo from '../assets/varselInfos.png';

const Footer = () => {
  return (
    <>
    <Container>
    
    <img src={svgLogo} alt="Varsel Logo" />
    <h5 className='Email'>Email: contato.varsel@gmail.com</h5>
    <h5 className='Fone' >Campina Grande/PA: <b>(83) 8689-3506</b></h5>
    <h5 className='Fone' >São Paulo/SP: <b>(11) 97696-3786</b></h5>
    <h5 className='Fone' >Santa Rosa/RS: <b>(55) 9959-6287</b></h5>
    <h2>Dúvidas:</h2>
      <ul>
        <li>
          <a href="https://">Pagamento</a>
        </li>
        <li>
          <a href="https://">Acompanhamento</a>
        </li>
        <li>
          <a href="https://">Suporte de Produtos</a>
        </li>
        <li>
          <a href="https://">Suporte de Produtos</a>
        </li>
      </ul>  

      <h2 className="Varsel" >Varsel:</h2>
        <ul className="ulVarsel">
          <li>
            <a href="https://">A Varsel</a>
          </li>
          <li>
            <a href="https://">Criadores</a>
          </li>
          <li>
            <a href="https://">Portifolio</a>
          </li>
          <li>
            <a href="https://">Trabalhe Conosco</a>
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
        </ul> 

    <Navi>
      <p>© Varsel, 2021. Todos os direitos reservados.</p>
    </Navi>
    </Container>
     </>
  )
}
export default Footer;