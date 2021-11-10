import * as React from 'react';
import { Container, Cards } from './styles/about-style';
import InfoCard from '../components/infoCard';

const About = (props) => {
    const { smallText, largeText, propImage, text1, text2, msg1, msg2 } = props
    return (
        <>
        <Container id='about'>
            <h1>{largeText}</h1>
            <p>{smallText}</p>
            <img src={propImage} alt="Mobile App" />
        </Container>
        <Cards>
            <InfoCard
                cardLargeText={text1}
                cardSmallText={msg1}
            />
            <InfoCard
                cardLargeText={text2}
                cardSmallText={msg2} 
            />
        </Cards>
        </>
    )
}
export default About;