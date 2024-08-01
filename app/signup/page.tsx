'use client'
import React, { useEffect, useRef, useState } from 'react'
import lottie from 'lottie-web';
import { useRouter } from 'next/navigation';
import NavBar from '@/components/nonloginNav';
import { HoverBorderGradient } from '@/components/hover-button';
import Image from 'next/image';

const Signup = () => {
    const router = useRouter();
    const animationContainer = useRef<any>(null);
    const [name, setname] = useState<any>("");
    const [email, setemail] = useState<any>("");
    const [password, setpass] = useState<any>("");
    const [password_conf, setpassconf] = useState<any>("");


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
        if (name === "" || email === "" || password === "" || password_conf === "") {
            alert("Please fill all the fields");
            return;
        }
        if (password !== password_conf) {
            setpass("");
            setpassconf("");
            alert("Passwords do not match. Re-enter the passwords");
            return;
        }
        router.push('/dashboard');
    }

    return (
        <>
            <div className='h-screen flex flex-col bg-white dark:bg-black'>
                <NavBar />
                <div className='flex h-screen items-center justify-center m-7'>
                    <div className="h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.4] bg-dot-black/[0.4] relative flex items-center justify-center">
                        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                        <div className="flex flex-col mt- md:flex-row justify-center items-center w-full">
                            <div className="rounded-full w-[70%] h-[70%] bg-transparent flex flex-col items-center justify-center antialiased">
                                <div className="max-w-2xl mx-auto p-4">
                                    <h1 className="flex mb-6 w-full z-10 text-lg md:text-3xl  bg-clip-text text-transparent bg-gradient-to-b to-neutral-600 from-neutral dark:to-neutral-50 dark:from-neutral-400 text-center font-sans font-bold">
                                        Project Eldorado: Where Startup Dreams Meet Investor Reality. Building the Future, One Startup at a Time
                                    </h1>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setname(e.target.value)}
                                        placeholder="   Enter your Name"
                                        className="rounded-md h-10 border border-neutral-800 focus:ring-2 focus:ring-[#ca628c]  w-full relative z-10 mt-4  bg-white dark:bg-black placeholder:text-neutral-700 text-black dark:text-white"
                                    />
                                    <input
                                        type="text"
                                        value={email}
                                        onChange={(e) => setemail(e.target.value)}
                                        placeholder="  Enter your email"
                                        className="rounded-md h-10 border border-neutral-800 focus:ring-2 focus:ring-[#4535C1] w-full relative z-10 mt-4 bg-white dark:bg-black placeholder:text-neutral-700 text-black dark:text-white"
                                    />
                                    <input
                                        type="text"
                                        value={password}
                                        onChange={(e) => setpass(e.target.value)}
                                        placeholder="  Enter your Password"
                                        className="rounded-md h-10 border border-neutral-800 focus:ring-2 focus:ring-[#ca628c]  w-full relative z-10 mt-4  bg-white dark:bg-black placeholder:text-neutral-700 text-black dark:text-white"
                                    />
                                    <input
                                        type="text"
                                        value={password_conf}
                                        onChange={(e) => setpassconf(e.target.value)}
                                        placeholder="   Confirm your Password"
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
                                        <span>Sign up</span>
                                    </HoverBorderGradient>
                                </div>
                            </div>
                            <Image
                                src="/talk.png"
                                width={500}
                                height={500}
                                alt="safe sound and secure"
                                // className="absolute -right-20 -bottom-40 md:-right-[20%] md:-bottom-[30%] lg:-right-[10%] lg:-bottom-[50%] object-contain rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;
