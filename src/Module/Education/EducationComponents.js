import React, { useState } from 'react';
import { educationData } from './Data/educationData';
import { motion, AnimatePresence } from 'framer-motion';

function EducationComponents() {
    const [selectedId, setSelectedId] = useState(null);

    const toggleDetails = (id) => {
        setSelectedId(selectedId === id ? null : id);
    };

    return (
        <div className="p-2 py-2 px-10 pb-10">
            <h2 className="text-5xl text-center py-2 text-amber-300 font-medium dark:text-amber-400 md:text-6xl">
                Education
            </h2>
            <div className="education-section bg-gray-50 p-8 rounded-md shadow-lg">
                {educationData.map((edu, index) => (
                    <motion.div 
                        key={index} 
                        className="education-item bg-white p-6 my-4 rounded-md shadow-md" 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl font-medium mb-2">{edu.institution}</h3>
                        <p className="text-blue-600 mb-2">{edu.degree}</p>
                        <button onClick={() => toggleDetails(index)} className="text-gray-600 underline">
                            {selectedId === index ? 'Less Details' : 'More Details'}
                        </button>
                        <AnimatePresence>
                            {selectedId === index && (
                                <motion.div 
                                    initial={{ height: 0 }} 
                                    animate={{ height: 'auto' }} 
                                    exit={{ height: 0 }} 
                                    transition={{ duration: 0.3 }}
                                >
                                    {edu.duration && <p className="text-gray-500 mb-2">{edu.duration}</p>}
                                    {edu.grade && <p className="text-gray-500 mb-2">{edu.grade}</p>}
                                    {edu.activities.length > 0 && (
                                        <div className="mt-3">
                                            <strong className="text-gray-700">Activities and Societies:</strong>
                                            <ul className="list-disc list-inside mt-2">
                                                {edu.activities.map((activity, i) => (
                                                    <li key={i} className="text-gray-600">{activity}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default EducationComponents;
