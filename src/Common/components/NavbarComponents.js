import React, { useState } from "react";

const NavbarComponents = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleNavbar = () => {
        setIsCollapsed(prevState => !prevState);
    }

    return (
        <nav className="bg-white border-gray-200 dark:bg-neutral-950">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://www.hafizoddin.com/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Hafizoddin</span>
                </a>
                <div className="flex md:order-2">
                    <button onClick={toggleNavbar} data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                
                <div className={`${isCollapsed ? 'hidden' : ''} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white bg-amber-600 rounded md:bg-transparent md:text-amber-600 md:p-0 md:dark:text-amber-600" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-neutral-950 md:hover:bg-transparent md:hover:text-amber-600 md:p-0 md:dark:hover:text-amber-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-neutral-700">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-600 md:p-0 md:dark:hover:text-amber-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-600 md:p-0 md:dark:hover:text-amber-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponents;