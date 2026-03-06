import React from 'react';
import { projectData } from './Data/projectData';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaFolder } from 'react-icons/fa';

function ProjectComponents() {
    return (
        <section className="py-24 bg-surface relative overflow-hidden">
             <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-medium tracking-widest uppercase mb-3">My Work</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">
                        Featured <span className="text-gradient">Projects</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData && projectData.length > 0 ? (
                        projectData.map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20">
                            <p className="text-gray-400 text-lg">More projects coming soon...</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-2xl overflow-hidden border border-gray-700/50 hover:border-primary/50 transition-all duration-300 flex flex-col h-full group"
        >
            <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                    <div className="text-primary text-4xl">
                        <FaFolder />
                    </div>
                    <div className="flex gap-4 text-gray-400">
                        {project.githubLink && (
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-xl">
                                <FaGithub />
                            </a>
                        )}
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-xl">
                                <FaExternalLinkAlt />
                            </a>
                        )}
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                    {project.description}
                </p>

                {project.techStack && (
                    <div className="flex flex-wrap gap-2 mt-auto pt-4">
                        {project.techStack.map((tech, i) => (
                            <span key={i} className="text-xs font-mono text-secondary">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectComponents;
