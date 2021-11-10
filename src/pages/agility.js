import React from 'react';
import { Container, Cards } from './styles/agility-style';
import InfoCard from '../components/infoCard';

const Agility = (props) => {
    const { largeText, smallText, propImage, front, back, uix, edit } = props

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
                cardSmallText={front}
            />

            <InfoCard
                cardLargeText="Back-End"
                cardSmallText={back}
            />
            <InfoCard
                cardLargeText="Ui/Ux"
                cardSmallText={uix}
            />
            <InfoCard
                cardLargeText="Designers/Editores"
                cardSmallText={edit}
            />
        </Cards>
        </>
    )
}

export default Agility;