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
        console.log("chla hoooonnnnn")
        setToggle(true);
    }
    const hideSideMenu = () => {
        console.log("hide hua hoon")
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
            <div className='black-overly w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? "visible" : "hidden"

            }}>
                <div onClick={(e) => {
                    e.stopPropagation();
                }} className='w-[500px] bg-white h-full absolute duration-[400ms]' style={{
                    left: toggle ? "0%" : "-100%",
                }}>

                </div>
            </div>

            <header className='p-[15px] shadow-xl text-[#686b78]'>
                <div className='max-w-[1200px] mx-auto flex items-center'>
                    <div className='w-[50px] h-auto'>
                        <img src="images/logo.png" className='w-full h-auto' alt="" />
                    </div>
                    <div className='ml-4'>
                        <span className='font-bold border-b-[3px] border-[black]'>Karachi</span> Islamabad,
                        Lahore,Pakistan<RxCaretDown fontSize={30} className='inline text-[#dd7341]
                         cursor-pointer'onClick={showSideMenu} />
                    </div>
                    <nav className='flex list-none gap-5 ml-auto text-[18px] font-semibold'>
                        {
                            links.map((link, index) => {
                                return (
                                    <li key={index} className='flex hover:text-[#fc8019] cursor-pointer 
                                    items-center'>
                                        <span className='mr-1'>{link.icon}</span>
                                        {link.name}
                                        <sup>{link.sup}</sup>
                                    </li>
                                );
                            })
                        }
                    </nav>

                </div>
            </header>
        </>
    );
}
