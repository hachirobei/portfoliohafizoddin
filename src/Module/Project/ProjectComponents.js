import React from 'react';
import { projectData } from './Data/projectData';
import styles from './project.module.css';

function ProjectComponents() {
    return (
        <div className=" p-2 py-2 px-10 pb-10">
        <h2 className="text-5xl text-center py-2 text-amber-300 font-medium dark:text-amber-400 md:text-6xl">
            Project
        </h2>
        <div className={styles["project-section"]}>
        <div className="p-5">
            <div className="flex flex-wrap -mx-2">
                {projectData.map((project, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-6">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="px-6 py-4">
                                <h3 className="text-xl font-semibold mb-3 text-orange-500">{project.name}</h3>
                                <p className="text-gray-700 text-base mb-2">{project.duration}</p>
                                <p className="text-gray-600 text-sm mb-2">{project.associatedWith}</p>
                                <p className="text-gray-700 text-sm">{project.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
        </div>
    );
}

export default ProjectComponents;