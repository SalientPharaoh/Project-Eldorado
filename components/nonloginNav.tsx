'use client'
import React, { useEffect, useRef } from 'react'
import ThemeToggle from './theme-toggle';

const NavBar = () => {
    return (
        <nav className='flex justify-center bg-white dark:bg-black'>
            <div className="navbar bg-white dark:bg-black w-1/2 flex justify-between mx-6 rounded-3xl mt-4 z-10 border dark:border-white">
                <button className="btn btn-ghost text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4535C1] to-[#ca628c] dark:to-[#4535C1] dark:from-[#ca628c]">Project Eldorado</button>
                <ThemeToggle />
            </div>
        </nav>
    );
}

export default NavBar;