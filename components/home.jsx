import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
// import GoogleReviewComponents from './googlereviews';
import SliderComponent from './homepage/sliderComponent';
import Footer from './layout/footer';
import Header from './layout/header';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HomeComponent() {
    const { t } = useTranslation('common');
    const [slideLoading, setSlideLoading] = useState(true)

    const howItsWorkData = [
        {
            "image": "https://i0.wp.com/workspace.vmeals.ae/wp-content/uploads/2022/07/Choose-Plan.png?resize=150%2C150&ssl=1",
            "title": "SELECT A PLAN",
            "description": "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        },
        {
            "image": "https://i0.wp.com/workspace.vmeals.ae/wp-content/uploads/2022/07/Enter-Information.png?resize=150%2C150&ssl=1",
            "title": "SELECT A PLAN",
            "description": "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        },
        {
            "image": "https://i0.wp.com/workspace.vmeals.ae/wp-content/uploads/2022/07/Eating.png?resize=150%2C150&ssl=1",
            "title": "SELECT A PLAN",
            "description": "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        }
    ]

    const chooseUsData = [
        {
            "image": "https://i0.wp.com/workspace.vmeals.ae/wp-content/uploads/2019/06/cuisine.png?ssl=1",
            "title": "Variety of Cuisines",
            "description": "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        },
        {
            "image": "https://i0.wp.com/workspace.vmeals.ae/wp-content/uploads/2019/06/Delivery.png?ssl=1",
            "title": "Daily Deliveries",
            "description": "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        },
        {
            "image": "https://i0.wp.com/workspace.vmeals.ae/wp-content/uploads/2019/06/Eco-Friendly.png?ssl=1",
            "title": "Eco-Friendly Packaging",
            "description": "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        }
        ,
        {
            "image": "https://i0.wp.com/workspace.vmeals.ae/wp-content/uploads/2019/06/Intolerances.png?ssl=1",
            "title": "Allergies & Intolerances",
            "description": "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        }
    ]

    const sideElement = [
        { description: "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.", image: "./images/homebanner.jpg" },
        { description: "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.", image: "./images/homebanner.jpg" },
        { description: "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.", image: "./images/homebanner.jpg" },
    ]

    useEffect(() => {
        setSlideLoading(true)
        setTimeout(() => {
            setSlideLoading(false)
        }, 2000);
    }, [])


    return (
        <>
            <Header
                page={"home"} 
                description="We are the best meal plan and monthly food delivery company in Dubai (UAE). We provide every day freshly prepared, handmade, &amp; personalized healthy meals." 
                title={"Home"}
                banner={"./images/homebanner.jpg"}>
            </Header>

            {/* home page first section  */}
            <div className='w-100 homepage_firstsection position-relative'>
                {
                    (slideLoading) ? (
                        <>
                            <Image alt='Vmeals' src={"/images/homebanner.jpg"} layout={'fill'} className="w-100 image_" style={{ "objectFit": "contain" }} />
                            {/* <div className='col-md-6 mx-auto mt-5 pt-5 border-radius'>
                                <Skeleton baseColor='#E1F0E0' count={3} />
                                <div className='text-center bold-400'>Loading...</div>
                            </div> */}
                        </>
                    ) : (
                        <>

                            <SliderComponent slideData={sideElement}></SliderComponent>
                        </>

                    )
                }
            </div>
            {/* home page first section  */}

            {/* home page second section  */}
            <div className='w-100 homepage_secondsection py-4'>

                <div className='col-md-12 text-center py-5'>
                    <h2 className='bold-700'>{t("How its works?")}</h2>
                </div>

                <div className='container'>
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
                                howItsWorkData.map((data, index) => (
                                    <div key={index} className='col-md-4'>
                                        <div className='col-md-12 text-center'>
                                            <Image alt='meals' src={data.image} height={150} width={150} />
                                        </div>
                                        <div className='col-md-12 d-flex'>
                                            <div className='number bold-700'><a>{(index + 1)}.</a></div>
                                            <div className='text-left'>
                                                <h4 className='bold-700 t-22 mt-5 text-success'>{data.title}</h4>
                                                {data.description}
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

                <div className='col-md-12'>
                    <div className='row mt-5 px-5'>
                        {
                            (slideLoading) ? (
                                <>
                                    <div className='col-md-6 mx-auto mt-5 pt-5 border-radius'>
                                        <Skeleton baseColor='#E1F0E0' count={5} />
                                        <div className='text-center bold-400'>Loading...</div>
                                    </div>
                                </>
                            ) : (
                                chooseUsData.map((data, index) => (
                                    <div key={index} className='col-md-6 col-lg-3 mb-4 col-sm-6 p-3'>
                                        <div className='border-1-5 w-100 position-relative box-shadow bg-white p-3 border-radius'>
                                            <span className='bg-white border-1-5 image_'><Image alt='plans' src={data.image} className="p-3" layout={'fill'} /></span>
                                            <div className='col-md-12 mt-5 text-center'>
                                                <h4 className='text-success bold-700'>{data.title}</h4>
                                                <p className='text-left'>{data.description}</p>
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
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-md-6 mb-4 image_'>
                            <Image height={450} width={600} alt='Deit' src="https://i0.wp.com/workspace.vmeals.ae/wp-content/uploads/2019/06/Photo-07-11-2021-8-54-25-AM.jpg?ssl=1" className='w-100 border-radius' />
                        </div>

                        <div className='col-md-6'>
                            <h2 className='bold-700'>
                                Require assistance in starting <br /> your fitness journey?
                            </h2>
                            <p className='bold-700 t-20 mt-3'>
                                Our expert are at your fingertips, get in touch to find the right plan!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* home page four section  */}


            {/* home page five section  */}
            <div className='w-100 homepage_fivesection pt-5'>
                <div className='container'>
                    {/* <GoogleReviewComponents></GoogleReviewComponents> */}
                </div>
            </div>
            {/* home page five section  */}


            <Footer></Footer>
        </>
    );
}