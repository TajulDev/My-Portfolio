import React from 'react';
import BannerBtn from '../Banner/BannerBtn';
import './About.css'

import myImg from '../../Images/Profile/mine2.png'

const About = () => {

    const details = [
        {
            id: 1,
            span1: 'Fist Name',
            span2: 'Tajul',
        },
        {
            id: 2,
            span1: 'Last Name',
            span2: 'Islam',
        },
        {
            id: 3,
            span1: 'Age',
            span2: '34 Years',
        },
        {
            id: 4,
            span1: 'Nationality',
            span2: 'Bangladeshi',
        },
        {
            id: 5,
            span1: 'Languages',
            span2: 'Bangali, English, Urdu',
        },
        {
            id: 6,
            span1: 'Address',
            span2: 'Mohanpur, Shyamoli, Dhaka',
        },
        {
            id: 7,
            span1: 'Freelance',
            span2: 'Full Time Available',
        }
    ]

    return (
        <section id="about" className='about__section pb-[100px]'>
            <div className='container'>
                <div className='about__inner'>
                    <div className='section__title relative overflow-hidden pb-14 text-center'>
                        <h3 className='relative z-10 mb-2 uppercase text-[34px] text-[#fff] font-bold'>ABOUT ME</h3>
                        <span className='relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-[#fff] bg-primary bg-opacity-20'>
                            <span className='about__animate absolute left-0 top-0 inline-block h-full w-1.5 rounded-full bg-[#72E2AE]'></span>
                        </span>
                        <span className='pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading text-[#fff] opacity-5'>ABOUT</span>
                    </div>
                    <div className='flex gap-[40px] md:gap-[60px] justify-between flex-col md:flex-row items-center'>
                        <div className='about__left w-[100%] lg:w-[50%] pe-[0px] lg:pe-[]'>
                            <div className='about__img relative rounded-[12px] overflow-hidden'>
                                <img className='border-[10px] rounded-[12px] border-[#72E2AE] border-opacity-20 w-[100%]' src={myImg} alt='img'/>
                                <span className='en'></span>
                                <span className='to'></span>
                                <span className='te'></span>
                                <span className='fo'></span>
                            </div>
                        </div>
                        <div className='about__right w-[100%] lg:w-[50%] ps-[0] lg:ps-[]'>
                            <h4 className='text-[28px] text-[#fff] font-bold mb-[20px]'>Hi, I am <span className='text-[#72E2AE]'>Abir Islam</span></h4>

                            <ul className='text-[#BFBECB] text-[17px] font-[600] mb-[20px]'>
                                {
                                    details.map(detail => <li key={detail.id} className='flex mb-[8px]'><span className='w-[120px]'>{detail.span1}</span> <span>: {detail.span2}</span></li>)
                                }
                            </ul>
                            <BannerBtn></BannerBtn>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;