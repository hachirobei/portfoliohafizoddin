import React, { useState } from 'react';
import { experiencesData } from "./Data/ExperienceData";
import styles from './experience.module.css';
import { FaCalendar, FaMapMarkerAlt, FaBriefcase, FaAngleDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function calculateDuration(startDate, endDate) {
    const start = new Date(startDate);
    const end = endDate === "Present" ? new Date() : new Date(endDate);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (start.getDate() === 1 && days > 0) {
        months += 1;
        days = 0;
    } else if (days < 0) {
        months -= 1;
        days += new Date(start.getFullYear(), start.getMonth() + 1, 0).getDate(); // Adding number of days in previous month
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    let result = "";
    if (years > 0) result += `${years} yr${years > 1 ? "s" : ""} `;
    if (months > 0) result += `${months} mo${months > 1 ? "s" : ""}`;

    return result.trim();
}


function ExperienceComponents() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleDetails = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="p-2 py-2 px-10 pb-10">
            <h2 className="text-5xl text-center py-2 text-amber-300 font-medium dark:text-amber-400 md:text-6xl">
                Experience
            </h2>
            <div className={styles["experience-section"]}>
                {experiencesData.map((exp, index) => (
                    <div key={index} className={styles["experience-item"]}>
                        <div 
                            className={`${styles["experience-header"]} cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300`} 
                            onClick={() => toggleDetails(index)}
                        >
                            <h3 className="text-2xl mb-3">{exp.title}</h3>
                            <div className="flex items-center mb-2">
                                <FaBriefcase className="mr-2 text-amber-300" />
                                {exp.company}
                            </div>
                            <div className="flex items-center mb-2">
                                <FaMapMarkerAlt className="mr-2 text-amber-300" />
                                {exp.location}
                            </div>
                            <div className="flex items-center mb-2">
                                <FaCalendar className="mr-2 text-amber-300" />
                                {calculateDuration(exp.startDate, exp.endDate)}
                            </div>
                            <motion.div 
                                className={styles.icon} 
                                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                            >
                                <FaAngleDown />
                            </motion.div>
                        </div>
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div 
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className={styles["experience-body"]}
                                >
                                    {exp.description.map((desc, i) => (
                                        <p key={i} className="mb-2">{desc}</p>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExperienceComponents;