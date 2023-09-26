import React, { useState, useEffect } from 'react';
import styles from './skill.module.css';
import { skills } from './Data/skillData';



function SkillComponents() {
    const [activeTooltip, setActiveTooltip] = useState(null);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const numColumns = windowWidth >= 1024 ? 4 : windowWidth >= 768 ? 2 : 1;

    const skillsPerColumn = Math.ceil(skills.length / numColumns);

    function handleSkillClick(skillName) {
        setActiveTooltip(prevTooltip => (prevTooltip === skillName ? null : skillName));
    }

    function getColorClass(proficiency) {
        if (proficiency < 25) return 'low';
        if (proficiency >= 25 && proficiency < 50) return 'medium';
        if (proficiency >= 50 && proficiency < 75) return 'high';
        return 'very-high'; // proficiency >= 75
    }

    return (
        <div className="text-center p-2 py-2 px-10">
            <h2 className="text-5xl py-2 text-amber-300 font-medium dark:text-amber-400 md:text-6xl">
                Skill
            </h2>
            <div className={styles["skill-section"]}>
            <div className="flex">
                {Array.from({ length: numColumns }).map((_, colIndex) => (
                    <div key={colIndex} className="flex-1 p-4">
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Skill</th>
                                    <th>Proficiency</th>
                                </tr>
                            </thead>
                            <tbody>
                                {skills.slice(colIndex * skillsPerColumn, (colIndex + 1) * skillsPerColumn).map(skill => (
                                    <tr key={skill.name}>
                                        <td>{skill.name}</td>
                                        <td
                                            onClick={() => handleSkillClick(skill.name)}
                                            className={styles.skillCell}
                                        >
                                            <div 
                                                className={`${styles["progress-bar"]} ${styles[getColorClass(skill.proficiency)]}`}
                                                style={{ width: `${skill.proficiency}%` }}
                                            ></div>
                                            {activeTooltip === skill.name && (
                                                <div className={styles.tooltip}>
                                                 {skill.proficiency}%
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}

export default SkillComponents;