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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border-l-4 border-amber-400 p-6"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{exp.title}</h3>
          <p className="text-amber-500 font-semibold">{exp.company}</p>
        </div>
        <div className="text-right mt-2 md:mt-0 text-sm text-gray-500 dark:text-gray-400">
          <p>{exp.period}</p>
          <p>{exp.location}</p>
        </div>
      </div>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
        {exp.highlights.map((item, idx) => (
          <li key={idx} className="leading-relaxed">{item}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const ExperienceComponents = () => {
  return (
    <div className="py-20 px-10 max-w-5xl mx-auto">
      <h2 className="text-5xl text-center py-10 text-amber-300 font-bold md:text-6xl">
        Experience
      </h2>
      <div className="mt-10">
        {experienceData.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceComponents;
