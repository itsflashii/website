import React from "react";
import Landing from './pages/landing';
import backgroundVideo from './assets/background.mp4';
import About from './pages/about';
import Agility from './pages/agility';
import Design from './pages/design';
import AgilityLarge from './assets/propImage.png'
import Phone from './assets/celular.png'
import MobileLogin from './assets/undraw_mobile_login.png';
import Testimonials from "./pages/testimonials";
import Menu from './components/menu'
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
              smallText='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'
              propImage={AgilityLarge}
            />
            <Design 
              largeText='Design de acordo com seu gosto & marca.'
              smallText='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.'
              propImage={Phone}
            />
            <Testimonials />

          
        </>
      );
}

export default App;
