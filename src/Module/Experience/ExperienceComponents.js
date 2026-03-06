import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experienceData } from "../../Data/experienceData";

const ExperienceCard = ({ exp, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className={`relative flex items-start mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Timeline Dot */}
        <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 shadow-glow"></div>
        
        {/* Mobile Line Fix: Only visible on small screens, connecting dots */}
        <div className="absolute left-0 md:left-1/2 transform -translate-x-[1px] h-full w-0.5 bg-gray-700 md:hidden"></div>

        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`
                w-full md:w-[45%] pl-8 md:pl-0 
                ${index % 2 === 0 ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12 md:text-left'}
            `}
        >
            <div className="glass p-8 rounded-2xl border border-gray-700/50 hover:border-primary/50 transition-all duration-300 group">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4">
                    {exp.period}
                </span>
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {exp.title}
                </h3>
                <h4 className="text-xl text-gray-400 mb-4 font-medium">
                    {exp.company}
                </h4>
                
                <ul className={`space-y-2 text-gray-300 text-sm leading-relaxed ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    {exp.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                             <span className="text-primary mt-1.5 text-[8px] flex-shrink-0">●</span>
                             <span className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    </div>
  );
};

const ExperienceComponents = () => {
  return (
    <section className="py-24 bg-surface relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
            <h2 className="text-primary font-medium tracking-widest uppercase mb-3">My Journey</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">
                Professional <span className="text-gradient">Experience</span>
            </h3>
        </div>

        <div className="relative">
            {/* Center Timeline Line (Desktop) */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-gray-700 to-transparent hidden md:block"></div>

            <div className="space-y-8">
                {experienceData.map((exp, index) => (
                    <ExperienceCard key={index} exp={exp} index={index} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceComponents;
