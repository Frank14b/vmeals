import useTranslation from 'next-translate/useTranslation';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper";

export default function SliderComponent({ slideData = [], page = "" }) {
    const { t } = useTranslation('common');

    return (
        <>
            {
                (page == "homepage") && (
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
                                <SwiperSlide key={index} className='vh-100' style={{ 'background': 'url(' + data.customImage.guid + ')center/cover' }}>
                                    {
                                        // (data.description.length > 0) && (
                                        <div className='slide_description bg-white p-3 border-radius t-14'>
                                            <h1 className='text-success bold-800'>{data.postMeta.title[0]}</h1>
                                            <p dangerouslySetInnerHTML={{__html: data.postMeta.details[0]}}></p>
                                        </div>
                                        // )
                                    }
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                )
            }

        </>
    );
}