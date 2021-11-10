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
        txt2='Varsel'
        txt3='Portfólio'
        txt4='Contact'
        
      />
            <Landing 
              bgVideo={backgroundVideo}
              largeText='Versatility on the web, mobile and desktop.'
              smallText="Here your imagination comes true. Projects, dreams are what drive Varsel's projects. come to grow and become the best in your area."
              ArrowSmallText='Find out more'
            />
            <About
              
              largeText='Why hire Varsel?'
              smallText="The most correct question would be, Why not hire Varsel. We have a qualified and flexible team for all types of projects and projects, relying on our versatility and quality. All our projects and automation are carried out using the most up-to-date tools on the market Improving and optimizing your project even more Are you still not satisfied? There's more, everyone has a seal of quality & safety from several professionals in the area. What are you waiting for? Come be part of our world."
              propImage={MobileLogin}
              text1='Team work.'
              text2='Large-scale projects.'
              msg1="The gathering of specialized talents in their area, with different characteristics, makes the whole more complete and more capable of reaching our customers' satisfaction."
              msg2='Already have a big data project and want to recreate it? without any problems, varsel is fully supported by large-scale projects. we can take the stride'
            />
            <Agility 
              largeText='Agility and Quality.'
              smallText="Productivity is the basis for a good project, being mainly influenced by a good job. Here it can't be different, it doesn't. We bring the tranquility of a refined & agile project, being framed by the ideas of our contracting clients."
              propImage={AgilityLarge}
              front="Working with the best technologies on the market, we have a team dedicated only to your website's front-end."
              back='How about integrating another platform into your app? You choose, we do.'
              uix='A unique design for your website, show us your idea. we create what you think.'
              edit='Expand your idea, how about a trailer for your project?'
            />
            <Design 
              largeText='Design according to your taste and brand.'
              smallText='“You never get a second chance to make a good first impression”. Providing incredible experiences are unique feelings in the life of a good developer, attention to every detail is the magic behind it. Come and dedicate yourself to your dream, together with Varsel.'
              propImage={Phone}
            />
            <Testimonials
              largeText="Helping thousands of companies reach their full potential."
              smallText="See what some of them said:"
            />

            <Portifolio 
              largeText='Discover some of our main works.'
              smallText='Be part of this list too, contact Varsel.'
            
            />
            
            <Lab 
              largeText='More than'
              CountBuss='260'
              largeText2='companies have hired Varsel.'
              SmallText='Be part of this list, contact us and make a quote.'
              buttonTxt='Send an email'
            />

            <Footer 
              Duv='Doubts'
              Pag='Payment'
              Acom='Follow-up'
              Sup='Product Support'
              Aten='Service'
              Var='Varsel'
              Crea='Creators'
              Porti='Portifolio'
              Trab='Work with us'
              Dir='© Varsel, 2021. All rights reserved.'
            />
          
        </>
      );
}

export default App;
