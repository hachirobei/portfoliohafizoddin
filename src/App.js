import './App.css';
import React, {useRef} from 'react';
import { FooterComponents,NavbarComponents } from './Common';
import { AboutComponents, HomeComponents } from './Module';


function App() {
  const homeRef =useRef(null);
  const aboutRef =useRef(null);
  return (
        <div>
          <NavbarComponents homeRef={homeRef} aboutRef={aboutRef}/>
          <div ref={homeRef}>
            <HomeComponents />
          </div>
          <div ref={aboutRef}>
            <AboutComponents />
          </div>
          <FooterComponents/>
        </div>


  );
}
export default App;