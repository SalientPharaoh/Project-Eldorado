'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import NavBar from '@/components/navbar';
import { CardBody, CardContainer, CardItem } from '@/components/card';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import Footer from '@/components/footers';
import { Component } from '@/components/charts/market';
import { HoverBorderGradient } from '@/components/hover-button';
import toast from 'react-hot-toast';


const Details = () => {
    const router = useRouter();
    const [buy, setBuy] = useState(false);
    const [sell, setSell] = useState(false);
    const [active, setActive] = useState(false);
    const [price, setPrice] = useState(4567);
    const [shares, setShares] = useState(1);
    const [holding, setHolding] = useState(0);

    function handleBuy() {
        toast.success("Purchase successful");
        setHolding(holding + shares);
        setShares(1);
        setPrice(4567);
        setActive(false);
        setBuy(false);
    }
    function handleSell() {
        toast.success("Stocks Sold successfully");
        setHolding(holding - shares);
        setShares(1);
        setPrice(4567);
        setActive(false);
        setSell(false);
    }

    function handleChange(e: any) {
        if (Number(e.target.value) <= 0) {
            setShares(1);
            const price = 4567 * 1.01;
            setPrice(price);
        } else {
            setShares(Number(e.target.value));
            const price = Number(e.target.value) * 4567 * 1.01;
            setPrice(price);
        }
    }

    return (
        <>
            <NavBar />
            <div className='flex flex-col md:flex-row items-center justify-center w-full p-12 bg-white dark:bg-black'>
                <div className='flex flex-col w-full h-full items-center justify-center'>
                    <div className='font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#4535C1] to-[#ca628c] dark:to-[#4535C1] dark:from-[#ca628c]'>Hart Hagerty</div>
                    <div className='text-black dark:text-white'>Location : United States</div>
                    <div className='py-5 w-3/4 text-justify text-black dark:text-white'>Hart Hagerty is a leading American company specializing in the manufacturing, distribution, and services sectors with a strong focus on integrating advanced information technology solutions. Founded in [Year], the company has consistently been at the forefront of innovation, delivering high-quality products and services that meet the diverse needs of its clientele.</div>
                    <div>Domain : Manufacturing, Distribution, Services (Information Technology)</div>
                </div>
                <div className='w-full p-10 md:p-0 md:w-1/3'>
                    <div className='w-full h-full'>
                        <div className=' w-full h-full flex flex-col space-y-2 justify-end'>
                            <h2 className="mx-auto w-3/4 items-center flex justify-center text-sm md:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4535C1] to-[#ca628c] dark:to-[#4535C1] dark:from-[#ca628c]">
                                Company Metrics</h2>
                            <CardContainer className="w-full">
                                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex justify-center">
                                    <CardItem
                                        as="div"
                                        translateZ="60"
                                        className="text-neutral-500 font-bold text-sm max-w-sm mt-2 dark:text-neutral-300 w-full"
                                    >
                                        <div>
                                            Valuation : Rs.10 Cr.
                                        </div>
                                        <div>
                                            Sales : Rs. 5 Cr per Annum
                                        </div>
                                        <div>
                                            EBITDA : 32%
                                        </div>
                                        <div>
                                            Gross Margin : 17%
                                        </div>
                                        <div>
                                            Team size : 28
                                        </div>
                                    </CardItem>
                                </CardBody>
                            </CardContainer>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-10 bg-white dark:bg-black'>
                <div className='flex gap-5 pb-6 items-end justify-end'>
                    <div className="flex items-center text-green-500 text-xs">
                        <FaArrowUp />
                        <div className='flex flex-col'>
                            <span className="ml-1">Rs.4,567.00 </span>
                            <span className="ml-1">+7.89%</span>
                        </div>
                    </div>
                    <div className="flex items-center text-green-900 md:text-green-500 text-xs">
                        <FaArrowUp />
                        <div className='flex flex-col'>
                            <span className="ml-1">O: Rs.4,467.00 </span>
                            <span className="ml-1">+5.19%</span>
                        </div>
                    </div>
                    <div className="flex items-center text-red-500 text-xs">
                        <FaArrowDown />
                        <div className='flex flex-col'>
                            <span className="ml-1">H: Rs.4,997.00 </span>
                            <span className="ml-1">-3.42%</span>
                        </div>
                    </div>
                    <div className="flex items-center text-green-900 md:text-green-500 text-xs">
                        <FaArrowUp />
                        <div className='flex flex-col'>
                            <span className="ml-1">L: Rs.4,167.00 </span>
                            <span className="ml-1">+6.89%</span>
                        </div>
                    </div>
                    <div className="flex items-center text-green-900 md:text-green-500 text-xs">
                        <FaArrowUp />
                        <div className='flex flex-col'>
                            <span className="ml-1">C: Rs.4,567.00 </span>
                            <span className="ml-1">+7.89%</span>
                        </div>
                    </div>
                </div>
                <Component />
                <div className='p-10 flex items-center justify-center'>
                    Visit compant site : <a href='https://harthagerty.com' target='_blank' rel='noopener noreferrer' className='hover:text-[#ca628c]'>Hart Hagerty</a>
                </div>
            </div>
            <div className='flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-4 justify-center bg-white dark:bg-black'>
                {!active && (
                    <>
                        <div className='btn btn-wide btn-outline btn-success' onClick={() => { setBuy(true); setActive(true); }}>
                            BUY
                        </div>
                        <div className='btn btn-wide btn-outline btn-error' onClick={() => { setSell(true); setActive(true); }}>
                            SELL
                        </div>
                    </>
                )}
                {buy && (
                    <div className="card dark:bg-black border glass w-96 shadow-xl">
                        <div className="card-body">
                            <div className="card-actions justify-end">
                                <button className="btn btn-square bg-white dark:bg-transparent hover:bg-gray-200 btn-sm border-none dark:hover:bg-gray-900" onClick={() => { setActive(false); setBuy(false); setSell(false); }}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className='flex flex-col justify-center items-center space-y-4 py-4'>
                                <div className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4535C1] to-[#ca628c] dark:to-[#4535C1] dark:from-[#ca628c]'>Buy Shares</div>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Enter the Number of Shares</span>
                                    </div>
                                    <input type="number" value={shares} placeholder="Number of shares" className="input bg-white dark:bg-black  input-bordered w-full max-w-xs" onChange={handleChange} />
                                </label>
                                <div className='pt-5'>
                                    <HoverBorderGradient
                                        containerClassName="rounded-full"
                                        as="button"
                                        className="bg-white text-black border border-black flex justify-center items-center space-x-2 h-10 gradient-button w-full"
                                        onClick={handleBuy}
                                    >
                                        <span>Buy Shares for Rs.{price}</span>
                                    </HoverBorderGradient>
                                </div>
                            </div>
                            <div className='text-xs text-center'>*brokrage of 1% will be charged on transaction</div>
                        </div>
                    </div>
                )}
                {sell && (
                    <div className="card dark:bg-black border glass w-96 shadow-xl">
                        <div className="card-body">
                            <div className="card-actions justify-end">
                                <button className="btn btn-square bg-white dark:bg-transparent hover:bg-gray-200 btn-sm border-none dark:hover:bg-gray-900" onClick={() => { setActive(false); setBuy(false); setSell(false); }}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className='flex flex-col justify-center items-center space-y-4 py-4'>
                                <div className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4535C1] to-[#ca628c] dark:to-[#4535C1] dark:from-[#ca628c]'>Sell Shares</div>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Enter the Number of Shares</span>
                                    </div>
                                    <input type="number" value={shares} placeholder="Number of shares" className="input bg-white dark:bg-black  input-bordered w-full max-w-xs" onChange={handleChange} />
                                </label>
                                <div className="label">
                                    <span className="label-text">Current Holding : {holding}</span>
                                </div>
                                <div className='pt-5'>
                                    <HoverBorderGradient
                                        containerClassName="rounded-full"
                                        as="button"
                                        className="bg-white text-black border border-black flex justify-center items-center space-x-2 h-10 gradient-button w-full"
                                        onClick={handleSell}
                                    >
                                        <span>Sell Shares for Rs.{price}</span>
                                    </HoverBorderGradient>
                                </div>
                            </div>
                            <div className='text-xs text-center'>*brokrage of 1% will be charged on transaction</div>
                        </div>
                    </div>
                )}
            </div>
            <div className='flex flex-row w-full p-20 items-center justify-cente bg-white dark:bg-black'>
                <div className='flex flex-col w-full h-full items-center justify-center'>
                    <div className='font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#4535C1] to-[#ca628c] dark:to-[#4535C1] dark:from-[#ca628c]'>Hart Hagerty</div>
                    <div className='text-black dark:text-white'>Location : United States</div>
                    <div className='py-5 w-3/4 flex flex-col md:flex-row gap-8  text-black dark:text-white'>
                        <div className="core-services">
                            <div className='flex items-center justify-center font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#4535C1] to-[#ca628c] dark:to-[#4535C1] dark:from-[#ca628c] py-4'>Core Services</div>
                            <ul>
                                <li><strong>Custom Manufacturing:</strong> Tailored production solutions to meet specific client requirements.</li>
                                <li><strong>Distribution Services:</strong> Efficient and reliable distribution channels for a wide range of products.</li>
                                <li><strong>IT Services:</strong> Comprehensive IT support and services, including system integration, software development, and cybersecurity solutions.</li>
                            </ul>
                        </div>

                        <div className="achievements-certifications">
                            <div className='flex items-center justify-center font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#4535C1] to-[#ca628c] dark:to-[#4535C1] dark:from-[#ca628c] py-4'>Points to Consider</div>
                            <ul>
                                <li><strong>Innovation Leader:</strong> Recognized for groundbreaking innovations in manufacturing and IT solutions.</li>
                                <li><strong>ISO 9001 Certification:</strong> Ensuring quality management systems meet international standards.</li>
                                <li><strong>Sustainability Initiatives:</strong> Awarded for significant contributions to sustainable business practices and environmental stewardship.</li>
                                <li><strong>Customer Excellence Awards:</strong> Multiple accolades for outstanding customer service and support.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >

            <Footer />
        </>
    )
}

export default Details;
