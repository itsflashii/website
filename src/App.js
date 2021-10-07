 import React from "react";
 import GlobalStyles from './styles/global'
 import Header from './components/header'
 import Landing from './components/landing'
 import backgroundVideo from './components/assets/background.mp4'
 function App() {
      return (
        <>
            <Header />
            <Landing 
            bgVideo={backgroundVideo}
            largeText='Versatilidade na web, mobile & desktop.'
            smallText='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an u.' 
            ArrowSmallText='Descubra mais'
            />
            <GlobalStyles />
        </>
      );
}

export default App;
