import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

  position: relative;
  width: 100%!important;
  height: 700px;
  background-color: #060607;
  border-top: 1px solid rgba(115, 115, 128, 0.29);
  border-bottom: 1px solid rgba(115, 115, 128, 0.29);

  h1 {
    width: 35rem;
    position: relative;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 35px;

    color: white;

    top: 150px;
    left: 130px;
  }

  p {
    position: relative;
    width: 30rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #737380;

    top: 170px;
    left: 130px;
  }

  img {
    position: absolute;
    width: 550px;
    height: auto;
    // right: 0;

    right: 110px;
    top: 70px;
    z-index: 1;
  }

  @media only screen and (min-width: 1249px) and (max-width: 1400px) {
    h1 {
      width: 90%;
    }


    img {
      top: 200px;

      width: 350px;
    }

  }


  @media only screen and (min-width: 0px) and (max-width: 900px) {
    h1 {
      width: 90%!important;
      font-size: 27px;
      left: 15px;
    }

    p {
      font-size: 13px;
      left: 15px;
    }

    margin-top: -150px;

}

  @media only screen and (min-width: 1160px) and (max-width: 1249px) {
    h1 {
      width: 90%;
    }

    img {
      top: 195px;
      margin-right: -65px;

      width: 340px;
    }
    
  }

  @media only screen and (min-width: 1110px) and (max-width: 1160px) {
    h1 {
      width: 90%;
    }

    img {
      top: 195px;
      margin-right: -80px;

      width: 320px;
    }
    
  }

  @media only screen and (min-width: 50px) and (max-width: 1210px) {
    
    height: 690px;
    h1 {
      width: 60%;
      left: 135px;
    }

    p {
      left: 135px;
    }

    img {
      display: none;
    }
    
  }

  @media only screen and (min-width: 200px) and (max-width: 892px) {
    height: 850px;
    top: -120px!important;
    h1 {  
      width: 70%;
      top: 100px;
      left: 135px;
    }

    p {
      width: 70%;
      top: 120px;
      left: 135px;
    }

  }

  @media only screen and (min-width: 810px) and (max-width: 800px) {
    height: 860px;

    h1 {
      width: 70%;
      left: 92px;
    }

    p {
      left: 93px;
    }
  }

  @media only screen and (min-width: 690px) and (max-width: 798px) {
    height: 800px;
    h1 {
      width: 70%;
      left: 115px;
    }

    p {
      width: 570px;
      left: 80px;
      left: 115px;

    }
  }

  @media only screen and (min-width: 569px) and (max-width: 740px) {
    height: 800px;

    h1 {
      font-size: 27px;
      width: 70%!important;
      left: 85px;
    }

    p {
      width: 73%;
      font-size: 13px;

      left: 85px;
    }

  }

  @media only screen and (min-width: 590px) and (max-width: 569px) {
    height: 800px;
    h1 {
      font-size: 27px;
      width: 70%!important;
      left: 100px;
    }

    p {
      width: 90%;
      font-size: 13px;

      left: 65px;
    }
  }

  @media only screen and (min-width: 490px) and (max-width: 590px) {
    height: 800px;
    h1 {
      font-size: 27px;
      width: 70%!important;

      left: 50px;
    }

    p {
      width: 70%!important;
      font-size: 13px;
      left: 50px;
    }
  }



  @media only screen and (min-width: 0px) and (max-width: 490px) {
    height: 900px;
    top: -120px!important;
    h1 {
      font-size: 27px;
      width: 50%!important;
      left: 34px;
    }

    p {
      width: 90%!important;
      font-size: 13px;
      left: 34px;
    }
}

  @media only screen and (min-width: 475px) and (max-width: 490px) {
   height: 800px;
    
    h1 {
      font-size: 27px;
      width: 70%!important;

      left: 30px;
    }

    p {
      width: 450px;
      font-size: 13px;

      left: 30px;
    }
  }
`;

export const Cards = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%!important;

    
    top: -210px;
    left: 45px;

    @media only screen and (min-width: 1083px) and (max-width: 1100px) {
      top: -250px!important;
      left: 130px!important;
    }

    @media only screen and (min-width: 200px) and (max-width: 1200px) {
      top: -250px!important;
      left: 130px!important;
    }

    @media only screen and (min-width: 200px) and (max-width: 192px) {
      top: -250px!important;
      left: 150px!important;
      
      p { 
        width: 40%!important;
      }
    }

    @media only screen and (min-width: 593px) and (max-width: 900px) {
      top: -560px!important;
      left: 45px!important;
    }



    /* @media only screen and (min-width: 700px) and (max-width: 800px) {
      left: 24px!important;
    } */

    
    @media only screen and (min-width: 985px) and (max-width: 1160px) {
      left: 145px!important;
    }

    @media only screen and (min-width: 850px) and (max-width: 900px) {
      left: 45px!important;

      top: -480px!important;
    }


    @media only screen and (min-width: 800px) and (max-width: 860px) {
      left: 45px!important;
      
      top: -250px!important;
    }

    @media only screen and (min-width: 300px) and (max-width: 800px) {
      left: 0px!important;
    }

    @media only screen and (min-width: 690px) and (max-width: 760px) {
      top: -580px!important;
      left: 25px!important;
    }


    @media only screen and (min-width: 600px) and (max-width: 700px) {
      top: -400px!important;
      left: -5px!important;
    
    }

    @media only screen and (min-width: 340px) and (max-width: 590px) {
      top: -480px!important;
      left: -40px!important;
      width: 90%!important;


      p { 
        width: 90%!important;
      }
    }
    
    @media only screen and (min-width: 790px) and (max-width: 900px) {
      top: -560px!important;
    }

    @media only screen and (min-width: 340px) and (max-width: 475px) {
      top: -480px!important;
      width: 90%!important;


      p { 
        width: 90%!important;
      }

    }

    @media only screen and (min-width: 200px) and (max-width: 395px) {
      left: -75px!important;
      top: -500px!important;
      width: 90%!important;


      p { 
        width: 90%!important;
      }
      
    }

    @media only screen and (min-width: 200px) and (max-width: 430px) {
      left: -50px!important;
      

      width: 90%!important;


      p { 
        width: 90%!important;
      }

    }

    @media only screen and (min-width: 300px) and (max-width: 700px) {
      top: -550px!important;
      width: 90%!important;


      p { 
        width: 90%!important;
      }
      
    }

    @media only screen and (min-width: 460px) and (max-width: 569px) {
      top: -245px;
      left: -10px;


      width: 90%!important;


      p { 
        width: 90%!important;
      }
    }



`; 
