import React, { useRef, useEffect } from "react";
import { Container } from './styles/landing-style';
import { isReadyStateMatch } from "react-ready-state-effect";



const Landing = (props) => {

    const VideoReference = useRef(null);

    const { videoSrc } = props

    const HandleVideoByLoad = () => {
      useEffect(() => {
        VideoReference.current.muted = true; 
        VideoReference.current.play()


      }, [])
    }
   

    isReadyStateMatch(HandleVideoByLoad());
    return (
      <Container>
        <video  title="Advertisement" webkit-playsinline="true" src={videoSrc} ref={VideoReference} />
    </Container>

  );
}

export default Landing;