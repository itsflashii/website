import React from 'react';
import { Container } from './styles/lab-style';

const Lab = (props) => {
  const { largeText, largeText2, CountBuss, SmallText, buttonTxt } = props
 
  return (
    <Container id='contato'> 
        <h1>{largeText} <span> {CountBuss} </span> {largeText2}</h1>
        <p>{SmallText}</p>
        <button >
          <a href="mailto:contato.varsel@gmail.com">
            {buttonTxt}
          </a>
        </button>
    </Container>
  )
}

export default Lab;