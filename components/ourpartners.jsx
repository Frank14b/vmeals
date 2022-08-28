import useTranslation from 'next-translate/useTranslation';
import GoogleReviewComponents from './googlereviews';
import SliderComponent from './homepage/sliderComponent';
import Footer from './layout/footer';
import Header from './layout/header';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function OurPartnersComponent() {
    const { t } = useTranslation('common');
    const [slideLoading, setSlideLoading] = useState(true)

    const slideData = [
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

    const sideElement = [
        { description: "", image: "./images/homebanner.webp" },
        { description: "", image: "./images/homebanner.webp" },
        { description: "", image: "./images/homebanner.webp" }
    ]

    useEffect(() => {
        setSlideLoading(true)
        setTimeout(() => {
            setSlideLoading(false)
        }, 1300);
    }, [])


    return (
        <>
            <Header page={"about"} subpage={"partners"}></Header>

            {/* home page first section  */}
            <div className='w-100 partners_firstsection pt-5'>
                <div className="container pt-5 mt-5">
                    <div className='row mt-5 mb-5 pb-5'>
                        <div className='col-md-12'>
                            <h1 className='bold-700'>{t("Our Partners")}</h1>
                        </div>
                        <div className='col-md-6 bg-light p-0 box-shadow border-radius mb-5'>
                            {
                                (!slideLoading) ? (
                                    <SliderComponent slideData={sideElement}></SliderComponent>
                                ) : (

                                    <>
                                        <div className='col-md-10 mx-auto mt-5 pt-5 border-radius'>
                                            <Skeleton baseColor='#E1F0E0' count={3} />
                                            <div className='text-center bold-400'>Loading...</div>
                                        </div>
                                    </>
                                )
                            }


                            <div className='col-md-12 p-3 text-justify pt-4'>
                                <p>
                                    Contact us and one of our representatives will get in touch with you to discuss further. Through our Partners Program, we can provide you a special deal that is otherwise not available. The special deal can provide extra discounts and added benefits to all the monthly and weekly meal plan subscribers.
                                </p>
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='bg-success-light w-100 p-3 border-radius' style={{ "min-height": "60vh" }}>
                                <form className='w-100' method='post'>
                                    <div className='row mb-3'>
                                        <div className='col-md-12 py-3'>
                                            <h2 className='text-success bold-700'>{t("Register your Company")}</h2>
                                        </div>
                                    </div>

                                    <div className='row mb-3'>
                                        <div className='col-md-6'>
                                            <label className='w-100'>First Name <span className='text-danger'>*</span>
                                                <input type={"text"} className="form-control" placeholder='First name' required />
                                            </label>
                                        </div>

                                        <div className='col-md-6'>
                                            <label className='w-100'>Last Name <span className='text-danger'>*</span>
                                                <input type={"text"} className="form-control" placeholder='Last name' required />
                                            </label>
                                        </div>
                                    </div>

                                    <div className='row mb-3'>
                                        <div className='col-md-12'>
                                            <label className='w-100'>Email <span className='text-danger'>*</span>
                                                <input type={"email"} className="form-control" placeholder='Email' required />
                                            </label>
                                        </div>
                                    </div>

                                    <div className='row mb-3'>
                                        <div className='col-md-12'>
                                            <label className='w-100'>Mobile Number <span className='text-danger'>*</span>
                                                <input type={"number"} className="form-control" placeholder='Mobile Number' required />
                                            </label>
                                        </div>
                                    </div>

                                    <div className='row mb-3'>
                                        <div className='col-md-6'>
                                            <label className='w-100'>Company Name <span className='text-danger'>*</span>
                                                <input type={"text"} className="form-control" placeholder='Company Name' required />
                                            </label>
                                        </div>

                                        <div className='col-md-6'>
                                            <label className='w-100'>Your Designation <span className='text-danger'>*</span>
                                                <input type={"text"} className="form-control" placeholder='Your Designation' required />
                                            </label>
                                        </div>
                                    </div>

                                    <div className='row mb-3 mt-4'>
                                        <div className='col-md-12'>
                                            <br /><br />
                                            <button className='w-100 btn btn-success btn-sm text-center'>Submit</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* home page first section  */}


            {/* page five section  */}
            <div className='w-100 company_fivesection pt-5'>
                <div className='container'>
                    <GoogleReviewComponents></GoogleReviewComponents>
                </div>
            </div>
            {/* page five section  */}


            <Footer></Footer>
        </>
    );
}