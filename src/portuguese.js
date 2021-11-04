import * as React from "react";


import Landing from './pages/landing';
import backgroundVideo from './assets/background.mp4';
import About from './pages/about';
import Agility from './pages/agility';
import Design from './pages/design';
import Portifolio from './pages/portifolio'
import Testimonials from './pages/testimonials';
import Lab from './pages/lab'

import Menu from './components/menu';
import Footer from './components/footer';

import AgilityLarge from './assets/propImage.png'
import Phone from './assets/celular.png'
import MobileLogin from './assets/undraw_mobile_login.png';



function App() {
      return (
        <>
      <Menu />
            <Landing 
              bgVideo={backgroundVideo}
              largeText='Versatilidade na web, mobile & desktop.'
              smallText='Aqui sua imaginação se torna realidade. Projetos, sonhos são o que movem a grande engrenagem da Varsel. venha crescer e se torna a melhor em sua área.' 
              ArrowSmallText='Descubra mais'
            />
            <About
              largeText='Por que contratar a Varsel ?'
              smallText='A pergunta mas certa seria, "Por que não contratar a Varsel. Temos uma equipe qualificada e flexível a todo tipo de empreendimento e projeto, contando com a nossa versatilidade e qualidade. todos nossos projetos e automações são feito utilizando as ferramentas mais atualizadas do mercado. Melhorando e otimizando ainda mais seu projeto. Ainda não está satisfeito? Tem mais, todos passam por um selo de qualidade & segurança de vários profissionais da área. O que você está esperando? venha fazer parte do nosso mundo.'
              propImage={MobileLogin}
            />
            <Agility 
              largeText='Agilidade & Qualidade.'
              smallText='A produtividade e a base para um bom projeto, sendo influenciada principalmente pelo um bom trabalho. Aqui não pode ser diferente não e mesmo. Trazemos a tranquilidade de um projeto refinado & ágil, sendo moldurado pelas ideias de nosso clientes contratantes.'
              propImage={AgilityLarge}
            />
            <Design 
              largeText='Design de acordo com seu gosto & marca.'
              smallText='“você nunca terá uma segunda chance de causar uma primeira boa impressão”. Proporcionar experiências incríveis, são sentimentos únicos na vida de um bom desenvolvedor a atenção a cada detalhe é a mágica por trás disso. Venha se dedicar ao seu sonho, junto com a Varsel.'
              propImage={Phone}
            />
            <Testimonials
              largeText="Ajudando milhares de empresas a antingirem o potencial máximo."
              smallText="Veja o que algumas delas disseram:"
            />

            <Portifolio />
            
            <Lab />

            <Footer 
              Duv='Dúvidas'
              Pag='Pagamento'
              Acom='Acompanhamento'
              Sup='Suporte de Produtos'
              Aten='Atendimento'
              Var='A Varsel'
              Crea='Criadores'
              Porti='Portifolio'
              Trab='Trabalhe Conosco'
              Dir='© Varsel, 2021. Todos os direitos reservados.'
            />
          
        </>
      );
}

export default App;
