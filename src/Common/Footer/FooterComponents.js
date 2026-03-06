import React from "react";

const FooterComponents = () => {
    return (
        <footer className="py-12 bg-background border-t border-gray-800 relative z-10">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-2xl font-bold text-white mb-6">
                    Hafizoddin<span className="text-primary">.dev</span>
                </h2>
                
                <div className="flex justify-center gap-8 mb-8 text-sm font-medium text-gray-400">
                    <a href="#" className="hover:text-primary transition-colors">Home</a>
                    <a href="#" className="hover:text-primary transition-colors">About</a>
                    <a href="#" className="hover:text-primary transition-colors">Experience</a>
                    <a href="#" className="hover:text-primary transition-colors">Contact</a>
                </div>

                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Muhammad Hafizoddin. Built with <span className="text-accent">React</span> & <span className="text-secondary">Tailwind</span>.
                </p>
            </div>
        </footer>
    );
}

export default FooterComponents;
