import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaRegEnvelope, FaGlobe } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import styles from './about.module.css';

// Function to calculate experience years
function calculateExperience(startYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
}

const SocialLink = ({ Icon, link, label, ...props }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label={label} {...props}>
        <Icon />
    </a>
);

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const AboutComponents = ({ startYear = 2018 }) => {
    const experienceYears = calculateExperience(startYear);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const companyName = "OCBC"; 
    const currentPosition = "Assistant Vice President (AVP)"; 

    return (
        <motion.div 
            className="text-center p-10 max-w-5xl mx-auto"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-5xl py-2 text-amber-300 font-bold md:text-6xl">
                About Me
            </h2>
            <h3 className="text-2xl py-2 text-gray-800 dark:text-gray-200 md:text-3xl font-semibold">
                {currentPosition} @ {companyName}
            </h3>
            
            <div className="text-justify text-lg py-5 leading-relaxed text-gray-700 dark:text-gray-300 space-y-6">
                <p>
                    I am a highly skilled and experienced software development professional with a wealth of expertise in 
                    <strong> High-Performance & Concurrent Systems</strong>, <strong>Microservices</strong>, and <strong>Banking & Enterprise Platforms</strong>. 
                    Currently serving as an <strong>{currentPosition}</strong> at <strong>{companyName}</strong>, I specialize in designing and maintaining 
                    scalable microservices using <strong>Java 21</strong> and <strong>Spring Boot</strong>.
                </p>
                <p>
                    With over <strong>{experienceYears}+ years</strong> of technical leadership, I am recognized for my ability to turn complex 
                    business requirements into impeccable code. My background spans critical sectors including Telecommunications and Banking, 
                    where I've successfully optimized batch processing, architected RESTful APIs, and modernized legacy systems for high-concurrency environments.
                </p>
                <p>
                    I hold a degree in <strong>Computer Science</strong> from the National University of Malaysia (UKM). I am a detail-oriented, 
                    meticulous professional who thrives in collaborative environments and is dedicated to achieving excellence and contributing 
                    to company success through continuous improvement and the adoption of emerging technologies like <strong>Kubernetes</strong> 
                    and <strong>AI-driven solutions</strong>. 🚀
                </p>
                <p>
                    Beyond engineering, I am a <strong>Scrum (PSPO I)</strong> certified professional and an <strong>AI Aware</strong> advocate, 
                    always seeking to bridge the gap between technical excellence and business vision.
                </p>
            </div>

            <div className="flex justify-center gap-10 py-6 text-4xl text-amber-300">
                <SocialLink Icon={FaRegEnvelope} link="mailto:hachirobei93@gmail.com" label="Email" />
                <SocialLink Icon={AiFillLinkedin} link="https://www.linkedin.com/in/muhammad-hafizoddin-roslan-538a67bb/" label="LinkedIn" />
                <SocialLink Icon={AiFillGithub} link="https://github.com/hachirobei" label="GitHub" />
                <SocialLink Icon={FaGlobe} link="https://hafizoddin.netlify.app" label="Portfolio" />
            </div>

            <motion.div 
                className="mt-10 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <a 
                    href="https://www.linkedin.com/in/muhammad-hafizoddin-roslan-538a67bb/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 px-8 rounded-full shadow-lg transition duration-300"
                >
                    Connect for Collaboration
                </a>
            </motion.div>
        </motion.div>
    );
}

export default AboutComponents;
