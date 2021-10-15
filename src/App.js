import React from "react";
import GlobalStyles from './styles/global';
import Landing from './pages/landing';
import backgroundVideo from './assets/background.mp4';
import About from './pages/about';
import Agility from './pages/agility';
import Design from './pages/design';
import AgilityLarge from './assets/propImage.png'
import Phone from './assets/celular.png'
import MobileLogin from './assets/undraw_mobile_login.png';

 function App() {
      return (
        <>
            <Landing 
              bgVideo={backgroundVideo}
              largeText='Versatilidade na web, mobile & desktop.'
              smallText='Aqui sua imaginação se torna realidade. Projetos, sonhos são o que movem a grande engrenagem da Varsel. venha crescer e se torna a melhor em sua área.' 
              ArrowSmallText='Descubra mais'
            />
            <About
              largeText='Por que contratar a Varsel ?'
              smallText='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus'
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
            
            <GlobalStyles />
        </>
      );
}

export default App;
