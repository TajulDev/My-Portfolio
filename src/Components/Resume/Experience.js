import React from 'react';
import { BiBriefcase } from 'react-icons/bi';
import './Resume.css'

const Experience = () => {
    const details = [
        {
            id: 1,
            year: '2021 to Present',
            deg: 'Full-Stack Web Developer',
            ins: 'Opedia Technologies',
            des: "As a full-time web Developer on Opedia, I specialize in using Node js, Laravel, PHP, HTML, CSS, jS to develop visually appealing and responsive websites that meet my clients' needs. With my expertise, I can help bring your vision to life on the web."
        },
        {
            id: 2,
            year: '2020 to Present',
            deg: 'Front-end Web Developer',
            ins: 'Fiverr',
            des: "As a front-end web developer at Fiverr for over a year, I have been responsible for creating visually appealing and user-friendly websites using cutting-edge technologies. My role has allowed me to enhance my skills and keep up with the latest trends in web development."
        },
    ]

    return (
        <div className="education">
                <div>
                    <div className="flex items-center text-[22px] text-[#72E2AE] mb-[20px]">
                        <span className='text-[30px]'><BiBriefcase/></span> 
                        <h4 className="ms-[8px] text-[#fff] font-[600]">Working Experience</h4> 
                    </div>
                </div>
                <div className="timelineHere pt-[50px]">
                    {
                        details.map(detail =>{
                            return(
                               <div key={detail.id} className="timeline__box flex flex-col sm:flex-row gap-[15px] sm:gap-[50px] mb-[30px]">
                                    <div>
                                        <div className="timelineHead pe-[63px]">
                                            <p className="w-[115px] py-[2px] text-center text-[14px] font-[600] text-[#898F9C] bg-[#1D2D3B] rounded-[20px]">{detail.year}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="text-[18px] text-[#72E2AE]">{detail.deg}</h5>
                                        <p className="text-[17px] text-[#fff] mb-[4px]">{detail.ins}</p>
                                        <p className="text-[16px] font-[500] text-[#898F9C]">{detail.des}</p>
                                    </div>
                               </div> 
                            )
                        })
                    }
                </div>
            </div>
    );
};

export default Experience;