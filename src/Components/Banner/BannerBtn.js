import React from 'react';
import './Banner.css'

const BannerBtn = () => {
    const buttons = [
        {
            id: 1,
            button : 'Download CV',
            href : '../../File/Abir-Resume.pdf'
        },
        {
            id: 2,
            button : 'Contact'
        }
    ]
    return (
        <div className='banner__btn flex justify-center lg:justify-start'>
            {
                buttons.map(button => <a href={button.href} download="Tajul-Resume.pdf" key={button.id} className='text-[#0E1C2F] bg-[#72E2AE] text-[20px] border-[2px] border-[#72E2AE] rounded-[40px] py-[8px] px-[20px]'>{button.button}</a>)
            }
        </div>
    );
};

export default BannerBtn;