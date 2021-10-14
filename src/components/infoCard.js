import React from 'react';
import { Card } from './styles/infoCard-style.js';
import Icon from '../assets/Icon.svg';

const infoCard = (props) => {
    const { cardLargeText, cardSmallText } = props
    return (
        <Card>
            <img src={Icon} alt="Icon" />
            <h2>{cardLargeText}</h2>
            <p>{cardSmallText}</p>
        </Card>
    )
}

export default infoCard;