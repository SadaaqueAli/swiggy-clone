import React, { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { MdManageSearch } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { TbRosetteDiscount } from "react-icons/tb";
import { MdAssignmentInd } from "react-icons/md";
import { BsCartCheck } from "react-icons/bs";

export default function Header() {
    const [toggle, setToggle] = useState(false);

    const showSideMenu = () => {
        setToggle(true);
    }

    const hideSideMenu = () => {
        setToggle(false);
    }

    const links = [
        {
            icon: <MdManageSearch />,
            name: "Search"
        },
        {
            icon: <TbRosetteDiscount />,
            name: "Offers",
            sup: "New"
        },
        {
            icon: <IoMdHelpCircleOutline />,
            name: "Help"
        },
        {
            icon: <MdAssignmentInd />,
            name: "Sign In"
        },
        {
            icon: <BsCartCheck />,
            name: "Cart"
        }
    ];

    return (
        <>
            {/* Overlay */}
            <div className={`black-overlay w-full h-full fixed top-0 left-0 duration-500 z-[1000] ${toggle ? 'visible opacity-100' : 'invisible opacity-0'}`} 
                onClick={hideSideMenu} 
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                {/* Side menu */}
                <div onClick={(e) => e.stopPropagation()} 
                    className={`w-[300px] sm:w-[500px] bg-white h-full absolute left-0 duration-[400ms] z-[1010] ${toggle ? 'translate-x-0' : '-translate-x-full'}`}>
                    {/* Side menu content */}
                    <nav className="p-20">
                        <h2 className="text-xl font-bold mt-6 text-center">Find your location</h2>
                        <div className='flex justify-center items-center mt-4 gap-2'>
                            <input
                                type="text"
                                placeholder="Search for your location"
                                className="w-[200px] p-2 border border-gray-300 rounded focus:outline-none focus:border-[#fc8019]"
                            />
                            <button className="p-2 bg-[#fc8019] text-white rounded hover:bg-[#dd7341] transition duration-200">
                                Find
                            </button>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Main header */}
            <header className='p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[999]'>
                <div className='max-w-[1200px] mx-auto flex items-center'>
                    <div className='w-[50px] h-auto'>
                        <img src="images/logo.png" className='w-full h-auto' alt="Logo" />
                    </div>

                    {/* City and toggle icon */}
                    <div className='ml-4'>
                        <span className='font-bold border-b-[3px] border-[black]'>Karachi</span> Islamabad, Lahore, Pakistan
                        <RxCaretDown fontSize={30} className='inline text-red-500 cursor-pointer' onClick={showSideMenu} />
                    </div>

                    {/* Navigation links */}
                    <nav className='hidden md:flex list-none gap-5 ml-auto text-[18px] font-semibold'>
                        {links.map((link, index) => (
                            <li key={index} className='flex hover:text-gray-400 cursor-pointer items-center'>
                                <span className='mr-1 text-red-500'>{link.icon}</span>
                                {link.name}
                                {link.sup && <sup className='text-red-500'>{link.sup}</sup>}
                            </li>
                        ))}
                    </nav>
                </div>
            </header>
        </>
    );
}
