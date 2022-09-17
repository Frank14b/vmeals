import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from "react";
import { useEffect } from 'react';
import { FaStar, FaStarHalf, FaStarHalfAlt } from 'react-icons/fa';
import Moment from 'react-moment';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper";
import ApiCalls from '../utils/apicalls';


export default function GoogleReviewComponents() {
    const { t } = useTranslation('common');
    const axios = require('axios');
    const [allreview, setAllreviews] = useState([])

    function getGoogleReviews() {
        let result = ApiCalls.getAllReviews()
        result.then(response => {
            if(response.status == 200) {
                if(response.data.data.status == "OK") {
                    setAllreviews(response.data.data)
                }
            }
        })
    }

    useEffect(() => {
        getGoogleReviews()
    }, [])

    useEffect(() => {
        console.log(allreview)
    }, [allreview])

    return (
        <>
            {
                (allreview.result && allreview.result.reviews.length > 0) ? (
                    <>
                        <div className='col-md-12 bg-success-light p-3 border-radius'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='col-md-12'>
                                        <span style={{ 'float': 'left' }}><Image src={"/images/Google-brand.png"} width={80} height={27} /></span> &nbsp; <span className='t-18'>Rating</span>
                                    </div>
                                    <div className='col-md-12 mt-2'>
                                        <span className='bold-700 t-18 pull-left'>{allreview.result.rating}</span>
                                        <span className='text-success pull-left mx-2'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>
                                        <span className='text-muted t-14 mt-1 pull-left'>{allreview.result.user_ratings_total} reviews</span>
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <Link href={"https://www.google.com/search?q=vmeals&authuser=1&source=hp&ei=AW0LY5nLBKrIlwTR843YCg&iflsig=AJiK0e8AAAAAYwt7EUfptHPb5khN2fnurt2EVcSTIOTr&ved=0ahUKEwjZz5bA0en5AhUq5IUKHdF5A6sQ4dUDCAc&uact=5&oq=vmeals&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEEMcBEK8BMgcIABCABBAKMgUIABCABDIKCAAQsQMQsQMQCjIHCAAQsQMQCjIKCAAQsQMQgwEQCjIHCAAQsQMQCjIHCAAQsQMQCjIHCAAQsQMQCjIHCAAQsQMQCjoLCAAQgAQQsQMQgwE6CwguEIAEELEDEIMBOgsILhCABBCxAxDUAjoOCC4QgAQQsQMQxwEQ0QM6CAgAEIAEELEDOg4ILhCxAxCDARDHARDRAzoQCC4QsQMQgwEQxwEQ0QMQCjoOCC4QgAQQxwEQ0QMQ1AJQAFizBGDfBWgAcAB4AIAB6AGIAcAIkgEFMC4xLjSYAQCgAQE&sclient=gws-wiz#lrd=0x3e5f734780613171:0x9b38f89b310dd026,3,,,"}>
                                        <a target={"_blank"} rel="noreferrer" className='btn btn-md btn-success pull-right mt-3 px-3'>Write a Review</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-12 border-radius my-3'>
                            <div className='row'>
                                <Swiper
                                    slidesPerView={4}
                                    breakpoints={{
                                        // when window width is >= 640px
                                        0: {
                                          slidesPerView: 1,
                                        },
                                        // when window width is >= 768px
                                        640: {
                                          slidesPerView: 2,
                                        },
                                        // when window width is >= 768px
                                        992: {
                                            slidesPerView: 3,
                                        },
                                        1300: {
                                            slidesPerView: 4,
                                        },
                                    }}
                                    spaceBetween={10}
                                    freeMode={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={false}
                                    modules={[FreeMode, Pagination]}
                                    className="mySwiper">
                                    {
                                        allreview.result.reviews.map((data, index) => (
                                            <SwiperSlide key={index}>
                                                <div className='p-2'>
                                                    <div className='w-100 p-3 border-radius bg-success-light'>
                                                        <div className='col-md-12'>
                                                            <span className='text-success'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                                        </div>
                                                        <div className='col-md-12 t-14 mt-1'>
                                                            <div className='cut-text-3'>
                                                                {data.text}
                                                            </div>
                                                            <Link href={data.author_url}>
                                                                <a className='t-14 text-muted' target={"_blank"} rel="noreferrer">Read More</a>
                                                            </Link>
                                                        </div>
                                                        <div className='col-md-12 mt-3'>
                                                            <span className='pull-left'>
                                                                <Image src={"/images/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"} width={35} height={35} />
                                                            </span>
                                                            <span className='text-muted mx-2'>
                                                                <span className='t-13'>Posted On</span> <br /> <span className='mx-2 text-success t-14'>Google</span>
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className='col-md-12'>
                                                        <span className='pull-left px-2 py-2'>
                                                            <Image src={data.profile_photo_url} width={35} height={35} />
                                                        </span>
                                                        <span className='mt-2 t-14 pull-left'>
                                                            {data.author_name}
                                                            <br/>
                                                            <span className="text-muted"><Moment fromNow ago>{parseFloat(data.time) * 1000}</Moment> ago</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </>

                ) : (
                    <></>
                )
            }
        </>
    );
}