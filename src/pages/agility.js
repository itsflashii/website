import React from 'react';
import { Container, Cards } from './styles/agility-style';
import InfoCard from '../components/infoCard';

const Agility = (props) => {
    const { largeText, smallText, propImage } = props

    return (
        <>
        <Container id='agility'>
            <img src={propImage} alt="Agilidade / Qualidade." />
            <h1>{largeText}</h1>
            <p>{smallText}</p>
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