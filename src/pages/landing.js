import React from "react";
import { Container } from './styles/landing-style';
//import { isReadyStateMatch } from "react-ready-state-effect";
import { MdArrowDownward } from 'react-icons/md'
import Menu from '../components/menu'

const Landing = (props) => {

    const { bgVideo, largeText, smallText, ArrowSmallText } = props
    
    return (
      <>
      <Menu />
      <Container>
          <h1>{largeText}</h1>
          
          <span>{smallText}</span>
          <p>{ArrowSmallText}</p>

          <MdArrowDownward className="arrowDown" size={19} color="#FFF" />
          <video title="BackgroundVideo" muted="true" autoPlay src={bgVideo} />
      </Container>
      </>
  );
}

export default Landing;