import './App.css';
import React, {useRef} from 'react';
import { FooterComponents,NavbarComponents,PartitionComponents } from './Common';
import { AboutComponents, HomeComponents, ExperienceComponents, EducationComponents , SkillComponents} from './Module';


function App() {
  const homeRef =useRef(null);
  const aboutRef =useRef(null);
  const experienceRef =useRef(null);
  const educationRef =useRef(null);
  const skillRef =useRef(null);

  return (
        <div>
          <NavbarComponents homeRef={homeRef} aboutRef={aboutRef} experienceRef={experienceRef} educationRef={educationRef} skillRef={skillRef} />
          <div ref={homeRef}>
            <HomeComponents />
          </div>
          <PartitionComponents/>
          <div ref={aboutRef}>
            <AboutComponents />
          </div>
          <PartitionComponents/>
          <div ref={skillRef}>
            <SkillComponents />
          </div>
          <PartitionComponents/>
          <div ref={experienceRef}>
            <ExperienceComponents />
          </div>
          <PartitionComponents/>
          <div ref={educationRef}>
            <EducationComponents />
          </div>
          <div className="pt-10">
          <FooterComponents/>
          </div>
        </div>


  );
}
export default App;