import React from 'react';

import { GrStar } from "react-icons/gr";

import { Swiper, SwiperSlide } from 'swiper/react';
import './Review.css'

import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const reviews = [
    {
        id: 1,
        img: 'https://tf-react-bieber.vercel.app/images/user-avatar-3.png',
        name: 'Hornet',
        desc: 'Fiverr',
        com : "This was a phenomenal experience. His attention to detail and the speed at which he build the landing page were nothing short of amazing. I will definitely come back to him for all of my website needs."
    },
    {
        id: 2,
        img: 'https://tf-react-bieber.vercel.app/images/user-avatar-3.png',
        name: 'senthilup',
        desc: 'Fiverr',
        com : "I am extremely satisfied with the quality of his work. Tajul is a skilled and professional designer who went above and beyond to deliver an outstanding result. The HTML code that Tajul delivered was clean, well-organized, and optimized for performance. I look forward to working with Tajul again in the future!",
    },
    {
        id: 3,
        img: 'https://tf-react-bieber.vercel.app/images/user-avatar-3.png',
        name: 'Jamespowel',
        desc: 'Fiverr',
        com : "I had a complex website project and Tajul exceeded my expectations. They were professional, communicative, and provided valuable input to improve the website's design and functionality. Highly recommend this top-notch front-end developer."
    },
    {
        id: 4,
        img: 'https://tf-react-bieber.vercel.app/images/user-avatar-3.png',
        name: 'Nancy Gomez',
        desc: 'Fiverr',
        com : "I had a great experience working with Tajul on my website project. They were able to take my vision and turn it into a beautifully designed and functional website. Tajul was also very responsive and easy to work with throughout the entire process. I highly recommend them for any front-end development needs."
    }

];

const Clients = () => {
    return (
            <div className='text-[#FFF]'>
                <Swiper
            // slidesPerView={3}   
            spaceBetween={30}
            freeMode={true}
            navigation={true}
            loop = {true}
            pagination={{
            clickable: true,
            }}
            modules={[FreeMode]}
            className="clientSwiper"
            breakpoints={{
              992:{
                slidesPerView: 3,
              },
              
              600: {
                slidesPerView: 2,
              },
              
              0: {
                slidesPerView: 1,
              }
            }}
        >

            <div>
                {
                    reviews.map((review)=>{
                        // const [id, img, name, desc, com] = review
                        return(
                            <div>
                                <SwiperSlide key={review.id}>
                                    <div className='pt-[70px] p-[20px] border-[1px] border-[#4c4a4a] rounded-[10px]'>
                                        <img className='absolute h-[80px] w-[80px] border-[4px] border-[#72E2AE] rounded-[50%] absolute' src={review.img} alt="img" style={{top:"-40px"}}/>
                                        <h4 className='text-[20px] font-[600]'>{review.name}</h4>
                                        <p className='text-[#B3B3C0] mt-[3px] mb-[15px]'>{review.desc}</p>
                                        <p className='w-[120px] text-[#FFD233] text-[20px] flex justify-between mb-[15px]'><GrStar/><GrStar/><GrStar/><GrStar/><GrStar/></p>
                                        <p className='text-[17px] text-[#B3B3C0]'>{review.com}</p>
                                    </div>
                                </SwiperSlide>
                            </div>
                        )
                    })
                }
            </div>


      </Swiper>
        </div>
    );
};

export default Clients;