import React from 'react';
import { Container, Products } from './styles/portifolio-style';
import Computer from '../assets/computer.webp';
import Product1 from '../assets/products/1.webp';
import Product2 from '../assets/products/2.webp';
import Product3 from '../assets/products/3.webp';
import Product4 from '../assets/products/4.webp';
import Product5 from '../assets/products/5.webp';
import Product6 from '../assets/products/6.webp';

const Porti = (props) => {
  const {largeText, smallText} = props

  return (
    <>
    <Container id='portifolio'>
      <h1>{largeText}</h1>
      <p>{smallText}</p>
      <img src={Computer} alt="Computador" align="right" />
    </Container>
      <Products>
          <img src={Product1} alt="Product" />
          <img src={Product2} alt="Product" />
          <img src={Product3} alt="Product" />
          <img src={Product4} alt="Product" />
          <img src={Product5} alt="Product" />
          <img src={Product6} alt="Product" />
      </Products>
    </>
  )
}
export default Porti;