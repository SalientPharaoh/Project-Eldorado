'use client'
import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web';
import { useRouter } from 'next/navigation';
import NavBar from '@/components/nonloginNav';
import { HoverBorderGradient } from '@/components/hover-button';
import Image from 'next/image';

const LogIN = () => {
    const router = useRouter();
    const animationContainer = useRef<any>(null);

    useEffect(() => {
        const animationInstance = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'preventive.json'
        });
        return () => animationInstance.destroy();
    }, []);

    function handleClick() {
        router.push('/dashboard');
    }

    return (
        <>
            <div className='h-screen flex flex-col bg-white dark:bg-black'>
                <NavBar />
                <div className='flex h-screen items-center justify-center'>
                    <div className="h-full w-3/4 dark:bg-black bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.3] relative flex items-center justify-center">
                        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                        <div className="flex flex-col mt- md:flex-row justify-center items-center w-full">
                        <Image
                                src="/standing.png"
                                width={500}
                                height={500}
                                alt="safe sound and secure"
                                // className="absolute -right-20 -bottom-40 md:-right-[20%] md:-bottom-[30%] lg:-right-[10%] lg:-bottom-[50%] object-contain rounded-2xl"
                            />
                            <div className="rounded-full w-[70%] h-[60%] bg-transparent flex flex-col items-center justify-center antialiased">
                                <div className="max-w-2xl mx-auto p-4">
                                    <h1 className="flex mb-6 w-full z-10 text-lg md:text-3xl  bg-clip-text text-transparent bg-gradient-to-b to-neutral-200 from-neutral-600 dark:to-neutral-200 dark:from-neutral-600 text-center font-sans font-bold">
                                        Eldorado: Where Startup Dreams Meet Investor Reality. Building the Future, One Startup at a Time
                                    </h1>
                                    <input
                                        type="text"
                                        placeholder="  Enter your email"
                                        className="rounded-md h-10 border border-neutral-800 focus:ring-2 focus:ring-[#4535C1] w-full relative z-10 mt-4 bg-white dark:bg-black placeholder:text-neutral-700 text-black dark:text-white"
                                    />
                                    <input
                                        type="text"
                                        placeholder="  Enter your Password"
                                        className="rounded-md h-10 border border-neutral-800 focus:ring-2 focus:ring-[#ca628c]  w-full relative z-10 mt-4  bg-white dark:bg-black placeholder:text-neutral-700 text-black dark:text-white"
                                    />
                                </div>
                                <div className="button flex justify-center lg:justify-start my-8">
                                    <HoverBorderGradient
                                        containerClassName="rounded-full"
                                        as="button"
                                        className="bg-white text-black border border-black flex justify-center items-center space-x-2 w-40 h-10 gradient-button"
                                        onClick={handleClick}
                                    >
                                        <span>Login</span>
                                    </HoverBorderGradient>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogIN
