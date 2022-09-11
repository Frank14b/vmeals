import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from "react";
import { useEffect } from 'react';
import ApiCalls from '../../utils/apicalls';
import Header from '../layout/header';
import GoogleReviewComponents from '../googlereviews';
import Footer from '../layout/footer';
import Constants from '../../utils/constants';
import StepperComponent from '../stepperComponent';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export default function MealPlansComponent() {
    const { t } = useTranslation('common');
    const axios = require('axios');
    const [allreview, setAllreviews] = useState([])
    const [products, setProducts] = useState([])
    const [pageloading, setPageloading] = useState(false)
    const [leftside, setLeftSide] = useState([])
    const [chooseUs, setChooseUs] = useState([])
    const [metaData, setMetaData] = useState({
        title: "Vmeals",
        description: "Vmeals",
        image: "",
    })


    function getGoogleReviews() {
        let result = ApiCalls.getAllReviews()
        result.then(response => {
            if (response.status == 200) {
                if (response.data.data.status == "OK") {
                    setAllreviews(response.data.data)
                }
            }
        })
    }

    const getProductList = () => {
        let result = ApiCalls.getProductList()
        result.then(response => {
            if (response.data.status == 200) {
                setProducts(response.data.data)
                window.localStorage.setItem("product_menu", JSON.stringify(response.data.data))
            }   
        }).catch(e => {
        })
    }

    const getMealPlansMeta = () => {
        let result = ApiCalls.getMealPlansMeta()
        result.then(response => {
            if (response.data.status == 200) {
                if (response.data.data && response.data.data[0]) {
                    let data = response.data.data[0]
                    setMetaData({
                        title: data.postMeta.title[0],
                        description: data.postMeta.details[0],
                        image: data.customImage.guid,
                    })
                }
            }
        })
    }

    const getMealPlansleftside = () => {
        let result = ApiCalls.getMealPlansleftside()
        result.then(response => {
            if (response.data.status == 200) {
                setLeftSide(response.data.data)
            }
        })
    }

    const getWhyChooseUs = () => {
        let result = ApiCalls.getHomePageChooseUs()
        result.then(response => {
            if(response.data.status == 200) {
                setChooseUs(response.data.data)
                setSlideLoading(false)
            }else{
                setPageloading(true)
            } 
        }).catch(e => {
            setPageloading(true)
        })
    }

    useEffect(() => {
        let menu = window.localStorage.getItem("product_menu")
        if (menu) {
            setProducts(JSON.parse(menu))
        }

        getMealPlansMeta()
        getMealPlansleftside()
        getProductList()
        getGoogleReviews()
        getWhyChooseUs()
    }, [])

    useEffect(() => {
        console.log(allreview)
    }, [allreview])

    return (
        <>

            <Header page={"meal plans"} subpage="" title={metaData.title} description={metaData.description} banner={metaData.image}></Header>

            <div className='w-100 mealplans_section_1 py-4 mt-5'>

                <div className='w-100 pt-5' >
                    <div className='container'>
                        <StepperComponent active={1}></StepperComponent>
                    </div>
                </div >

                <div className='row mt-5 px-5'>

                    <div className='col-md-6 col-lg-3'>
                        <div className='col-md-12 mb-4 leftside_mealplan box-shadow bg-success-light p-3 border-radius'>
                            {
                                (leftside.length > 0) ? (
                                    leftside.map((data, index) => (
                                        (data.postMeta.type[0] == "__leftside_ar") && (

                                            <>
                                                <div key={index} className='leftside_title w-65 pull-right'>
                                                    <h4 className='text-success bold-700 text-right'>
                                                        {data.postMeta.title[0]}
                                                    </h4>

                                                    <p className='text-right t-14' dangerouslySetInnerHTML={{ __html: data.postMeta.details[0] }}></p>
                                                </div>

                                                <div className='product_button p-3'>
                                                    <Link href={Constants.whtasapp_link}>
                                                        <a target={"_blank"} rel={"noreferrer"} className='btn btn-success btn-md px-4 bold-700 text-white pull-right'>موعد الكتاب </a>
                                                    </Link>
                                                </div>
                                            </>

                                        )
                                    ))
                                ) : (
                                    <></>
                                )
                            }
                        </div>
                    </div>

                    <div className='col-md-6 col-lg-3 d-lg-none'>
                        <div className='col-md-12 leftside_mealplan mb-4 box-shadow bg-success-light p-3 border-radius'>
                            {
                                (leftside.length > 0) && (
                                    leftside.map((data, index) => (
                                        (data.postMeta.type[0] == "__leftside_en") && (

                                            <>
                                                <div key={index} className='leftside_title w-65 pull-left'>
                                                    <h4 className='text-success bold-700 text-left'>
                                                        {data.postMeta.title[0]}
                                                    </h4>

                                                    <p className='text-left t-14' dangerouslySetInnerHTML={{ __html: data.postMeta.details[0] }}></p>
                                                </div>

                                                <div className='product_button p-3'>
                                                    <Link href={Constants.whtasapp_link}>
                                                        <a target={"_blank"} rel={"noreferrer"} className='btn btn-success btn-md px-4 bold-700'>Book Appointment</a>
                                                    </Link>
                                                </div>
                                            </>

                                        )
                                    ))
                                )
                            }
                        </div>
                    </div>

                    {
                        (products.length > 0) ? (
                            products.map((data, index) => (

                                <>
                                    {
                                        (index == 3) && (
                                            <div className='col-md-6 col-lg-3 d-none d-lg-inline'>
                                                <div className='col-md-12 leftside_mealplan box-shadow mb-4 bg-success-light p-3 border-radius'>
                                                    {
                                                        (leftside.length > 0) && (
                                                            leftside.map((data, index) => (
                                                                (data.postMeta.type[0] == "__leftside_en") && (

                                                                    <>
                                                                        <div key={index} className='leftside_title w-75 pull-left'>
                                                                            <h4 className='text-success bold-700 text-left'>
                                                                                {data.postMeta.title[0]}
                                                                            </h4>

                                                                            <p className='text-left t-14' dangerouslySetInnerHTML={{ __html: data.postMeta.details[0] }}></p>
                                                                        </div>

                                                                        <div className='product_button p-3'>
                                                                            <Link href={Constants.whtasapp_link}>
                                                                                <a target={"_blank"} rel={"noreferrer"} className='btn btn-success btn-md px-4 bold-700'>Book Appointment</a>
                                                                            </Link>
                                                                        </div>
                                                                    </>

                                                                )
                                                            ))
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        )
                                    }


                                    <div className="col-md-6 col-lg-3" key={index}>
                                        <div className="col-md-12 product_card border-radius mb-4 box-shadow" style={{ background: "rgba(" + Constants.arrayProductColor[index].bg + ")" }}>
                                            <div className='product_title p-3'>
                                                <h4 className='bold-800' style={{ color: "rgba(" + Constants.arrayProductColor[index].cl + ")" }}>{data.post_title}</h4>
                                            </div>
                                            <div className='product_button p-3'>
                                                <Link href={"/" + data.post_name} style={{ background: "rgba(" + Constants.arrayProductColor[index].cl + ")" }}>
                                                    <a className='btn btn-md px-4 bold-700 text-white' style={{ background: "rgba(" + Constants.arrayProductColor[index].cl + ")" }}>View Plan</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))
                        ) : (
                            <></>
                        )
                    }
                </div>
            </div>


            {/* home page third section  */}
            <div className='w-100 homepage_thirdsection pt-3'>

                <div className='col-md-11 col-lg-10 mx-auto px-2'>
                    <div className='row mt-5'>
                        {
                            (!pageloading) ? (
                                <>
                                    <div className='col-md-6 mx-auto mt-5 pt-5 border-radius'>
                                        <Skeleton baseColor='#E1F0E0' count={5} />
                                        <div className='text-center bold-400'>Loading...</div>
                                    </div>
                                </>
                            ) : (
                                chooseUs.map((data, index) => (
                                    <div key={index} className='col-md-6 col-lg-3 mb-4 col-sm-6 p-3'>
                                        <div className='border-1-5 w-100 position-relative box-shadow bg-white p-3 border-radius'>
                                            <span className='bg-white border-1-5 image_'><Image alt='plans' src={data.customImage.guid} className="p-3" layout={'fill'} /></span>
                                            <div className='col-md-12 mt-5 text-center'>
                                                <h4 className='text-success bold-700'>{data.postMeta.title[0]}</h4>
                                                <p className='text-left' dangerouslySetInnerHTML={{__html: data.postMeta.details[0]}}></p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
            {/* home page tird section  */}


            {/* home page five section  */}
            <div className='w-100 homepage_fivesection pt-5' >
                <div className='col-md-11 col-lg-10 mx-auto px-2'>
                    <GoogleReviewComponents></GoogleReviewComponents>
                </div>
            </div >
            {/* home page five section  */}


            < Footer ></Footer >

        </>
    );
}