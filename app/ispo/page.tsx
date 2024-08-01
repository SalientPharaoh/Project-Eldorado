'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import NavBar from '@/components/navbar';
import Footer from '@/components/footers';
import { HoverBorderGradient } from '@/components/hover-button';
import { toast } from 'react-hot-toast';



const ISPO = () => {
    const router = useRouter();
    const [company, setCompany] = React.useState('');

    function handleClick() {
        toast.success('Placed the Bid successfully');
        router.push('/dashboard');
    }


    return (
        <>
            <NavBar />

            {company && (
                <div className='flex items-start justify-center p-20 h-screen bg-white dark:bg-black'>
                    <div className="card dark:bg-black border glass w-96 shadow-xl">
                        <div className="card-body">
                            <div className="card-actions justify-end">
                                <button className="btn btn-square bg-white dark:bg-transparent hover:bg-gray-200 btn-sm border-none dark:hover:bg-gray-900" onClick={() => { setCompany('') }}>
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
                                <div className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4535C1] to-[#ca628c] dark:to-[#4535C1] dark:from-[#ca628c]'>Apply for {company}</div>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Enter the Bid amount</span>
                                    </div>
                                    <input type="number" placeholder="Bid amount" className="input bg-white dark:bg-black input-bordered w-full max-w-xs" />
                                </label>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Enter the Number of Shares</span>
                                    </div>
                                    <input type="number" placeholder="Number of shares" className="input bg-white dark:bg-black  input-bordered w-full max-w-xs" />
                                </label>
                                <div className='pt-5'>
                                    <HoverBorderGradient
                                        containerClassName="rounded-full"
                                        as="button"
                                        className="bg-white text-black border border-black flex justify-center items-center space-x-2 w-40 h-10 gradient-button"
                                        onClick={handleClick}
                                    >
                                        <span>Submit Bid</span>
                                    </HoverBorderGradient>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {!company && (
                <div className='w-full p-10 space-x-4 h-screen bg-white dark:bg-black'>
                    <div className="overflow-x-auto">
                        <table className="table text-black dark:text-white">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Category</th>
                                    <th>Bid Price</th>
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
                                        <div className="flex items-center text-green-800 dark:text-green-500 text-xs">
                                            <div className='flex flex-col'>
                                                <span className="ml-1">Rs.4,567.00 </span>
                                                <span className="ml-1">Valuation : 2Cr</span>
                                            </div>
                                        </div>
                                    </td>
                                    <th>
                                        <HoverBorderGradient
                                            containerClassName="rounded-full"
                                            as="button"
                                            className="bg-white text-black border border-black flex justify-center items-center space-x-2 gradient-button"
                                            onClick={() => { setCompany('Hart Hagerty') }}
                                        >
                                            <span>Apply</span>
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
                                        <div className="flex items-center text-green-800 dark:text-green-500 text-xs">
                                            <div className='flex flex-col'>
                                                <span className="ml-1">Rs.1,567.00 </span>
                                                <span className="ml-1">Valuation : 5Cr</span>
                                            </div>
                                        </div>
                                    </td>
                                    <th>
                                        <HoverBorderGradient
                                            containerClassName="rounded-full"
                                            as="button"
                                            className="bg-white text-black border border-black flex justify-center items-center space-x-2 gradient-button"
                                            onClick={() => { setCompany('SegmentPI') }}
                                        >
                                            <span>Apply</span>
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
                                        <div className="flex items-center text-green-800 dark:text-green-500 text-xs">
                                            <div className='flex flex-col'>
                                                <span className="ml-1">Rs.8,567.00 </span>
                                                <span className="ml-1">Valuation : 15Cr</span>
                                            </div>
                                        </div>
                                    </td>
                                    <th>
                                        <HoverBorderGradient
                                            containerClassName="rounded-full"
                                            as="button"
                                            className="bg-white text-black border border-black flex justify-center items-center space-x-2 gradient-button"
                                            onClick={() => { setCompany('ConinAI') }}
                                        >
                                            <span>Apply</span>
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
                                        <div className="flex items-center text-green-800 dark:text-green-500 text-xs">
                                            <div className='flex flex-col'>
                                                <span className="ml-1">Rs.567.00 </span>
                                                <span className="ml-1">Valuation : 67L</span>
                                            </div>
                                        </div>
                                    </td>
                                    <th>
                                        <HoverBorderGradient
                                            containerClassName="rounded-full"
                                            as="button"
                                            className="bg-white text-black border border-black flex justify-center items-center space-x-2 gradient-button"
                                            onClick={() => { setCompany('YacnCo.') }}
                                        >
                                            <span>Apply</span>
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
                                        <div className="flex items-center text-green-800 dark:text-green-500 text-xs">
                                            <div className='flex flex-col'>
                                                <span className="ml-1">Rs.9,567.00 </span>
                                                <span className="ml-1">Valuation : 42Cr</span>
                                            </div>
                                        </div>
                                    </td>
                                    <th>
                                        <HoverBorderGradient
                                            containerClassName="rounded-full"
                                            as="button"
                                            className="bg-white text-black border border-black flex justify-center items-center space-x-2 gradient-button"
                                            onClick={() => { setCompany('Hart Hagerty') }}
                                        >
                                            <span>Apply</span>
                                        </HoverBorderGradient>
                                    </th>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            <Footer />
        </>
    )
}

export default ISPO;
