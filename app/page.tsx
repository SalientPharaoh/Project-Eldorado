'use client'
import React, { useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import lottie from 'lottie-web';
import { useRouter } from 'next/navigation';
import ThemeToggle from '@/components/theme-toggle';
import { ShootingStars } from '@/components/shooting-stars';
import { StarsBackground } from '@/components/stars-background';
import { TypewriterEffectSmooth } from '@/components/typewriter';
import { WobbleCard } from '@/components/wobble-card';
import Image from 'next/image';
import { TextGenerateEffect } from '@/components/generate-text';
import { HoverBorderGradient } from '@/components/hover-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import NavBar from '@/components/nonloginNav';



const Hero = () => {
  const router = useRouter();

  const words = [
    {
      text: "Invest",
    },
    {
      text: "in",
    },
    {
      text: "Start-ups",
    },
    {
      text: "with",
    },
    {
      text: "Project",
    },
    {
      text: "Eldorado.",
      className: "text-[#4535C1] dark:text-[#ca628c]",
    },
  ];

  const word_generate = "Project Eldorado is a cutting-edge investment platform that revolutionizes the way individuals can participate in the growth of early-stage startups. By providing an environment, it enables investors to easily invest in and trade shares of promising startups, unlocking new opportunities for financial growth and diversification."

  function handleClickLogin() {
    router.push('/login');
  }

  function handleClickSignup() {
    router.push('/signup');
  }

  return (
    <>
      <div className='flex flex-col'>
        <div className='flex flex-col h-[47rem] bg-white dark:bg-black'>
          <NavBar />
          <motion.div
            className="main_container w-full h-screen bg-white dark:bg-black">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}>
              <div className="flex flex-col items-center justify-center h-[40rem]  ">
                <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
                  The road to success starts from here
                </p>
                <TypewriterEffectSmooth words={words} />
                <br />
                <br />
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex justify-center items-center space-x-2 w-40 h-10"
                    onClick={handleClickSignup}
                  >
                    <span>Join now</span>
                  </HoverBorderGradient>
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-white text-black border border-black flex justify-center items-center space-x-2 w-40 h-10"
                    onClick={handleClickLogin}
                  >
                    <span>Login</span>
                  </HoverBorderGradient>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="bg-white dark:bg-black">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full px-2">
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
            >
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Simple, Transparent, Trustworthy
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  Investing in startups has never been easier. With Project Eldorado, you can browse through a curated list of startups, invest in the ones you believe in, and trade shares with other investors.
                </p>
              </div>
              <Image
                src="/profit.png"
                width={500}
                height={500}
                alt="Achieve profit with us"
                className="absolute -right-5 -bottom-20 lg:-right-[15%] lg:-bottom-[70%] grayscale filter object-contain rounded-2xl"
              />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
              <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Invest in the Future, Reap the Rewards.
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                Discover the success stories of startups that have grown with the help of Project Eldorado.
              </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
              <div className="max-w-sm">
                <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Signup for Investing in Tomorrow, Today!
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                  Whether you are new to investing or a seasoned pro, our educational resources will help you navigate the world of startup investments. From understanding market trends to learning how to evaluate startups, we provide the tools you need to invest with confidence.
                </p>
              </div>
              <Image
                src="/bounty.png"
                width={500}
                height={500}
                alt="safe sound and secure"
                className="absolute -right-20 -bottom-40 md:-right-[20%] md:-bottom-[30%] lg:-right-[10%] lg:-bottom-[50%] object-contain rounded-2xl"
              />
            </WobbleCard>
          </div>
        </div>
      </div>
      <div className='bg-white dark:bg-black h-screen flex justify-center align-middle items-center'>
        <div className='mx-auto w-3/4 text-justify'>
          <TextGenerateEffect words={word_generate} />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <hr className="w-1/2 border-t border-balck dark:border-white" />
      </div>
      <footer className="bg-white text-black dark:text-white py-6 border-gray-200 dark:bg-black flex flex-col items-center justify-center px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
          <div className="footer-logo mb-4 md:mb-0 w-full h-full flex flex-col items-center justify-center">
            <h2 className="btn btn-ghost text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4535C1] to-[#ca628c] dark:to-[#4535C1] dark:from-[#ca628c]">Project Eldorado</h2>
            <p className="text-sm font-bold">Your Gateway to Investing in the Future</p>
          </div>
          <div className="footer-links mb-4 md:mb-0 w-full h-full">
            <ul className="flex space-x-5 justify-center items-center">
              <li><a href="/about" className="hover:text-[#ca628c] md:text-nowrap">About Us</a></li>
              <li><a href="/how-it-works" className="hover:text-[#ca628c] md:text-nowrap">How It Works</a></li>
              <li><a href="/contact" className="hover:text-[#ca628c] md:text-nowrap">Contact</a></li>
              <li><a href="/terms" className="hover:text-[#ca628c] md:text-nowrap">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-[#ca628c] md:text-nowrap">Privacy Policy</a></li>
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
      <ShootingStars />
      <StarsBackground />
    </>
  )
}

export default Hero
