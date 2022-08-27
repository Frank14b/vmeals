import useTranslation from 'next-translate/useTranslation';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper";

export default function SliderComponent({ slideData = [] }) {
    const { t } = useTranslation('common');

    return (
        <>
            <Swiper
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true} modules={[Navigation, Autoplay]}
                className="mySwiper">
                {
                    slideData.map((data, index) => (
                        <SwiperSlide key={index} className='vh-100' style={{ 'background': 'url(' + data.image + ')center/cover' }}>
                            {
                                (data.description.length > 0) && (
                                    <div className='slide_description bg-white p-3 border-radius t-14'>
                                        <p>{data.description}</p>
                                    </div>
                                )
                            }
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}