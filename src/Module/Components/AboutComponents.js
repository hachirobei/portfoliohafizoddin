import React from "react";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa";

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

const AboutComponents = () => {
    const birthdate = "1993-07-23"; 
    const age = calculateAge(birthdate);
    const currentYear = new Date().getFullYear();
    const previousCompanyName = "Time dotcom Sdn Bhd"; 
    const previousPosition = "Software Developer"; 
    const previousIndustry = "Telecommunications"; 
    const companyName = "Nippon Paint (M) Sdn Bhd"; 
    const currentPosition = "Senior FullStack Developer"; 
    const currentIndustry = "Manufacturing";

    return (
        <div className="text-center p-2 py-2">
            <h2 className="text-5xl py-2 text-amber-300 font-medium dark:text-amber-400 md:text-6xl">
                About Me
            </h2>
            <h3 className="text-2xl py-2 dark:text-black md:text-3xl">
                {currentPosition}
            </h3>
            <p className="text-justify text-md py-2 leading-10 text-black dark:text-neutral-950 max-xl mx-auto md:text-xl">
                Hi, I'm Muhammad Hafizoddin, a {currentPosition} with a passion for crafting innovative solutions in the {currentIndustry} industry at {companyName}. With over {age} years of experience, I bring a wealth of knowledge and expertise to the table.<br /><br />

                My journey in software development began as a {previousPosition} in the {previousIndustry} industry at {previousCompanyName}. In 2018, I graduated with honors in Computer Science from UKM, following my Diploma in Information Technology (Programming) at PTSS in 2014.<br /><br />

                I thrive in fast-paced environments, where I leverage my detail-oriented, organized, and meticulous nature to meet tight deadlines and drive success. Today, as a Senior FullStack Developer, I have a proven track record of delivering impeccable code, thanks to my complex problem-solving skills, analytical mindset, and a relentless drive to achieve demanding development objectives.<br /><br />

                As a dedicated and dependable professional, I excel at managing multiple priorities with a positive attitude. I'm always eager to collaborate and take on new challenges. My proficiency spans a variety of in-demand programming languages, coupled with a strong foundation in software design, development, and integration. I have a proven ability to handle multiple projects simultaneously while maintaining a high degree of accuracy.<br /><br />

                If your organization is seeking a highly skilled software development professional committed to achieving excellence and contributing to {companyName}'s continued success, I'm the candidate you've been looking for.<br /><br />

                Let's connect and explore how I can help elevate your projects.<br /><br />
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <a href="mailto:hachirobei93@gmail.com"><FaRegEnvelope /></a>
                <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle /></a>
                <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
                <a href="https://youtube.com/youryoutube" target="_blank" rel="noopener noreferrer"><AiFillYoutube /></a>
            </div>
        </div>
    );
}

export default AboutComponents;