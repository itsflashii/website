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
        txt1='Hogar'
        txt2='Varsel'
        txt3='Portafolio'
        txt4='Contacto'
        
      />
            <Landing 
              bgVideo={backgroundVideo}
              largeText='Versatilidad en la web, mobile & desktop'
              smallText="Aquí tu imaginación se hace realidad. Proyectos, los sueños son los que impulsan los proyectos de Varsels. ven a crecer y convertirte en el mejor de tu zona."
              ArrowSmallText='Saber más'
            />
            <About
              
              largeText='¿Por qué contratar a Varsel?'
              smallText="La pregunta más correcta sería: ¿Por qué no contratar a Varsel? Contamos con un equipo calificado y flexible para todo tipo de proyectos y proyectos, confiando en nuestra versatilidad y calidad. Todos nuestros proyectos y automatización se llevan a cabo utilizando las herramientas más actualizadas del mercado Mejorando y optimizando aún más tu proyecto ¿Aún no estás satisfecho? Hay más, todo el mundo tiene un sello de calidad y seguridad de varios profesionales de la zona. ¿Que estas esperando? Ven a formar parte de nuestro mundo."
              propImage={MobileLogin}
              text1='Trabajo en equipo.'
              text2='Proyectos de gran envergadura.'
              msg1='La reunión de talentos especializados en su área, con diferentes características, hace que el conjunto sea más completo y más capaz de alcanzar la satisfacción de nuestros clientes.'
              msg2='¿Ya tienes un proyecto de big data y quieres recrearlo? sin ningún problema, varsel cuenta con el apoyo total de proyectos a gran escala. podemos tomar el paso'
            />
            <Agility 
              largeText='Agilidad y Calidad.'
              smallText="La productividad es la base de un buen proyecto, influenciada principalmente por un buen trabajo. Aquí no puede ser diferente, no es así. Aportamos la tranquilidad de un proyecto refinado y ágil, enmarcado en las ideas de nuestros clientes contratantes."
              propImage={AgilityLarge}
              front='Trabajando con las mejores tecnologías del mercado, contamos con un equipo dedicado únicamente al front-end de su sitio web.'
              back='¿Qué tal la integración de otra plataforma en su aplicación? Tú eliges, nosotros lo hacemos.'
              uix='Un diseño único para tu web, enséñanos tu idea. creamos lo que piensas.'
              edit='Expande tu idea, ¿qué tal un tráiler para tu proyecto?'
            />
            <Design 
              largeText='Diseña según tu gusto y marca.'
              smallText='“Nunca tienes una segunda oportunidad para causar una buena primera impresión”. Brindar experiencias increíbles son sentimientos únicos en la vida de un buen desarrollador, la atención a cada detalle es la magia que hay detrás. Ven y dedícate a tu sueño, junto a Varsel.'
              propImage={Phone}
            />
            <Testimonials
              largeText="Ayudando a miles de empresas a alcanzar su máximo potencial."
              smallText="Mira lo que algunos de ellos dijeron:"
            />

            <Portifolio 
              largeText='Descubre algunas de nuestras principales obras.'
              smallText='Mira lo que algunas de ellas dijeron:'
              link2='https://jelly-raisin-7a6.notion.site/SEV7N-CLIENT-bcab7d87bb7046e99902137583a67256'
              link1='https://jelly-raisin-7a6.notion.site/Go-Bank-58aef4059f944c1094a770951ed733ec'
              link3='https://jelly-raisin-7a6.notion.site/Sunrise-Roleplay-70d245f94fb24d28b15fcf004c6b6382'
              link4='https://jelly-raisin-7a6.notion.site/Ops-a6afc3ae82b94b1b85eab194158bf071'
              link5='https://jelly-raisin-7a6.notion.site/Ops-a6afc3ae82b94b1b85eab194158bf071'
              link6='https://jelly-raisin-7a6.notion.site/Ops-a6afc3ae82b94b1b85eab194158bf071'
            />
            
            <Lab 
              largeText='Mas que'
              CountBuss='262'
              largeText2='las empresas han contratado a Varsel.'
              SmallText='Sé parte de esta lista, contáctanos y haz un presupuesto.'
              buttonTxt='Enviar un email'
            />

            <Footer 
              Duv='Dudas'
              Pag='Pago'
              Acom='Hacer un seguimiento'
              Sup='Soporte de producto'
              Aten='Servicio'
              Var='Varsel'
              Crea='Creadoras'
              Porti='Portifolio'
              Trab='Trabaja con nosotras'
              Dir='© Varsel, 2022. All rights reserved.'
            />
          
        </>
      );
}

export default App;
