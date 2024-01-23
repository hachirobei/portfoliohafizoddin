import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { TimeBasedGreenting, FetchUserProfile } from "./Utility";

// Dynamic fadeIn animation based on screen size
const fadeIn = {
    hidden: { opacity: 0, y: -20 },
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
        return <div>Loading...</div>; // Loading state
    }

    return (
        <div className="relative">
            <motion.img 
                src={userProfile.image} // Dynamic image
                className="object-cover w-full transition-transform transform hover:scale-105" 
                alt={userProfile.name}
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                aria-label="Profile Image" // Accessibility improvement
            />

            <div className="inset-0 flex flex-col items-center justify-center text-center text-amber-300 bg-gradient-to-t to-transparent">
                <motion.h1 
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold shadow-amber-600/50 drop-shadow-lg pb-1"
                    tabIndex="0" // Accessibility improvement
                >
                    <TimeBasedGreenting /> Welcome, {userProfile.name}!
                </motion.h1>
            </div>
        </div>
    );
}

export default HomeComponents;
