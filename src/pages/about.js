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
            <img src={propImage} alt="Mobile App" />
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