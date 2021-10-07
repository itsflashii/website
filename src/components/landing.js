import React, { useRef, useEffect } from "react";
import { Container } from './styles/landing-style';
import { isReadyStateMatch } from "react-ready-state-effect";



const Landing = (props) => {

    const VideoReference = useRef(null);

    const { bgVideo, largeText, smallText } = props
  
    isReadyStateMatch(
      useEffect(() => {
        VideoReference.current.muted = true; 
        VideoReference.current.play()
      }, [])
    );
    
    
    return (
      <Container>
          <h1>{largeText}</h1>
          <span>{smallText}</span>
          <video  title="BackgroundVideo" webkit-playsinline="true" src={bgVideo} ref={VideoReference} />
      </Container>
  );
}

export default Landing;