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
  const projectRef = useRef(null); // Assuming ProjectComponents is implemented or will be removed

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
        <div ref={homeRef}>
          <HomeComponents />
        </div>
        
        <div ref={aboutRef}>
          <AboutComponents />
        </div>
        
        <div ref={skillRef}>
          <SkillComponents />
        </div>
        
        <div ref={experienceRef}>
          <ExperienceComponents />
        </div>
        
        <div ref={educationRef}>
          <EducationComponents />
        </div>

        {/* Uncomment if ProjectComponents is ready */}
        <div ref={projectRef}>
           <ProjectComponents />
        </div>
      </main>

      <FooterComponents />
    </div>
  );
}

export default App;
