'use client'
import React, { useRef } from 'react'
import { useRouter } from 'next/navigation';
import NavBar from '@/components/navbar';
import { AppleCardsCarousel } from '@/components/carouselcomponent';
import { CardBody, CardContainer, CardItem } from '@/components/card';
import { Component } from '@/components/charts/market';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import Footer from '@/components/footers';


const Dashboard = () => {
  const router = useRouter();
  function redirectListing() {
    router.push('/listing');
  }

  return (
    <>
      <NavBar />
      <div className='bg-white dark:bg-black'>
        <div className='bg-white dark:bg-black flex flex-col items-center justify-center'>
          <br />
          <br />
          <h2 className="ml-10 text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4535C1] to-[#ca628c] dark:to-[#4535C1] dark:from-[#ca628c] flex items-center justify-center  w-1/2 rounded-3xl py-2">
            Welcome sahil!
          </h2>
          <br />
        </div>
        <div className='flex flex-col md:flex-row p-10 bg-white dark:bg-black'>
          <div className='w-full flex items-center justify-start'>
            <div className='w-full h-full'>
              <CardContainer className="inter-var w-full">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-black dark:text-white"
                  >
                    Eldex
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Eldex is the premier index of Project Eldorado, representing a curated collection of high-potential startups. It serves as a dynamic barometer for tracking the growth and performance of these innovative companies.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full">
                    <div className='w-full'>
                      <Component />
                    </div>
                  </CardItem>

                </CardBody>
              </CardContainer>
            </div>
          </div>
          <div className='flex flex-col w-full items-center justify-center space-y-4'>
            <div className='w-full'>
              <div className='flex items-center justify-center'>
                <CardContainer className="inter-var">
                  <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border ">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-black dark:text-white"
                    >
                      Invest in the Future
                    </CardItem>
                    <CardItem
                      as="div"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      By investing in startups, you not only support innovation and entrepreneurship but also position yourself to capitalize on the next generation of industry leaders and transformative technologies
                    </CardItem>
                    <div className="flex justify-between items-center mt-20 border rounded-3xl">
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="bg-black dark:bg-white text-black dark:text-black border-black dark:border-white flex justify-center items-center space-x-2 gradient-button-2 rounded-3xl w-full"
                        onClick={redirectListing}
                      >
                        Start Investing Now
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </div>
            </div>
            <div className='w-full h-full'>
              <div className=' w-full h-full flex flex-col space-y-2 justify-end'>
                <h2 className="mx-auto w-3/4 items-center flex justify-center text-sm md:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4535C1] to-[#ca628c] dark:to-[#4535C1] dark:from-[#ca628c]">
                  Trending Start-ups now</h2>
                <CardContainer className="w-full md:w-3/4">
                  <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex justify-center">
                    <CardItem
                      as="div"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 w-full"
                    >
                      <div className='flex flex-row w-full item-center justify-between'>
                        <div className='flex items-center font-bold'>
                          Project Eldorado
                        </div>
                        <div className="flex items-center">
                          <div className="flex items-center text-green-500 text-xs">
                            <FaArrowUp />
                            <div className='flex flex-col'>
                              <span className="ml-1">Rs.36,782.00 </span>
                              <span className="ml-1">+10.78%</span>
                            </div>
                          </div>
                        </div>
                        <div className=''>
                          <CardItem
                            translateZ={20}
                            as="button"
                            className="bg-black dark:bg-white text-black dark:text-black border-black dark:border-white flex justify-center items-center space-x-2 rounded-3xl gradient-button-2"
                            onClick={()=>{router.push('/detailed')}}
                          >
                            Track
                          </CardItem>
                        </div>
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>

                <CardContainer className="w-full md:w-3/4">
                  <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex justify-center">
                    <CardItem
                      as="div"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 w-full"
                    >
                      <div className='flex flex-row w-full item-center justify-between'>
                        <div className='flex items-center font-bold'>
                        Hart Hagerty
                        </div>
                        <div className="flex items-center">
                          <div className="flex items-center text-green-500 text-xs">
                            <FaArrowUp />
                            <div className='flex flex-col'>
                              <span className="ml-1">Rs.4,567.00 </span>
                              <span className="ml-1">+7.89%</span>
                            </div>
                          </div>
                        </div>
                        <div className=''>
                          <CardItem
                            translateZ={20}
                            as="button"
                            className="bg-black dark:bg-white text-black dark:text-black border-black dark:border-white flex justify-center items-center space-x-2 rounded-3xl gradient-button-2"
                            onClick={()=>{router.push('/detailed')}}
                          >
                            Track
                          </CardItem>
                        </div>
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>

                <CardContainer className="w-full md:w-3/4">
                  <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex justify-center">
                    <CardItem
                      as="div"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 w-full"
                    >
                      <div className='flex flex-row w-full item-center justify-between'>
                        <div className='flex items-center font-bold'>
                          DataBuilders
                        </div>
                        <div className="flex items-center">
                          <div className="flex items-center text-red-500 text-xs">
                            <FaArrowDown />
                            <div className='flex flex-col'>
                              <span className="ml-1">Rs.12,785.05 </span>
                              <span className="ml-1">-4.77% </span>
                            </div>
                          </div>
                        </div>
                        <div className=''>
                          <CardItem
                            translateZ={20}
                            as="button"
                            className="bg-black dark:bg-white text-black dark:text-black border-black dark:border-white flex justify-center items-center space-x-2 rounded-3xl gradient-button-2"
                            onClick={()=>{router.push('/detailed')}}
                          >
                            Track
                          </CardItem>
                        </div>
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white dark:bg-black'>
          <AppleCardsCarousel />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Dashboard;
