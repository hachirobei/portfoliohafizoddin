import React from "react";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import styles from './about.module.css';

// Function to calculate age
function calculateAge(birthdate) {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        return age - 1;
    }
    return age;
}

// Function to calculate age
function calculateExperience(startYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
}


const SocialLink = ({ Icon, link, ...props }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} {...props}>
        <Icon />
    </a>
);

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

const AboutComponents = ({ birthdate = "1993-07-23" , startYear = 2015}) => {
    const age = calculateAge(birthdate);
    const experienceYears = calculateExperience(startYear);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });
    const currentYear = new Date().getFullYear();
    const previousCompanyName = "Time DotCom Sdn Bhd"; 
    const previousPosition = "Software Developer"; 
    const previousIndustry = "Telecommunications"; 
    const companyName = "Nippon Paint (M) Sdn Bhd"; 
    const currentPosition = "Senior FullStack Developer"; 
    const currentIndustry = "Manufacturing";

    return (
        <motion.div 
                className="text-center p-2 py-2 px-10"
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
            >
            <h2 className="text-5xl py-2 text-amber-300 font-medium dark:text-amber-400 md:text-6xl">
                About Me
            </h2>
            <h3 className="text-2xl py-2 dark:text-black md:text-3xl">
                {currentPosition}
            </h3>
            <p className="text-justify text-md py-2 leading-10 text-black dark:text-neutral-950 max-xl mx-auto md:text-xl">
                Hey there! I'm Muhammad Hafizoddin, but you can call me Hafiz. Currently, I'm weaving digital magic as a {currentPosition} at {companyName}. With over {experienceYears} years of experience in the tech world, I've been the go-to person for innovative solutions in the {currentIndustry} sector. But hey, I'm not just about the 1s and 0s; I'm all about crafting tech masterpieces that align with a business's grand vision. 🚀<br /><br />

                My tech journey kicked off at {previousCompanyName}, diving deep into the Telecommunications waters. As a {previousPosition} there, I got my hands dirty (digitally speaking) and sharpened my coding arsenal. That experience provided me with a unique perspective, which I proudly apply in my current role. On the academic front, I hold a stellar Degree in Computer Science with Honours from the National University of Malaysia and a Diploma in Information Technology (Programming) from Politeknik Tuanku Syed Sirajuddin 🎓<br /><br />

                In this ever-evolving digital age, I'm the person who's always two steps ahead, continuously updating my toolkit and taking on fresh challenges. Being a Senior Full-stack Developer isn't just a title; it's my commitment to delivering pixel-perfect code and solutions that go beyond the ordinary.<br /><br />

                Here's the deal: I don't just code; I craft. I see the grand canvas, not just the brush strokes. From managing multiple projects, ensuring pinpoint accuracy, to collaborating with diverse teams, I'm all in. Proficient in a multitude of programming languages and possessing a keen sense of software design and integration, I'm a unique blend in the tech world.<br /><br />

                If you're on the lookout for a tech expert who can propel your projects to new heights, look no further! Let's have a conversation, brainstorm ideas, and explore how I can add a touch of creativity to Nippon Paint (M) Sdn Bhd's exciting journey ahead. And hey, if you're in need of a Full-stack Developer who excels in both front-end and back-end development, I'm your go-to person! 🎨<br /><br />
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-amber-300 dark:text-amber-300">
                <SocialLink Icon={FaRegEnvelope} link="mailto:hachirobei93@gmail.com" />
                <SocialLink Icon={AiFillTwitterCircle} link="https://twitter.com/yourtwitter" />
                <SocialLink Icon={AiFillLinkedin} link="https://www.linkedin.com/in/muhammad-hafizoddin-roslan-538a67bb/" />
                <SocialLink Icon={AiFillYoutube} link="https://youtube.com/youryoutube" />
            </div>
        </motion.div>
    );
}

export default AboutComponents;