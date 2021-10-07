import React, { useRef, useEffect } from "react";
import { Container } from './styles/landing-style';
import { isReadyStateMatch } from "react-ready-state-effect";
import { MdArrowDownward } from 'react-icons/md'


const Landing = (props) => {

    const backgroundReference = useRef(null);

    const { bgVideo, largeText, smallText, ArrowSmallText } = props
  
    isReadyStateMatch(
      useEffect(() => {
        backgroundReference.current.muted = true; 
        backgroundReference.current.play()
      }, [])
    );
    
    
    return (
      <Container>
          <h1>{largeText}</h1>
          <span>{smallText}</span>
          <p>{ArrowSmallText}</p>

          <MdArrowDownward 
            className="arrowDown" 
            size={17} 
            color="#FFF" 
          />

          <video  title="BackgroundVideo" webkit-playsinline="true" src={bgVideo} ref={backgroundReference} />
      </Container>
  );
}

export default Landing;