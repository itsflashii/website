import React from 'react';
import { Container, Cards } from './styles/agility-style';
import propImage from '../assets/propImage.png'
import InfoCard from '../components/infoCard';

const Agility = () => {
    return (
        <>
        <Container>
            <img src={propImage} alt="Agilidade / Qualidade." />
            <h1>Agilidade & Qualidade.</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        </Container>
            <Cards>

            <InfoCard
                cardLargeText="Front-End"
                cardSmallText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. " 
            />

            <InfoCard
                cardLargeText="Back-End"
                cardSmallText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. " 
            />
            <InfoCard
                cardLargeText="Back-End"
                cardSmallText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. " 
            />
                        <InfoCard
                cardLargeText="Back-End"
                cardSmallText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. " 
            />

            </Cards>
        </>
    )
}

export default Agility;