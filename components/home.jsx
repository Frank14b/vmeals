import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import GoogleReviewComponents from './googlereviews';
import SliderComponent from './homepage/sliderComponent';
import Footer from './layout/footer';
import Header from './layout/header';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ApiCalls from '../utils/apicalls';
import Constants from '../utils/constants';

export default function HomeComponent() {
    const { t } = useTranslation('common');
    const [slideLoading, setSlideLoading] = useState(true)
    const [slideLoading1, setSlideLoading1] = useState(true)
    const [slideData, setSlideData] = useState([])
    const [howItsWork, setHowItsWork] = useState([])
    const [chooseUs, setChooseUs] = useState([])
    const [mealPlansInDubai, setMealPlansInDubai] = useState([])

    useEffect(() => {
        getMealPlansInDubai()
        getHomeSlider()
        getWhyChooseUs()
        getHowItsWork()
        setSlideLoading1(false)
    }, [])

    const getHomeSlider = () => {
        let result = ApiCalls.getHomePageDatas()
        result.then(response => {
            if (response.data.status == 200) {
                setSlideData(response.data.data)
                setSlideLoading1(false)
            }
            setSlideLoading1(false)
        }).catch(e => {
            setSlideLoading1(false)
        })
    }

    const getHowItsWork = () => {
        let result = ApiCalls.getHomePageHowItsWork()
        result.then(response => {
            if (response.data.status == 200) {
                setHowItsWork(response.data.data)
                setSlideLoading(false)
            }
            setSlideLoading(false)
        }).catch(e => {
            setSlideLoading(false)
        })
    }

    const getWhyChooseUs = () => {
        let result = ApiCalls.getHomePageChooseUs()
        result.then(response => {
            if (response.data.status == 200) {
                setChooseUs(response.data.data)
                setSlideLoading(false)
            }
            setSlideLoading(false)
        }).catch(e => {
            setSlideLoading(false)
        })
    }

    const getMealPlansInDubai = () => {
        let result = ApiCalls.getMealPlansInDubai()
        result.then(response => {
            if (response.data.status == 200) {
                setMealPlansInDubai(response.data.data)
                setSlideLoading(false)
            }
            setSlideLoading(false)
        }).catch(e => {
            setSlideLoading(false)
        })
    }


    return (
        <>
            <Header
                page={"home"}
                description="We are the best meal plan and monthly food delivery company in Dubai (UAE). We provide every day freshly prepared, handmade, &amp; personalized healthy meals."
                title={"Home"}
                banner={"./images/homebanner.webp"}>
            </Header>

            {/* home page first section  */}
            <div className='w-100 homepage_firstsection position-relative'>
                {
                    (slideLoading1) ? (
                        <>
                            <div className='col-md-6 mx-auto border-radius' style={{ "marginTop": "10em" }}>
                                <Skeleton baseColor='#E1F0E0' count={5} />
                                <div className='text-center bold-400'>Loading...</div>
                            </div>
                        </>
                    ) : (
                        <>

                            <SliderComponent slideData={slideData} page={"homepage"}></SliderComponent>
                        </>

                    )
                }
            </div>
            {/* home page first section  */}


            {/* home page four section  */}
            <div className='w-100 homepageSecondsection bg-light pb-4'>

                <div className='col-md-12 text-center pt-5 mt-3'>
                    <h2 className='bold-700'>{t("_home.MealPlansInDubai")}</h2>

                    <h4 className='bold-700 text-success mt-4'>
                        {
                            mealPlansInDubai.map((data, index) => (
                                data.postMeta.title[0]
                            ))
                        }
                    </h4>
                </div>

                <div className='col-md-11 col-lg-10 mx-auto px-2'>
                    <div className='row mt-5 px-2'>

                        <div className='col-md-6'>
                            <div className='bold-600 col-md-10 mx-auto t-20 mt-3 text-right mb-5'>
                                {
                                    mealPlansInDubai.map((data, index) => (
                                        <div className='t-16' key={index} dangerouslySetInnerHTML={{ __html: data.postMeta.details[0] }}></div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className='col-md-6 mb-4 image_'>
                            <div className='col-md-11 mx-auto position-relative' style={{ height: "600px" }}>
                                {
                                    mealPlansInDubai.map((data, index) => (
                                        <Image key={index} layout='fill' alt='Deit' objectFit='cover' src={data.customImage.guid} className='border-radius' />
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* home page four section  */}


            {/* home page second section  */}
            <div className='w-100 homepage_secondsection py-4 pb-5'>

                <div className='col-md-12 text-center py-5'>
                    <h2 className='bold-700'>{t("How its works?")}</h2>
                </div>

                <div className='col-md-11 col-lg-10 mx-auto px-2'>
                    <div className='row'>
                        {
                            (slideLoading) ? (
                                <>
                                    <div className='col-md-6 mx-auto mt-5 pt-5 border-radius'>
                                        <Skeleton baseColor='#E1F0E0' count={5} />
                                        <div className='text-center bold-400'>Loading...</div>
                                    </div>
                                </>
                            ) : (
                                howItsWork.map((data, index) => (
                                    <div key={index} className='col-md-4'>
                                        <div className='col-md-12 text-center'>
                                            <Image alt='meals' src={data.customImage.guid} height={150} width={150} />
                                        </div>
                                        <div className='col-md-12 d-flex'>
                                            <div className='number bold-700'><a href='#'>{(index + 1)}.</a></div>
                                            <div className='text-left'>
                                                <h4 className='bold-700 t-22 mt-5 text-success'>{data.postMeta.title[0]}</h4>
                                                <div dangerouslySetInnerHTML={{ __html: data.postMeta.details[0] }}></div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
            {/* home page second section  */}


            {/* home page third section  */}
            <div className='w-100 homepage_thirdsection pt-3 bg-light'>

                <div className='col-md-12 text-center py-5'>
                    <h2 className='bold-700'>{t("_home.Choose_Us")}</h2>
                </div>

                <div className='col-md-11 col-lg-10 mx-auto px-2'>
                    <div className='row mt-5'>
                        {
                            (slideLoading) ? (
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
                                                <p className='text-left' dangerouslySetInnerHTML={{ __html: data.postMeta.details[0] }}></p>
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


            {/* home page four section  */}
            <div className='w-100 homepage_foursection'>
                <div className='col-md-11 col-lg-10 mx-auto px-2'>
                    <div className='row mt-5 px-2'>
                        <div className='col-md-6 mb-4 image_' style={{ height: "550px" }}>
                            <Image layout='fill' alt='Deit' objectFit='cover' src="https://i0.wp.com/workspace.vmeals.ae/wp-content/uploads/2019/06/Photo-07-11-2021-8-54-25-AM.jpg?ssl=1" className='w-100 border-radius' />
                        </div>

                        <div className='col-md-6'>
                            <h2 className='bold-700 mt-4'>
                                Require assistance in starting <br /> your fitness journey?
                            </h2>
                            <p className='bold-700 t-20 mt-3'>
                                Our expert are at your fingertips, get in touch to find the right plan!
                            </p>

                            <h6 className='text-success t-16 bold-700 my-4 d-flex'><Image width={20} height={20} src={"/images/arrow-right.webp"} alt="healt" className='' />&nbsp; <span style={{ 'marginTop': "2px", 'marginLeft': '7px' }}>Certified Experts</span></h6>
                            <h6 className='text-success t-16 bold-700 my-4 d-flex'><Image width={20} height={20} src={"/images/arrow-right.webp"} alt="fitness" className='' />&nbsp; <span style={{ 'marginTop': "2px", 'marginLeft': '7px' }}>Plan Tailored to achieve your goals</span></h6>
                            <h6 className='text-success t-16 bold-700 my-4 d-flex'><Image width={20} height={20} src={"/images/arrow-right.webp"} alt="plan" className='' />&nbsp; <span style={{ 'marginTop': "2px", 'marginLeft': '7px' }}>Expert advice to answer your queries</span></h6>
                            <h6 className='text-success t-16 bold-700 my-4 d-flex'><Image width={20} height={20} src={"/images/arrow-right.webp"} alt="appointment" className='' />&nbsp; <span style={{ 'marginTop': "2px", 'marginLeft': '7px' }}>No additional cost</span></h6>
                            <br />

                            <Link href={Constants.whtasapp_link} target="_blank" rel='noreferrer'>
                                <a target={"_blank"} rel="noreferrer" className='btn btn-md btn-success px-3'>{t("_home.book_appointment")}</a>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
            {/* home page four section  */}


            {/* home page five section  */}
            <div className='w-100 homepage_fivesection pt-5'>
                <div className='col-md-11 col-lg-10 mx-auto px-2'>
                    <GoogleReviewComponents></GoogleReviewComponents>
                </div>
            </div>
            {/* home page five section  */}


            <Footer></Footer>
        </>
    );
}