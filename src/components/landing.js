import React from 'react';
import { Container } from './styles/landing-style';
import videoBackground from './assets/background.mp4'

function landing() {
  return (
      <Container>
        <video autoPlay  >
                <source src={videoBackground} type="video/mp4" />
        </video>
    </Container>
  );
}

export default landing;