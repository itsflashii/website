import React from 'react';
import { Container, Cards } from './styles/about-style';
import InfoCard from '../components/infoCard';

const About = (props) => {
    const { smallText, largeText, propImage } = props
    

    return (
        <>
        <Container>
            <h1>{largeText}</h1>
            <p>{smallText}</p>
<<<<<<< HEAD
            <img className="responsiNo" src={MobileLogin} alt="Mobile App" />
=======
            <img src={propImage} alt="Mobile App" />
>>>>>>> bd2deb00eb45a26e66780659d209e67f9828cf33
        </Container>
        <Cards>
            <InfoCard
                cardLargeText="Texto 1"
                cardSmallText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." 
            />
            <InfoCard
                cardLargeText="Texto 2"
                cardSmallText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." 
            />
        </Cards>
        </>
    )
}
export default About;