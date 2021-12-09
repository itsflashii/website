import React from 'react';
import { Container, ContainerTestimonail } from './styles/testimonials-style';
import Testimonial from '../components/testimonial';


const Testimonials = (props) => {
    const { largeText, smallText } = props

    return (
        <>
            <Container>
                <h1>{largeText}</h1>
                <p>{smallText}</p>
            </Container>
            <ContainerTestimonail>
                    <Testimonial 
                    message="“Estava precisando de um e-commerce para meu atelier, e consegui algo incrivel com o pessoal da Varsel. Estão de parabéns 👏🏻👏🏻”"
                    person="Lurdes Canabarro"
                    job="Atelier Pano Bello"
                    rating="5"
                    avatar='https://ui-avatars.com/api/?background=D20528&color=fff&name=Lurdes+Canabarro'
                    className="test1"
                    />
                   
                    
                    <Testimonial 
                    message='"Precisei de uma integração nova em minha plataforma, obrigado Varsel pelo atendimento & suporte."'
                    person="Pedro Campos"
                    job="Front-end | Overtime"
                    rating="5"
                    avatar='https://ui-avatars.com/api/?background=FF8A00&color=fff&name=Pedro+Campos'
                    />
                    
                    <Testimonial 
                    message="“Estava precisando de algo simples e me surpreendi com a agilidade na produção! Atenciosos & Pacientes no desenvolvimento. Obrigado a Varsel pelo ótimo trabalho.”"
                    person="Samanta Bueno"
                    job="Central  Calçados"
                    rating="5"
                    avatar="https://ui-avatars.com/api/?name=Samanta+Bueno"
                    />
        
                    <Testimonial 
                    message="“Muito prestativo, profissional, e atencioso. Recomendo!”"
                    person="Davi S."
                    job="Fatos da Bolsa"
                    rating="5"
                    avatar='https://ui-avatars.com/api/?background=0570D2&color=fff&name=Davi+Souza'
                    />
                </ContainerTestimonail>
        </>
    );
}


export default Testimonials;
