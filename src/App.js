import './App.css';
import React, { useRef } from 'react';
import { FooterComponents, NavbarComponents } from './Common';
import { AboutComponents, HomeComponents, ExperienceComponents, EducationComponents, SkillComponents, ProjectComponents } from './Module';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);

  return (
    <div className="bg-background min-h-screen text-white">
      <NavbarComponents 
        homeRef={homeRef} 
        aboutRef={aboutRef} 
        experienceRef={experienceRef} 
        educationRef={educationRef} 
        skillRef={skillRef} 
      />
      
      <main>
        <div ref={homeRef} id="home">
          <HomeComponents />
        </div>
        
        <div ref={aboutRef} id="about">
          <AboutComponents />
        </div>
        
        <div ref={skillRef} id="skill">
          <SkillComponents />
        </div>
        
        <div ref={experienceRef} id="experience">
          <ExperienceComponents />
        </div>
        
        <div ref={educationRef} id="education">
          <EducationComponents />
        </div>

        <div ref={projectRef} id="project">
           <ProjectComponents />
        </div>
      </main>

      <FooterComponents />
    </div>
  );
}

export default App;
