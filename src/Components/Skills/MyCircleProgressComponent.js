import React from 'react';
import CircleProgressBar from './CircleProgressBar';
import './Skill.css'

const MyCircleProgressComponent = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex flex-col items-center'>
                <CircleProgressBar  percentage={75} strokeWidth={20} sqSize={200}></CircleProgressBar>
                <p className='mt-[20px] text-[#fff] text-[22px] font-[600]'>Web Design</p>
            </div>
            <div>
                <CircleProgressBar percentage={55} strokeWidth={20} sqSize={200}></CircleProgressBar>
            </div>
        </div>
    );
};

export default MyCircleProgressComponent;