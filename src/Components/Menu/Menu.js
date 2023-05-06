import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import './Menu.css'
import MobileMenu from './MobileMenu';

const Menu = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <div className='nav__bar py-[10px] text-[#fff] fixed w-[100%] left-0 top-0 bg-[#0E1C2F] z-[999]'>
            <div className='container'>
                <div className='navBar__inner flex justify-between items-center'>
                    <div className='logo'>
                        {/* <a href='#!'><img src='https://dora-react.vercel.app/images/logo.png' alt='img'/></a> */}
                        <a className='text-[40px] text-[#fff] font-bold' href='#'>TAJ<span className='text-[#72E2AE]'>DEV</span></a>
                    </div>
                    <div className='menu hidden md:block'>
                        <ul className='flex justify-between '>
                            <li className='text-[17px] font-[600] pr-[20px]'><a href='#'>Home</a></li>
                            <li className='text-[17px] font-[600] px-[20px]'><a href='#about'>About</a></li>
                            <li className='text-[17px] font-[600] px-[20px]'><a href='#work'>Works</a></li>
                            <li className='text-[17px] font-[600] pl-[20px]'><a href='#contact'>Contact</a></li>
                        </ul>
                    </div>
                    <div className="menu__icon block md:hidden" onClick={()=>setClicked(true)}>
                        <span className='text-[28px] font-bold cursor-pointer'><HiMenu/></span>
                    </div>
                </div>
            </div>
            <MobileMenu clicked={clicked} setClicked={setClicked} ></MobileMenu>
        </div>
    );
};

export default Menu;