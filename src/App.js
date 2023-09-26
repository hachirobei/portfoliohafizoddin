import './App.css';
import React, {useRef} from 'react';
import { FooterComponents,NavbarComponents } from './Common';
import { AboutComponents, HomeComponents, ExperienceComponents, EducationComponents } from './Module';


function App() {
  const homeRef =useRef(null);
  const aboutRef =useRef(null);
  const experienceRef =useRef(null);
  const educationRef =useRef(null);

  return (
        <div>
          <NavbarComponents homeRef={homeRef} aboutRef={aboutRef} experienceRef={experienceRef} educationRef={educationRef} />
          <div ref={homeRef}>
            <HomeComponents />
          </div>
          <div ref={aboutRef}>
            <AboutComponents />
          </div>
          <div ref={experienceRef}>
            <ExperienceComponents />
          </div>
          <div ref={educationRef}>
            <EducationComponents />
          </div>
          <FooterComponents/>
        </div>


  );
}
export default App;