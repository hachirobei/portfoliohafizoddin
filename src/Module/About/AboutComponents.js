import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaRegEnvelope, FaGlobe, FaServer, FaCode, FaDatabase } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const StatCard = ({ icon: Icon, value, label }) => (
    <motion.div 
        whileHover={{ y: -5 }}
        className="glass p-6 rounded-2xl text-center border border-gray-700/50 hover:border-primary/50 transition-colors duration-300"
    >
        <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-primary text-2xl">
            <Icon />
        </div>
        <h4 className="text-3xl font-bold text-white mb-1">{value}</h4>
        <p className="text-gray-400 text-sm uppercase tracking-wider">{label}</p>
    </motion.div>
);

const AboutComponents = ({ startYear = 2018 }) => {
    const currentYear = new Date().getFullYear();
    const experienceYears = currentYear - startYear;
    
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const companyName = "OCBC"; 
    const currentPosition = "Assistant Vice President"; 

    return (
        <section className="py-24 bg-surface relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <motion.div 
                className="max-w-7xl mx-auto px-6 relative z-10"
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
            >
                <div className="text-center mb-16">
                    <h2 className="text-primary font-medium tracking-widest uppercase mb-3">Who I Am</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">
                        Passionate about <span className="text-gradient">Backend Excellence</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                        <p>
                            I'm <strong className="text-white">Muhammad Hafizoddin</strong>, an <strong className="text-secondary">{currentPosition}</strong> at <strong className="text-secondary">{companyName}</strong>. 
                            My journey is defined by a relentless pursuit of building robust, scalable, and high-performance enterprise systems.
                        </p>
                        <p>
                            Specializing in <strong className="text-white">Java 21</strong>, <strong className="text-white">Spring Boot</strong>, and <strong className="text-white">Microservices</strong>, 
                            I've transitioned from Full-stack development to becoming a focused backend specialist. I thrive on solving complex architectural challenges—whether 
                            it's optimizing high-volume batch processing or modernizing legacy monoliths into resilient microservices.
                        </p>
                        <p>
                            Beyond code, I focus on the "why." I believe true engineering excellence lies in understanding business goals and delivering solutions that drive value. 
                            I'm also a certified <strong className="text-white">Scrum Product Owner (PSPO I)</strong>, bridging the gap between technical execution and product vision.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <StatCard icon={FaCode} value={`${experienceYears}+`} label="Years Experience" />
                        <StatCard icon={FaServer} value="50+" label="Projects Delivered" />
                        <StatCard icon={FaDatabase} value="3" label="Major Industries" />
                        <StatCard icon={FaGlobe} value="100%" label="Commitment" />
                    </div>
                </div>

                <div className="flex justify-center gap-8">
                    <motion.a 
                        whileHover={{ y: -3, color: '#fbbf24' }} 
                        href="https://www.linkedin.com/in/muhammad-hafizoddin-roslan-538a67bb/"
                        className="text-gray-400 text-3xl transition-colors"
                        aria-label="LinkedIn"
                    >
                        <AiFillLinkedin />
                    </motion.a>
                    <motion.a 
                        whileHover={{ y: -3, color: '#fbbf24' }} 
                        href="https://github.com/hachirobei"
                        className="text-gray-400 text-3xl transition-colors"
                        aria-label="GitHub"
                    >
                        <AiFillGithub />
                    </motion.a>
                    <motion.a 
                        whileHover={{ y: -3, color: '#fbbf24' }} 
                        href="mailto:hachirobei93@gmail.com"
                        className="text-gray-400 text-3xl transition-colors"
                        aria-label="Email"
                    >
                        <FaRegEnvelope />
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
}

export default AboutComponents;
