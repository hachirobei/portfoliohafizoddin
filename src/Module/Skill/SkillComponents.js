import React, { useState } from 'react';
import { skills } from './Data/skillData';
import { motion } from 'framer-motion';

function SkillComponents() {
    // Group skills by estimated category (since data is flat, we'll categorize manually or just display elegantly)
    // For this modern design, a "Tag Cloud" or "Pill Grid" approach works best.
    
    // Let's sort by proficiency for impact
    const sortedSkills = [...skills].sort((a, b) => b.proficiency - a.proficiency);

    return (
        <section className="py-24 bg-background relative">
             <div className="absolute left-0 top-1/3 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-medium tracking-widest uppercase mb-3">My Arsenal</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">
                        Technical <span className="text-gradient">Proficiency</span>
                    </h3>
                </div>

                <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                    {sortedSkills.map((skill, index) => (
                        <SkillPill key={skill.name} skill={skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const SkillPill = ({ skill, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="group relative"
        >
            <div className={`
                glass px-6 py-3 rounded-full flex items-center gap-3 cursor-default
                border border-white/5 hover:border-primary/50 transition-all duration-300
            `}>
                <span className="text-gray-200 font-medium tracking-wide group-hover:text-white">{skill.name}</span>
                
                {/* Proficiency Indicator (Mini Bar) */}
                <div className="w-16 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-gradient-to-r from-primary to-orange-500" 
                        style={{ width: `${skill.proficiency}%` }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default SkillComponents;
