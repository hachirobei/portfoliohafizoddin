import React from "react";
import hafizoddinImage from "../../assets/images/hafizoddin.jpeg";
import { TimeBasedGreenting } from "./Utility";
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
};

const HomeComponents = () => {
    return (
        <div className="relative">

            <motion.img 
                src={hafizoddinImage} 
                className="object-cover w-full transition-transform transform hover:scale-105" 
                alt="hafizoddin"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
            />

<div className=" inset-0 flex flex-col items-center justify-center text-center text-amber-300 bg-gradient-to-t to-transparent">
                <motion.h1 
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-extrabold shadow-amber-600/50 drop-shadow-lg pb-1"
                >
                    <TimeBasedGreenting /><br />Welcome to My Portfolio
                </motion.h1>
            </div>
        </div>
    );
}

export default HomeComponents;