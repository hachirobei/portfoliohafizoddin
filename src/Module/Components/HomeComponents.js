import React from "react";
import hafizoddinImage from "../../assets/images/hafizoddin.jpeg";
import { TimeBasedGreenting } from "./Home";

const HomeComponents = () => {
    return (
        <div className="relative">
                        <div className="absolute inset-0 flex flex-col items-center text-center text-amber-300">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-extrabold shadow-amber-600/50 drop-shadow-lg pb-4">
                                <TimeBasedGreenting /><br />Welcome to My Portfolio
                            </h1>
                    </div>
            <img src={hafizoddinImage} className="object-cover w-full" alt="hafizoddin"/>
        </div>
    );
}

export default HomeComponents;