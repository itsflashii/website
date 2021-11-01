import React from 'react';
import { Container, Navi } from './styles/footer-style';
import svgLogo from '../assets/varselInfos.png';

const Footer = () => {
  return (
    <>
    <Container>
    
    <img src={svgLogo} alt="Varsel Logo" />
    <h5 className='Email'>Email: contato@varsel.com.br</h5>
    <h5 className='Fone' >Fone: +11 9934-55968</h5>

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