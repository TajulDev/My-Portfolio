import React from 'react';
import { RiQuillPenLine, RiSmartphoneLine } from 'react-icons/ri';
import { BiCodeAlt } from 'react-icons/bi';

import './Service.css'

const Service = () => {

    const services = [
        {
            id : 1,
            icon: <RiQuillPenLine />,
            number: '01',
            title: 'WordPress',
            content: 'Custom WordPress solutions tailored to your needs. Showcase your brand with a professionally designed portfolio.'
        },
        {
            id : 2,
            icon: <BiCodeAlt />,
            number: '02',
            title: 'Web Design',
            content: 'Web design" is the process of creating websites. It encompasses several different aspects, including webpage layout, content production, and graphic design'
        },
        {
            id : 3,
            icon: <RiSmartphoneLine />,
            number: '03',
            title: 'Web Development',
            content: 'Building dynamic and responsive user interfaces using React components and modern web development technologies.'
        }
    ]

    return (
        <section className='service__section pb-[100px]'>
            <div className='container'>
                <div className='service__inner'>
                    <div className='section__title relative overflow-hidden pb-14 text-center'>
                        <h3 className='relative z-10 mb-2 uppercase text-[34px] text-[#fff] font-bold'>MY SERVICES</h3>
                        <span className='relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-[#fff] bg-primary bg-opacity-20'>
                            <span className='about__animate absolute left-0 top-0 inline-block h-full w-1.5 rounded-full bg-[#72E2AE]'></span>
                        </span>
                        <span className='pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading text-[#fff] opacity-5'>SERVICES</span>
                    </div>

                    <div className="services grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                        {
                            services.map(service => {
                                // const [icon, number, title, content] = service
                                return(
                                    <div className='service text-[#fff] bg-[#ffffff0a] p-[20px] border-[1px] border-[#4c4a4a] rounded-[8px]' key={service.id}>
                                        <div className='flex justify-between h-20'>
                                            <div className='h-20 w-20 flex justify-center items-center'>
                                                <span className='text-[40px] text-[#72E2AE] rounded-[50%] h-20 w-20 flex justify-center items-center bg-[#70ddaa3b] ease-in-out duration-300'>{service.icon}</span>
                                            </div>
                                            <h3 className='font-[800] text-[40px] text-[#2C3445]'>{service.number}</h3>
                                        </div>
                                        <h4 className='text-[20px] font-[600] mt-[25px] mb-[18px]'>{service.title}</h4>
                                        <p className='text-[#838595] font-[500]'>{service.content}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;