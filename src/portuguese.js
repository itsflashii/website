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

import AgilityLarge from './assets/propImage.webp'
import Phone from './assets/celular.webp'
import MobileLogin from './assets/undraw_mobile_login.webp';



function App() {
      return (
        <>
      <Menu 
        txt1='Home'
        txt2='A Varsel'
        txt3='Portifolio'
        txt4='Contato'
        
      />
            <Landing 
              bgVideo={backgroundVideo}
              largeText='Versatilidade na web, mobile & desktop.'
              smallText='Aqui sua imaginação se torna realidade. Projetos, sonhos são o que movem a grande engrenagem da Varsel. Venha crescer e se tornar a melhor em sua área.' 
              ArrowSmallText='Descubra mais'
            />
            <About
              
              largeText='Por que contratar a Varsel ?'
              smallText='A pergunta mas certa seria, "Por que não contratar a Varsel. Temos uma equipe qualificada e flexível a todo tipo de empreendimento e projeto, contando com a nossa versatilidade e qualidade. Todos nossos projetos e automações são feitos utilizando as ferramentas mais atualizadas do mercado. Melhorando e otimizando ainda mais seu projeto. Ainda não está satisfeito? Tem mais, todos passam por um selo de qualidade & segurança de vários profissionais da área. O que você está esperando? Venha fazer parte do nosso mundo.'
              propImage={MobileLogin}
              text1='Trabalho em equipe.'
              text2='Projetos em larga escala.'
              msg1='A reunião de talentos especializados em sua área, com características diferentes, torna o todo mais completo e mais capacitado para chegar até a satisfação dos nossos clientes'
              msg2='Já tem um projeto bigdata e quer recria-lo? sem problemas, a varsel tem o total suporte de projetos em larga escala. Nós suportamos o tranco!'
            />
            <Agility 
              largeText='Agilidade & Qualidade.'
              smallText='A produtividade e a base para um bom projeto, sendo influenciada principalmente pelo um bom trabalho. Aqui não pode ser diferente não e mesmo. Trazemos a tranquilidade de um projeto refinado & ágil, sendo moldurado pelas idéias de nossos clientes contratantes.'
              propImage={AgilityLarge}
              front='Trabalhando com as melhores tecnologias do mercado, nós temos uma equipe dedicada somente ao front-end do seu website.'
              back='Que tal fazer a integração de outra plataforma em seu app? Você escolhe, nós fazemos.'
              uix='Um design único para seu site, nos mostre sua idéia. nós criamos oque você pensa.'
              edit='Expanda a sua idéia, que tal um vídeo apresentação do seu projeto?'


            />
            <Design 
              largeText='Design de acordo com seu gosto & marca.'
              smallText='“Você nunca terá uma segunda chance de causar uma primeira boa impressão”. Proporcionar experiências incríveis, são sentimentos únicos na vida de um bom desenvolvedor a atenção a cada detalhe é a mágica por trás disso. Venha se dedicar ao seu sonho, junto com a Varsel'
              propImage={Phone}
            />
            <Testimonials
              largeText="Ajudando milhares de empresas a antingirem o potencial máximo."
              smallText="Veja o que algumas delas disseram:"
            />

            <Portifolio 
              largeText='Conheça alguns dos nossos principais trabalhos.'
              smallText='Faça parte desta lista também, entre em contato com a Varsel.'
              link2='https://jelly-raisin-7a6.notion.site/SEV7N-CLIENT-bcab7d87bb7046e99902137583a67256'
              link1='https://jelly-raisin-7a6.notion.site/Ops-a6afc3ae82b94b1b85eab194158bf071'
              link3='https://jelly-raisin-7a6.notion.site/Sunrise-Roleplay-70d245f94fb24d28b15fcf004c6b6382'
              link4='https://jelly-raisin-7a6.notion.site/Ops-a6afc3ae82b94b1b85eab194158bf071'
              link5='https://jelly-raisin-7a6.notion.site/Ops-a6afc3ae82b94b1b85eab194158bf071'
              link6='https://jelly-raisin-7a6.notion.site/Ops-a6afc3ae82b94b1b85eab194158bf071'
            />
            
            <Lab 
              largeText='Mais de'
              CountBuss='260'
              largeText2='empresas contrataram a Varsel.'
              SmallText='Faça parte dessa lista, entre em contato conosco e faça um orçamento.'
              buttonTxt='Enviar um Email'
            />

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
