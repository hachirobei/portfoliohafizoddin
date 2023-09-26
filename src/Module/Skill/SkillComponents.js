import React, { useState } from 'react';
import styles from './skill.module.css';
import { skills } from './Data/skillData';
import { usePopperTooltip } from 'react-popper-tooltip';

function SkillComponents() {
    const [activeTooltip, setActiveTooltip] = useState(null);
    const {
        getArrowProps,
        getTooltipProps,
        setTooltipRef,
        setTriggerRef,
        visible,
        update
    } = usePopperTooltip({ trigger: 'click' });

    const numColumns = 3;
    const skillsPerColumn = Math.ceil(skills.length / numColumns);

    const columns = [];

    function handleSkillClick(skillName) {
        if (activeTooltip === skillName) {
            setActiveTooltip(null);
        } else {
            setActiveTooltip(skillName);
        }
    }

    for (let i = 0; i < numColumns; i++) {
        const startIndex = i * skillsPerColumn;
        const endIndex = startIndex + skillsPerColumn;
        const columnSkills = skills.slice(startIndex, endIndex);

        columns.push(
            <div key={i} className="flex-1 p-4">
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Skill</th>
                            <th>Proficiency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {columnSkills.map(skill => (
                            <tr key={skill.name}>
                                <td>{skill.name}</td>
                                <td
                                    onClick={() => handleSkillClick(skill.name)}
                                    className={styles.skillCell}
                                    ref={setTriggerRef}
                                >
                                    <div className={styles["progress-bar"]}>
                                        <div className={styles.filler} style={{ width: `${skill.proficiency}%` }}></div>
                                    </div>
                                    {visible && activeTooltip === skill.name && (
                                        <div
                                            ref={setTooltipRef}
                                            {...getTooltipProps({ className: 'tooltip-container' })}
                                        >
                                            <div {...getArrowProps({ className: 'tooltip-arrow' })} />
                                            Skill: {skill.name}, Proficiency: {skill.proficiency}%
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    return (
        <div className="text-center p-2 py-2 px-10">
            <h2 className="text-5xl py-2 text-amber-300 font-medium dark:text-amber-400 md:text-6xl">
                Skill
            </h2>
            <div className="flex">
                {columns}
            </div>
        </div>
    );
}

export default SkillComponents;