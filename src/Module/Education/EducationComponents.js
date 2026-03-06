import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { educationData } from "../../Data/educationData";

const EducationCard = ({ edu, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-b-4 border-amber-400"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{edu.university}</h3>
          <p className="text-amber-500 font-semibold">{edu.degree} in {edu.major}</p>
        </div>
        <div className="text-right mt-2 md:mt-0 text-sm text-gray-500 dark:text-gray-400">
          <p>{edu.dates}</p>
          {edu.gpa && <p className="font-bold text-amber-500">GPA: {edu.gpa}</p>}
        </div>
      </div>
      {edu.honors && edu.honors.length > 0 && (
        <div className="mt-2">
          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 italic">
            Honors: {edu.honors.join(", ")}
          </p>
        </div>
      )}
    </motion.div>
  );
};

const EducationComponents = () => {
  return (
    <div className="py-20 px-10 max-w-5xl mx-auto">
      <h2 className="text-5xl text-center py-10 text-amber-300 font-bold md:text-6xl">
        Education
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-6">
        {educationData.map((edu, index) => (
          <EducationCard key={index} edu={edu} index={index} />
        ))}
      </div>
    </div>
  );
};

export default EducationComponents;
