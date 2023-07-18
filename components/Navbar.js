import React from 'react'

const Navbar = () => {
    return (

        <nav className="z-30 bg-transparent border-gray-200     ">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="https://flowbite.com" className="flex items-center">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/user-original-modified.png" className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap ">Ahtisham kiani</span>
                </a>
                <button data-collapse-toggle="mega-menu-full" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                    </svg>

                </button>
                <div id="mega-menu-full" className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col  mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4  text-gray-100 rounded hover:bg-[#A020F0]   p-2 dark:text-white" >Overview</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-[#A020F0]    p-2 dark:text-white " >Experience</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-[#A020F0]   p-2 dark:text-white " >Projects</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-[#A020F0]   p-2 dark:text-white " >Contact</a>
                        </li>

                    </ul>
                </div>
            </div>

        </nav>

    )
}

export default Navbar