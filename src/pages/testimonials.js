import React from 'react';
import { Container, ContainerTestimonail } from './styles/testimonials-style';
import Testimonial from '../components/testimonial';


const Testimonials = () => {
    return (
        <>
            <Container>
                <h1>Ajudando milhares de empresas a antingirem o potencial máximo.</h1>
                <p>Veja o que algumas delas disseram:</p>
            </Container>
            <ContainerTestimonail>
                    <Testimonial 
                    message="“Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.”"
                    person="Vítor Ribeiro"
                    job="CTO | Varsel"
                    rating="5"
                    avatar="http://afernandes.adv.br/wp-content/uploads/Team-Member-3.jpg"
                    />
                    
                    <Testimonial 
                    message="“Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.”"
                    person="Vítor Ribeiro"
                    job="CTO | Varsel"
                    rating="5"
                    avatar="http://afernandes.adv.br/wp-content/uploads/Team-Member-3.jpg"
                    />
                    
                    <Testimonial 
                    message="“Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.”"
                    person="Vítor Ribeiro"
                    job="CTO | Varsel"
                    rating="5"
                    avatar="http://afernandes.adv.br/wp-content/uploads/Team-Member-3.jpg"
                    />
                    
                </ContainerTestimonail>
        </>
    );
}


export default Testimonials;