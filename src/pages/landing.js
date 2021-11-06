import React from "react";
import { Container } from './styles/landing-style';
import bgImage from '../assets/bg1.png'
import { Link } from "react-scroll";

//import { isReadyStateMatch } from "react-ready-state-effect";
import { MdArrowDownward } from 'react-icons/md'


const Landing = (props) => {

    const { bgVideo, largeText, smallText, ArrowSmallText } = props
    
    return (
      <>
      <Container>
        
          <h1>{largeText}</h1>
          
          <span>{smallText}</span>
    

          <ul>
            <li>
            <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-0.1}
                    duration={1500}
                >
                <p>{ArrowSmallText}</p>
          </Link>
            </li>
          </ul>

          <MdArrowDownward className="arrowDown" size={19} color="#FFF" />
          <div style={{backgroundImage: `url(${bgImage})`}} className="bgBlock1" />
          <video title="BackgroundVideo" muted={true} autoPlay src={bgVideo} />
      </Container>
      </>
  );
}

export default Landing;