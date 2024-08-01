'use client'
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'


const Footer = () => {
    return (
        <footer className="bg-white text-black dark:text-white py-6 border-gray-200 dark:bg-black flex flex-col items-center justify-center px-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
                <div className="footer-logo mb-4 md:mb-0 w-full h-full flex flex-col items-center justify-center">
                    <h2 className="btn btn-ghost text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4535C1] to-[#ca628c] dark:to-[#4535C1] dark:from-[#ca628c]">Project Eldorado</h2>
                    <p className="text-sm font-bold">Your Gateway to Investing in the Future</p>
                </div>
                <div className="footer-links mb-4 md:mb-0 w-full h-full">
                    <ul className="flex space-x-5 justify-center items-center">
                        <li><a href="/" className="hover:text-[#ca628c] md:text-nowrap">About Us</a></li>
                        <li><a href="/" className="hover:text-[#ca628c] md:text-nowrap">How It Works</a></li>
                        <li><a href="/" className="hover:text-[#ca628c] md:text-nowrap">Contact</a></li>
                        <li><a href="/" className="hover:text-[#ca628c] md:text-nowrap">Terms of Service</a></li>
                        <li><a href="/" className="hover:text-[#ca628c] md:text-nowrap">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-social flex flex-row space-x-2 space-y-0 md:flex-col md:space-x-0 md:space-y-2 w-full h-full items-center justify-center">
                    <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-500">
                        <FontAwesomeIcon icon={faFacebookF} className="w-6 h-6 mr-2" />
                        Facebook
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#ca628c]">
                        <FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6 mr-2" />
                        LinkedIn
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-500">
                        <FontAwesomeIcon icon={faTwitter} className="w-6 h-6 mr-2" />
                        Twitter
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#ca628c]">
                        <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 mr-2" />
                        Instagram
                    </a>
                </div>
            </div>
            <div className="footer-bottom flex justify-center item-center text-center py-4 text-sm">
                <p>&copy; {new Date().getFullYear()} Project Eldorado. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer;