 import React from "react";
 import GlobalStyles from './styles/global'
 import Header from './components/header'
 import Landing from './components/landing'
 import backgroundVideo from './components/assets/background.mp4'
 function App() {
      return (
        <>
            <Header />
            <Landing videoSrc={backgroundVideo} />
            <GlobalStyles />
        </>
      );
}

export default App;
