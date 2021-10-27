import React from "react";
import { Container } from './styles/landing-style';
import bgImage from '../assets/bg1.png'

//import { isReadyStateMatch } from "react-ready-state-effect";
import { MdArrowDownward } from 'react-icons/md'


const Landing = (props) => {

    const { bgVideo, largeText, smallText, ArrowSmallText } = props
    
    return (
      <>
     
      <Container>
          <h1>{largeText}</h1>
          
          <span>{smallText}</span>
          <p>{ArrowSmallText}</p>

          <MdArrowDownward className="arrowDown" size={19} color="#FFF" />
          <div style={{backgroundImage: `url(${bgImage})`}} className="bgBlock1" />
          <video title="BackgroundVideo" muted="true" autoPlay src={bgVideo} />
      </Container>
      </>
  );
}

export default Landing;