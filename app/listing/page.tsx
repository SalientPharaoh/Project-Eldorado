'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import NavBar from '@/components/navbar';
import { CardBody, CardContainer, CardItem } from '@/components/card';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import Footer from '@/components/footers';
import { HoverBorderGradient } from '@/components/hover-button';


const Listing = () => {
    const router = useRouter();
    
    function deatilButtonHandler() {
        router.push('/detailed');
    }

    function ispoButtonHandler(){
        router.push('/ispo');
    }

    return (
        <>
            <NavBar />
            <div className='flex flex-row w-full h-full bg-white dark:bg-black'>
                <div className='w-full p-10 space-x-4'>
                    <div className="overflow-x-auto">
                        <table className="table text-black dark:text-white">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Category</th>
                                    <th>Stock Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="/profit.png"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Hart Hagerty</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Manufacturing, Distribution, Services
                                        <br />
                                        <span className="badge badge-ghost badge-sm text-gray-900 dark:text-gray-400 bg-gray-100 dark:bg-gray-900">Information technology</span>
                                    </td>
                                    <td>
                                        <div className="flex items-center text-green-500 text-xs">
                                            <FaArrowUp />
                                            <div className='flex flex-col'>
                                                <span className="ml-1">Rs.4,567.00 </span>
                                                <span className="ml-1">+7.89%</span>
                                            </div>
                                        </div>
                                    </td>
                                    <th>
                                        <HoverBorderGradient
                                            containerClassName="rounded-full"
                                            as="button"
                                            className="bg-white text-black border border-black flex justify-center items-center space-x-2 gradient-button"
                                            onClick={deatilButtonHandler}
                                        >
                                            <span>details</span>
                                        </HoverBorderGradient>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">SegmentPI</div>
                                                <div className="text-sm opacity-50">China</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                         Fast Moving Consumer Durables
                                        <br />
                                        <span className="badge badge-ghost badge-sm text-gray-900 dark:text-gray-400 bg-gray-100 dark:bg-gray-900">Electronics</span>
                                    </td>
                                    <td>
                                        <div className="flex items-center text-green-500 text-xs">
                                            <FaArrowUp />
                                            <div className='flex flex-col'>
                                                <span className="ml-1">Rs.4,567.00 </span>
                                                <span className="ml-1">+7.89%</span>
                                            </div>
                                        </div>
                                    </td>
                                    <th>
                                        <HoverBorderGradient
                                            containerClassName="rounded-full"
                                            as="button"
                                            className="bg-white text-black border border-black flex justify-center items-center space-x-2 gradient-button"
                                            onClick={deatilButtonHandler}
                                        >
                                            <span>details</span>
                                        </HoverBorderGradient>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">ConinAI</div>
                                                <div className="text-sm opacity-50">Russia</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Smart Automation 
                                        <br />
                                        <span className="badge badge-ghost badge-sm text-gray-900 dark:text-gray-400 bg-gray-100 dark:bg-gray-900">Technology</span>
                                    </td>
                                    <td>
                                        <div className="flex items-center text-green-500 text-xs">
                                            <FaArrowUp />
                                            <div className='flex flex-col'>
                                                <span className="ml-1">Rs.4,567.00 </span>
                                                <span className="ml-1">+7.89%</span>
                                            </div>
                                        </div>
                                    </td>
                                    <th>
                                        <HoverBorderGradient
                                            containerClassName="rounded-full"
                                            as="button"
                                            className="bg-white text-black border border-black flex justify-center items-center space-x-2 gradient-button"
                                            onClick={deatilButtonHandler}
                                        >
                                            <span>details</span>
                                        </HoverBorderGradient>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">YacnCo.</div>
                                                <div className="text-sm opacity-50">Brazil</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Distribution and Supplies
                                        <br />
                                        <span className="badge badge-ghost badge-sm text-gray-900 dark:text-gray-400 bg-gray-100 dark:bg-gray-900">Community</span>
                                    </td>
                                    <td>
                                        <div className="flex items-center text-green-500 text-xs">
                                            <FaArrowUp />
                                            <div className='flex flex-col'>
                                                <span className="ml-1">Rs.4,567.00 </span>
                                                <span className="ml-1">+7.89%</span>
                                            </div>
                                        </div>
                                    </td>
                                    <th>
                                        <HoverBorderGradient
                                            containerClassName="rounded-full"
                                            as="button"
                                            className="bg-white text-black border border-black flex justify-center items-center space-x-2 gradient-button"
                                            onClick={deatilButtonHandler}
                                        >
                                            <span>details</span>
                                        </HoverBorderGradient>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="/profit.png"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Hart Hagerty</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Manufacturing, Distribution, Services
                                        <br />
                                        <span className="badge badge-ghost badge-sm text-gray-900 dark:text-gray-400 bg-gray-100 dark:bg-gray-900">Information technology</span>
                                    </td>
                                    <td>
                                        <div className="flex items-center text-green-500 text-xs">
                                            <FaArrowUp />
                                            <div className='flex flex-col'>
                                                <span className="ml-1">Rs.4,567.00 </span>
                                                <span className="ml-1">+7.89%</span>
                                            </div>
                                        </div>
                                    </td>
                                    <th>
                                        <HoverBorderGradient
                                            containerClassName="rounded-full"
                                            as="button"
                                            className="bg-white text-black border border-black flex justify-center items-center space-x-2 gradient-button"
                                            onClick={deatilButtonHandler}
                                        >
                                            <span>details</span>
                                        </HoverBorderGradient>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">TelNet Communications</div>
                                                <div className="text-sm opacity-50">China</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                         Fast Moving Consumer Durables
                                        <br />
                                        <span className="badge badge-ghost badge-sm text-gray-900 dark:text-gray-400 bg-gray-100 dark:bg-gray-900">Electronics</span>
                                    </td>
                                    <td>
                                        <div className="flex items-center text-green-500 text-xs">
                                            <FaArrowUp />
                                            <div className='flex flex-col'>
                                                <span className="ml-1">Rs.4,567.00 </span>
                                                <span className="ml-1">+7.89%</span>
                                            </div>
                                        </div>
                                    </td>
                                    <th>
                                        <HoverBorderGradient
                                            containerClassName="rounded-full"
                                            as="button"
                                            className="bg-white text-black border border-black flex justify-center items-center space-x-2 gradient-button"
                                            onClick={deatilButtonHandler}
                                        >
                                            <span>details</span>
                                        </HoverBorderGradient>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">ConsumerAI</div>
                                                <div className="text-sm opacity-50">Russia</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Smart Automation 
                                        <br />
                                        <span className="badge badge-ghost badge-sm text-gray-900 dark:text-gray-400 bg-gray-100 dark:bg-gray-900">Technology</span>
                                    </td>
                                    <td>
                                        <div className="flex items-center text-green-500 text-xs">
                                            <FaArrowUp />
                                            <div className='flex flex-col'>
                                                <span className="ml-1">Rs.4,567.00 </span>
                                                <span className="ml-1">+7.89%</span>
                                            </div>
                                        </div>
                                    </td>
                                    <th>
                                        <HoverBorderGradient
                                            containerClassName="rounded-full"
                                            as="button"
                                            className="bg-white text-black border border-black flex justify-center items-center space-x-2 gradient-button"
                                            onClick={deatilButtonHandler}
                                        >
                                            <span>details</span>
                                        </HoverBorderGradient>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">CommuniAI</div>
                                                <div className="text-sm opacity-50">Brazil</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Distribution and Supplies
                                        <br />
                                        <span className="badge badge-ghost badge-sm text-gray-900 dark:text-gray-400 bg-gray-100 dark:bg-gray-900">Community</span>
                                    </td>
                                    <td>
                                        <div className="flex items-center text-green-500 text-xs">
                                            <FaArrowUp />
                                            <div className='flex flex-col'>
                                                <span className="ml-1">Rs.4,567.00 </span>
                                                <span className="ml-1">+7.89%</span>
                                            </div>
                                        </div>
                                    </td>
                                    <th>
                                        <HoverBorderGradient
                                            containerClassName="rounded-full"
                                            as="button"
                                            className="bg-white text-black border border-black flex justify-center items-center space-x-2 gradient-button"
                                            onClick={deatilButtonHandler}
                                        >
                                            <span>details</span>
                                        </HoverBorderGradient>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="/profit.png"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Hart Hagerty</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Manufacturing, Distribution, Services
                                        <br />
                                        <span className="badge badge-ghost badge-sm text-gray-900 dark:text-gray-400 bg-gray-100 dark:bg-gray-900">Information technology</span>
                                    </td>
                                    <td>
                                        <div className="flex items-center text-green-500 text-xs">
                                            <FaArrowUp />
                                            <div className='flex flex-col'>
                                                <span className="ml-1">Rs.4,567.00 </span>
                                                <span className="ml-1">+7.89%</span>
                                            </div>
                                        </div>
                                    </td>
                                    <th>
                                        <HoverBorderGradient
                                            containerClassName="rounded-full"
                                            as="button"
                                            className="bg-white text-black border border-black flex justify-center items-center space-x-2 gradient-button"
                                            onClick={deatilButtonHandler}
                                        >
                                            <span>details</span>
                                        </HoverBorderGradient>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Optika Telecom</div>
                                                <div className="text-sm opacity-50">China</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                         Fast Moving Consumer Durables
                                        <br />
                                        <span className="badge badge-ghost badge-sm text-gray-900 dark:text-gray-400 bg-gray-100 dark:bg-gray-900">Electronics</span>
                                    </td>
                                    <td>
                                        <div className="flex items-center text-green-500 text-xs">
                                            <FaArrowUp />
                                            <div className='flex flex-col'>
                                                <span className="ml-1">Rs.4,567.00 </span>
                                                <span className="ml-1">+7.89%</span>
                                            </div>
                                        </div>
                                    </td>
                                    <th>
                                        <HoverBorderGradient
                                            containerClassName="rounded-full"
                                            as="button"
                                            className="bg-white text-black border border-black flex justify-center items-center space-x-2 gradient-button"
                                            onClick={deatilButtonHandler}
                                        >
                                            <span>details</span>
                                        </HoverBorderGradient>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">AutoSmart</div>
                                                <div className="text-sm opacity-50">Russia</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Smart Automation 
                                        <br />
                                        <span className="badge badge-ghost badge-sm text-gray-900 dark:text-gray-400 bg-gray-100 dark:bg-gray-900">Technology</span>
                                    </td>
                                    <td>
                                        <div className="flex items-center text-green-500 text-xs">
                                            <FaArrowUp />
                                            <div className='flex flex-col'>
                                                <span className="ml-1">Rs.4,567.00 </span>
                                                <span className="ml-1">+7.89%</span>
                                            </div>
                                        </div>
                                    </td>
                                    <th>
                                        <HoverBorderGradient
                                            containerClassName="rounded-full"
                                            as="button"
                                            className="bg-white text-black border border-black flex justify-center items-center space-x-2 gradient-button"
                                            onClick={deatilButtonHandler}
                                        >
                                            <span>details</span>
                                        </HoverBorderGradient>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Change Infotech</div>
                                                <div className="text-sm opacity-50">Brazil</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Distribution and Supplies
                                        <br />
                                        <span className="badge badge-ghost badge-sm text-gray-900 dark:text-gray-400 bg-gray-100 dark:bg-gray-900">Community</span>
                                    </td>
                                    <td>
                                        <div className="flex items-center text-green-500 text-xs">
                                            <FaArrowUp />
                                            <div className='flex flex-col'>
                                                <span className="ml-1">Rs.4,567.00 </span>
                                                <span className="ml-1">+7.89%</span>
                                            </div>
                                        </div>
                                    </td>
                                    <th>
                                        <HoverBorderGradient
                                            containerClassName="rounded-full"
                                            as="button"
                                            className="bg-white text-black border border-black flex justify-center items-center space-x-2 gradient-button"
                                            onClick={deatilButtonHandler}
                                        >
                                            <span>details</span>
                                        </HoverBorderGradient>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="/profit.png"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Hart Hagerty</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Manufacturing, Distribution, Services
                                        <br />
                                        <span className="badge badge-ghost badge-sm text-gray-900 dark:text-gray-400 bg-gray-100 dark:bg-gray-900">Information technology</span>
                                    </td>
                                    <td>
                                        <div className="flex items-center text-green-500 text-xs">
                                            <FaArrowUp />
                                            <div className='flex flex-col'>
                                                <span className="ml-1">Rs.4,567.00 </span>
                                                <span className="ml-1">+7.89%</span>
                                            </div>
                                        </div>
                                    </td>
                                    <th>
                                        <HoverBorderGradient
                                            containerClassName="rounded-full"
                                            as="button"
                                            className="bg-white text-black border border-black flex justify-center items-center space-x-2 gradient-button"
                                            onClick={deatilButtonHandler}
                                        >
                                            <span>details</span>
                                        </HoverBorderGradient>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">SuperConduce</div>
                                                <div className="text-sm opacity-50">China</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                         Fast Moving Consumer Durables
                                        <br />
                                        <span className="badge badge-ghost badge-sm text-gray-900 dark:text-gray-400 bg-gray-100 dark:bg-gray-900">Electronics</span>
                                    </td>
                                    <td>
                                        <div className="flex items-center text-green-500 text-xs">
                                            <FaArrowUp />
                                            <div className='flex flex-col'>
                                                <span className="ml-1">Rs.4,567.00 </span>
                                                <span className="ml-1">+7.89%</span>
                                            </div>
                                        </div>
                                    </td>
                                    <th>
                                        <HoverBorderGradient
                                            containerClassName="rounded-full"
                                            as="button"
                                            className="bg-white text-black border border-black flex justify-center items-center space-x-2 gradient-button"
                                            onClick={deatilButtonHandler}
                                        >
                                            <span>details</span>
                                        </HoverBorderGradient>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">HackChange Ltd.</div>
                                                <div className="text-sm opacity-50">Russia</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Smart Automation 
                                        <br />
                                        <span className="badge badge-ghost badge-sm text-gray-900 dark:text-gray-400 bg-gray-100 dark:bg-gray-900">Technology</span>
                                    </td>
                                    <td>
                                        <div className="flex items-center text-green-500 text-xs">
                                            <FaArrowUp />
                                            <div className='flex flex-col'>
                                                <span className="ml-1">Rs.4,567.00 </span>
                                                <span className="ml-1">+7.89%</span>
                                            </div>
                                        </div>
                                    </td>
                                    <th>
                                        <HoverBorderGradient
                                            containerClassName="rounded-full"
                                            as="button"
                                            className="bg-white text-black border border-black flex justify-center items-center space-x-2 gradient-button"
                                            onClick={deatilButtonHandler}
                                        >
                                            <span>details</span>
                                        </HoverBorderGradient>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Change Infotech</div>
                                                <div className="text-sm opacity-50">Brazil</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Distribution and Supplies
                                        <br />
                                        <span className="badge badge-ghost badge-sm text-gray-900 dark:text-gray-400 bg-gray-100 dark:bg-gray-900">Community</span>
                                    </td>
                                    <td>
                                        <div className="flex items-center text-green-500 text-xs">
                                            <FaArrowUp />
                                            <div className='flex flex-col'>
                                                <span className="ml-1">Rs.4,567.00 </span>
                                                <span className="ml-1">+7.89%</span>
                                            </div>
                                        </div>
                                    </td>
                                    <th>
                                        <HoverBorderGradient
                                            containerClassName="rounded-full"
                                            as="button"
                                            className="bg-white text-black border border-black flex justify-center items-center space-x-2 gradient-button"

                                        >
                                            <span>details</span>
                                        </HoverBorderGradient>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='flex flex-col space-y-4 p-6 w-1/3'>
                    <div className='flex flex-col w-full'>
                        <div className='flex justify-center p-8'>
                            <HoverBorderGradient
                                containerClassName="rounded-full"
                                as="button"
                                className="bg-white text-black border border-black flex justify-center items-center space-x-2 gradient-button"
                                onClick={ispoButtonHandler}
                            >
                                <span>Apply for ISPO</span>
                            </HoverBorderGradient>
                        </div>
                        <div className='w-full h-full'>
                            <div className=' w-full h-full flex flex-col space-y-2 justify-end'>
                                <h2 className="mx-auto w-3/4 items-center flex justify-center text-sm md:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4535C1] to-[#ca628c] dark:to-[#4535C1] dark:from-[#ca628c]">
                                    Top Gainers</h2>
                                <CardContainer className="w-full  ">
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
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center text-green-500 text-xs">
                                                        <FaArrowUp />
                                                        <div className='flex flex-col'>
                                                            <span className="ml-1">Rs.36,782.00 </span>
                                                            <span className="ml-1">+10.78%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardItem>
                                    </CardBody>
                                </CardContainer>

                                <CardContainer className="w-full  ">
                                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex justify-center">
                                        <CardItem
                                            as="div"
                                            translateZ="60"
                                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 w-full"
                                        >
                                            <div className='flex flex-row w-full item-center justify-between'>
                                                <div className='flex items-center font-bold'>
                                                    DevelopersAI
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
                                            </div>
                                        </CardItem>
                                    </CardBody>
                                </CardContainer>

                                <CardContainer className="w-full  ">
                                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex justify-center">
                                        <CardItem
                                            as="div"
                                            translateZ="60"
                                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 w-full"
                                        >
                                            <div className='flex flex-row w-full item-center justify-between'>
                                                <div className='flex items-center font-bold'>
                                                    GainUI
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="flex items-center text-green-500 text-xs">
                                                        <FaArrowUp />
                                                        <div className='flex flex-col'>
                                                            <span className="ml-1">Rs.8,567.00 </span>
                                                            <span className="ml-1">+5.59%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardItem>
                                    </CardBody>
                                </CardContainer>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='w-full h-full'>
                            <div className=' w-full h-full flex flex-col space-y-2 justify-end'>
                                <h2 className="mx-auto w-3/4 items-center flex justify-center text-sm md:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4535C1] to-[#ca628c] dark:to-[#4535C1] dark:from-[#ca628c]">
                                    Top Losers</h2>
                                <CardContainer className="w-full  ">
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
                                                            <span className="ml-1">-14.77% </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardItem>
                                    </CardBody>
                                </CardContainer>

                                <CardContainer className="w-full  ">
                                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex justify-center">
                                        <CardItem
                                            as="div"
                                            translateZ="60"
                                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 w-full"
                                        >
                                            <div className='flex flex-row w-full item-center justify-between'>
                                                <div className='flex items-center font-bold'>
                                                    LosUI Technologies
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="flex items-center text-red-500 text-xs">
                                                        <FaArrowDown />
                                                        <div className='flex flex-col'>
                                                            <span className="ml-1">Rs.11,185.05 </span>
                                                            <span className="ml-1">-10.97% </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardItem>
                                    </CardBody>
                                </CardContainer>
                                <CardContainer className="w-full  ">
                                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex justify-center">
                                        <CardItem
                                            as="div"
                                            translateZ="60"
                                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 w-full"
                                        >
                                            <div className='flex flex-row w-full item-center justify-between'>
                                                <div className='flex items-center font-bold'>
                                                    Selenium Telecom
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="flex items-center text-red-500 text-xs">
                                                        <FaArrowDown />
                                                        <div className='flex flex-col'>
                                                            <span className="ml-1">Rs.3,785.05 </span>
                                                            <span className="ml-1">-4.96% </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardItem>
                                    </CardBody>
                                </CardContainer>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>

            </div >
            <Footer />
        </>
    )
}

export default Listing
