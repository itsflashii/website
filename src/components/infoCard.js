import React from 'react';
import { Card } from './styles/infoCard-style.js';
import Icon from '../assets/Icon.svg';

const infoCard = (props) => {
    const { cardLargeText, cardSmallText } = props
    return (
        <Card className="cardDiv">
            <img className="img" src={Icon} alt="Icon" />
            <h2 className="h2">{cardLargeText}</h2>
            <p className="p">{cardSmallText}</p>
        </Card>
    )
}

export default infoCard;