import React from 'react';
import { MdOutlineSchool } from 'react-icons/md';
import './Resume.css'

const Education = () => {
    const details = [
        {
            id: 1,
            year: '2000-2000',
            deg: 'Diploma in Marine Engineering',
            ins: 'Cumilla Modern High School',
            des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.'
        },
        {
            id: 2,
            year: '2000-2000',
            deg: 'Diploma in Graphic Design',
            ins: ' United International University',
            des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.'
        },
        {
            id: 3,
            year: '2000-2000',
            deg: 'Diploma in Web and E-commerce at',
            ins: 'Daffodil International Professional Training Institute(DIPTI)',
            des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.'
        },
    ]

    return (
        <div className="education mb-[40px] sm:mb-0">
            <div>
                <div className="flex items-center text-[22px] text-[#72E2AE] mb-[20px]">
                    <span className='text-[30px]'><MdOutlineSchool/></span> 
                    <h4 className="ms-[8px] text-[#fff] font-[600]">Educational Qualification</h4> </div>
            </div>
            <div className="timelineHere pt-[50px]">
                {
                    details.map(detail =>{
                        return(
                            <div key={detail.id} className="timeline__box flex flex-col sm:flex-row gap-[15px] sm:gap-[50px] mb-[30px]">
                                <div>
                                    <div className="timelineHead pe-0 sm:pe-[63px]">
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

export default Education;