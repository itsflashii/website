import React from 'react';
import { Container } from './styles/lab-style';

const Lab = (props) => {
  const { largeText, largeText2, CountBuss, SmallText } = props
 
  return (
    <Container> 
        <h1>{largeText} <span> {CountBuss} </span> {largeText2}</h1>
        <p>{SmallText}</p>
    </Container>
  )
}

export default Lab;