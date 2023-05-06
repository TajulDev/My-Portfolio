import React from 'react';
import './Menu.css'

import { RxCross1 } from 'react-icons/rx';


const MobileMenu = ({clicked,setClicked}) => {
    return (
        <div className={`absolute ${clicked ? "open":"scale-x-0"} top-0 w-[100%] sm:w-[50%] h-[100vh] z-[99] bg-[#1C2336] p-[30px]`} onClick={()=>setClicked(false)}>
            <h3 className='flex justify-between items-center text-[34px] text-[#72E2AE] font-bold mb-[50px]'>
                <a href='#!'>MEDEV</a> 
                <span className='cursor-pointer text-[26px] font-bold' onClick={()=>setClicked(false)}><RxCross1/></span>
            </h3>

            <ul>
                <li className='text-[24px] mb-[20px] ps-[10px] pb-[10px] border-b-[1px] border-[#4c4a4a]'><a href="#">Home</a></li>
                <li className='text-[24px] mb-[20px] ps-[10px] pb-[10px] border-b-[1px] border-[#4c4a4a]'><a href="#about">About</a></li>
                <li className='text-[24px] mb-[20px] ps-[10px] pb-[10px] border-b-[1px] border-[#4c4a4a]'><a href="#work">Work</a></li>
                <li className='text-[24px] mb-[20px] ps-[10px] pb-[10px] border-b-[1px] border-[#4c4a4a]'><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
};
export default MobileMenu;