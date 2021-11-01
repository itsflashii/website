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
                    message="“Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.”"
                    person="Vítor Ribeiro"
                    job="CTO | Varsel"
                    rating="5"
                    avatar="http://afernandes.adv.br/wp-content/uploads/Team-Member-3.jpg"
                    className="test1"
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