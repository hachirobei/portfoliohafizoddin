import React from "react";
import { motion } from "framer-motion";
import { educationData } from "../../Data/educationData";
import { FaGraduationCap } from "react-icons/fa";

const EducationCard = ({ edu, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass p-8 rounded-2xl border border-gray-700/50 hover:border-secondary/50 transition-all duration-300 group relative overflow-hidden"
    >
        <div className="absolute top-0 right-0 p-8 opacity-10 text-secondary text-9xl transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform duration-500">
            <FaGraduationCap />
        </div>

        <div className="relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold mb-4">
                {edu.dates}
            </span>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                {edu.university}
            </h3>
            <p className="text-xl text-gray-300 mb-1">{edu.degree}</p>
            <p className="text-gray-400 font-medium">{edu.major}</p>

            {edu.gpa && (
                 <div className="mt-4 inline-block bg-background/50 px-4 py-2 rounded-lg border border-gray-700">
                    <span className="text-secondary font-bold">GPA: {edu.gpa}</span>
                 </div>
            )}

            {edu.honors && edu.honors.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <p className="text-sm text-gray-400 italic">
                        {edu.honors.join(", ")}
                    </p>
                </div>
            )}
        </div>
    </motion.div>
  );
};

const EducationComponents = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-secondary font-medium tracking-widest uppercase mb-3">Academic Background</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">
                Education & <span className="text-gradient-cyan">Certifications</span>
            </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationComponents;
