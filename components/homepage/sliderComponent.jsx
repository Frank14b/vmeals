import useTranslation from 'next-translate/useTranslation';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper";
import Link from 'next/link';
import Image from 'next/image';

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
                                <SwiperSlide key={index} className=''>
                                    <div className='position-relative vh-100 w-100'>
                                        <Image src={data.customImage.guid} layout="fill" objectFit='cover' />
                                        {
                                            // (data.description.length > 0) && (
                                            <div className='slide_description bg-white py-4 border-radius t-14'>
                                                <h1 className='text-success bold-800 text-right mx-4'>{data.postMeta.title[0]}</h1>
                                                <p className='text-right mx-4' dangerouslySetInnerHTML={{ __html: data.postMeta.details[0] }}></p>

                                                {
                                                    // (data.postMeta.customlink && data.postMeta.customlink[0]) && (
                                                    <Link href={"/meal-plans"}>
                                                        <button className='btn btn-md px-4 btn-success pull-right mx-4'>View Plans</button>
                                                    </Link>

                                                    // )
                                                }
                                            </div>
                                            // )
                                        }
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                )
            }


            {
                (page == "parthners") && (
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
                                <SwiperSlide key={index}>
                                    <div className='w-100 position-relative' style={{ height: "400px" }}>
                                        <Image src={data.customImage.guid} layout="fill" objectFit='contain' />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                )
            }

        </>
    );
}