 import React from "react";
 import GlobalStyles from './styles/global'
 import Landing from './pages/landing'
 import backgroundVideo from './assets/background.mp4'
 import About from './pages/about'

 function App() {
      return (
        <>
           
            <Landing 
            bgVideo={backgroundVideo}
            largeText='Versatilidade na web, mobile & desktop.'
            smallText='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an u.' 
            ArrowSmallText='Descubra mais'
            />
            <About />
            <GlobalStyles />
        </>
      );
}

export default App;
