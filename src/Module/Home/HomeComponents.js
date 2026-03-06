import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { TimeBasedGreenting, FetchUserProfile } from "./Utility";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
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
            <div className="h-screen flex items-center justify-center bg-gray-900 text-amber-300">
                <div className="animate-pulse text-2xl font-bold">Loading Portfolio...</div>
            </div>
        );
    }

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gray-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={userProfile.image} 
                    className="w-full h-full object-cover opacity-40" 
                    alt="Background"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/60 to-gray-900"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-amber-400 text-xl md:text-2xl font-medium mb-2">
                        <TimeBasedGreenting />, I'm
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-4">
                        {userProfile.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 font-light italic">
                        {userProfile.title}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-amber-400 hover:bg-amber-500 text-black px-8 py-3 rounded-full font-bold text-lg transition duration-300 shadow-lg"
                            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                        >
                            Explore My Work
                        </motion.button>
                        <motion.a 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://www.linkedin.com/in/muhammad-hafizoddin-roslan-538a67bb/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-full font-bold text-lg transition duration-300"
                        >
                            LinkedIn Profile
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-sm flex flex-col items-center"
            >
                <span className="mb-2 uppercase tracking-widest opacity-60">Scroll Down</span>
                <div className="w-1 h-12 bg-gradient-to-b from-amber-400 to-transparent rounded-full animate-bounce"></div>
            </motion.div>
        </section>
    );
}

export default HomeComponents;
