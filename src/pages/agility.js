import React from 'react';
import { Container, Cards } from './styles/agility-style';
import propImage from '../assets/propImage.png'
import InfoCard from '../components/infoCard';

const Agility = (props) => {

    const { agSmallText, agLargeText } = props

    return (
        <>
        <Container>
            <img src={propImage} alt="Agilidade / Qualidade." />
            <h1>{agLargeText}</h1>
            <p>{agSmallText}</p>
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
                cardLargeText="UI/UX"
                cardSmallText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. " 
            />
                        <InfoCard
                cardLargeText="Designers/Editores"
                cardSmallText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. " 
            />

            </Cards>
        </>
    )
}

export default Agility;