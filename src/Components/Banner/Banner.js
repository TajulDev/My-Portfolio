import React from 'react';
import Typewriter from 'typewriter-effect';
import BannerBtn from './BannerBtn';
import Owner from '../../Images/Profile/mine.png'

import { AiOutlineHtml5} from 'react-icons/ai';
// import * as Icons from 'react-icons/all/lib';
import { TbBrandJavascript } from 'react-icons/tb';
// import { FaReact } from 'react-icons/fa';
import { FaReact, FaWordpressSimple } from 'react-icons/fa';

import './Banner.css'

const Banner = () => {
    return (
        <section className='banner__section pb-[80px] pt-[140px] lg:pt-[0] h-[100%] lg:h-[85vh] flex'>
            <div className='container'>
                <div className='banner__inner'>
                    <div className='flex-wrap lg:flex items-center'>
                        <div className='banner__left mb-[40px] lg:mb-[0] w-[100%] lg:w-[50%]'>
                            <h1 className='text-[24px] sm:text-[38px] xl:text-[48px] text-center lg:text-start font-[700] text-[#fff]'>Hi There 
                                <div className='flex justify-center lg:justify-start'> I'm 
                                    <span className='ml-[10px] text-[#72E2AE]'><Typewriter
                                        options={{
                                            strings: [' Tajul Islam', ' A Creative WebDesigner', ' Front-End Developer', ' Wordpress Designer'],
                                            autoStart: true,
                                            loop: true,
                                            typeSpeed: 30,
                                            delay: 50,
                                            deleteSpeed: 30,
                                        }}
                                        />
                                    </span>
                                </div> 
                            </h1>
                            <p className='max-w-[100%] lg:max-w-[480px] text-center lg:text-start text-[18px] leading-[28px] text-[#fff] mt-[20px] mb-[25px]'>
                                I am a full-stack web developer skilled in creating interactive and user-friendly websites with clean code and pixel-perfect designs.
                            </p>
                            
                            <BannerBtn></BannerBtn>
                        </div>
                        <div className='banner__right w-[100%] lg:w-[50%]'>
                            <div className='relative max-w-[500px] m-[auto] lg:ml-[auto]'>
                                <img className='w-[100%] h-[100%] z-[991] relative' src={Owner} />
                                <span className='anime__icon absolute top-[20px] left-0 h-[70px] w-[70px] text-[50px] flex justify-center items-center text-[#FF5733] border-[3px] border-[#FF5733] rounded-[50%]'>
                                    <AiOutlineHtml5/>
                                </span>
                                <span className='anime__icon absolute top-[60px] right-0 h-[70px] w-[70px] text-[50px] flex justify-center items-center text-[#F0DB4F] border-[3px] border-[#F0DB4F] rounded-[50%]'>
                                    <TbBrandJavascript/>
                                </span>
                                <span className='react__icon absolute bottom-0 right-[10px] h-[70px] w-[70px] text-[50px] flex justify-center items-center text-[#61DAFB] border-[3px] border-[#61DAFB] rounded-[50%] z-[994]'>
                                    <FaReact/>
                                </span>

                                <span className='anime__icon absolute bottom-[0] top-[60%] h-[70px] w-[70px] text-[65px] flex justify-center items-center text-[#0B6E96] z-[994]'>
                                    <FaWordpressSimple/>
                                </span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        );
};

export default Banner;