import React, { useState } from "react";
import { LogoComponents } from "../../assets/icons"; 

const NavbarComponents = ({homeRef,aboutRef,experienceRef,educationRef, skillRef}) => {

    const [activeSection,setActiveSection] = useState('home');
    
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleNavbar = () => {
        setIsCollapsed(prevState => !prevState);
    }

    const scrollToHome = () => {
        setActiveSection('home');

        homeRef.current.scrollIntoView({
            behavior: 'smooth'
        })
    };


    const scrollToAbout = () => {
        setActiveSection('about');
        
        aboutRef.current.scrollIntoView({
            behavior: 'smooth'
        });
    };

    const scrollToExperience = () => {
        setActiveSection('experience');
        
        experienceRef.current.scrollIntoView({
            behavior: 'smooth'
        });
    };


    const scrollToEducation = () => {
        setActiveSection('education');
        
        educationRef.current.scrollIntoView({
            behavior: 'smooth'
        });
    };

    const scrollToSkill = () => {
        setActiveSection('skill');
        
        skillRef.current.scrollIntoView({
            behavior: 'smooth'
        });
    };




    return (
        <nav className="bg-white border-gray-200 dark:bg-neutral-950">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://www.hafizoddin.com/" className="flex items-center">
                    <LogoComponents fill="#FCD34D"/>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap pl-1.5 md-pd dark:text-white">Hafizoddin</span>
                </a>
                <div className="flex md:order-2">
                    <button onClick={toggleNavbar} data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                
                <div className={`${isCollapsed ? 'hidden' : ''} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-neutral-950 md:dark:bg-neutral-950">
                        <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); scrollToHome(); }} className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-amber-300 md:bg-transparent md:p-0 md:hover:dark:text-amber-300 md:dark:hover:dark:text-amber-300 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent ${activeSection === 'home' ? ' md:dark:text-amber-300 ' : 'text-gray-900 hover:bg-neutral-950'}`}>Home</a>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); scrollToAbout(); }} className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-amber-300 md:bg-transparent md:p-0 md:hover:dark:text-amber-300 md:dark:hover:dark:text-amber-300 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent ${activeSection === 'about' ? 'md:dark:text-amber-300' : 'text-gray-900 hover:bg-neutral-950'}`}>About</a>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSkill(); }} className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-amber-300 md:bg-transparent md:p-0 md:hover:dark:text-amber-300 md:dark:hover:dark:text-amber-300 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent ${activeSection === 'skill' ? 'md:dark:text-amber-300' : 'text-gray-900 hover:bg-neutral-950'}`}>Skill</a>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); scrollToExperience(); }} className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-amber-300 md:bg-transparent md:p-0 md:hover:dark:text-amber-300 md:dark:hover:dark:text-amber-300 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent ${activeSection === 'experience' ? 'md:dark:text-amber-300' : 'text-gray-900 hover:bg-neutral-950'}`}>Experience</a>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); scrollToEducation(); }} className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-amber-300 md:bg-transparent md:p-0 md:hover:dark:text-amber-300 md:dark:hover:dark:text-amber-300 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent ${activeSection === 'education' ? 'md:dark:text-amber-300' : 'text-gray-900 hover:bg-neutral-950'}`}>Education</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponents;