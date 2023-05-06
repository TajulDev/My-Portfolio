import React from 'react';
import './Contact.css'

const From = () => {
    return (
        <div className='contact__form'>
            <form className='text-[#fff] bg-[#1B2336] border-[1px] border-[#4c4a4a] rounded-[10px]'>
                <div className='mb-[15px]'>
                    <label htmlFor="name">Name </label><br />
                    <input type="text" placeholder='Enter Your Name...' required/>
                </div>
                <div className='mb-[15px]'>
                    <label htmlFor="email">Email </label><br />
                    <input type="email" placeholder='Enter Your Email...' />
                </div>
                <div className='mb-[15px]'>
                    <label htmlFor="subject">Subject </label><br />
                    <input type="text" placeholder='Enter Subject...' />
                </div>
                <div>
                    <label htmlFor="email">Message </label><br />
                    <textarea name="" id="" cols="30" rows="7" placeholder='Enter Your Message...'></textarea>
                </div>
                <button className='px-[12px] py-[8px] bg-[#72E2AE] text-[14px] text-[#000] font-[600] mt-[15px] rounded-[5px]' type='submit'>SEND MAIL</button>
            </form>
        </div>
    );
};

export default From;