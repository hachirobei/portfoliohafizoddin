import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { TimeBasedGreenting, FetchUserProfile } from "./Utility";

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

const HomeComponents = () => {
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        FetchUserProfile().then(data => {
            setUserProfile(data);
        });
    }, []);

    if (!userProfile) {
        return (
            <div className="h-screen flex items-center justify-center bg-background text-primary">
                <div className="animate-pulse text-2xl font-bold tracking-widest">LOADING...</div>
            </div>
        );
    }

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            {/* Abstract Background Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute top-1/2 -right-20 w-80 h-80 bg-secondary opacity-10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-1/3 w-full h-64 bg-accent opacity-5 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block px-4 py-1.5 mb-6 border border-gray-700 rounded-full bg-white/5 backdrop-blur-sm"
                    >
                        <span className="text-sm font-medium text-gray-300">
                            <span className="text-primary mr-2">●</span> Available for new projects
                        </span>
                    </motion.div>

                    <h2 className="text-secondary text-xl md:text-2xl font-medium mb-4 tracking-wide">
                        <TimeBasedGreenting />, I'm
                    </h2>
                    
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-6 text-white">
                        {userProfile.firstName}
                        <span className="text-primary">.</span>
                    </h1>
                    
                    <p className="text-xl md:text-3xl text-gray-400 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
                        <span className="text-white font-medium">Assistant Vice President</span> & <span className="text-white font-medium">Backend Specialist</span> building scalable enterprise solutions at OCBC.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-primary text-background font-bold text-lg rounded-full shadow-glow hover:bg-amber-300 transition-all duration-300"
                            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                        >
                            View Experience
                        </motion.button>
                        <motion.a 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://github.com/hachirobei"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 border border-gray-600 text-white font-bold text-lg rounded-full hover:bg-white/5 hover:border-gray-400 transition-all duration-300 backdrop-blur-sm"
                        >
                            GitHub Profile
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gray-500 to-transparent relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-slide-up"></div>
                </div>
            </motion.div>
        </section>
    );
}

export default HomeComponents;
