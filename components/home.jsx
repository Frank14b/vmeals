import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import GoogleReviewComponents from './googlereviews';
import SliderComponent from './homepage/sliderComponent';
import Footer from './layout/footer';
import Header from './layout/header';

export default function HomeComponent() {
    const { t } = useTranslation('common');

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
        { description: "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.", image: "https://workspace.vmeals.ae/wp-content/uploads/2019/06/louis-hansel-phEaeqe555M-unsplash.jpg" },
        { description: "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.", image: "https://workspace.vmeals.ae/wp-content/uploads/2019/06/louis-hansel-phEaeqe555M-unsplash.jpg" },
        { description: "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.", image: "https://workspace.vmeals.ae/wp-content/uploads/2019/06/louis-hansel-phEaeqe555M-unsplash.jpg" },
    ]


    return (
        <>
            <Header page={"home"}></Header>

            {/* home page first section  */}
            <div className='w-100 homepage_firstsection'>
                <SliderComponent slideData={sideElement}></SliderComponent>
            </div>
            {/* home page first section  */}

            {/* home page second section  */}
            <div className='w-100 homepage_secondsection py-5'>

                <div className='col-md-12 text-center py-5'>
                    <h2 className='bold-700'>{t("How its works?")}</h2>
                </div>

                <div className='container'>
                    <div className='row'>
                        {
                            howItsWorkData.map((data, index) => (
                                <div key={index} className='col-md-4'>
                                    <div className='col-md-12 text-center'>
                                        <img src={data.image} />
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
                        }
                    </div>
                </div>
            </div>
            {/* home page second section  */}


            {/* home page third section  */}
            <div className='w-100 homepage_thirdsection py-5 bg-light'>

                <div className='col-md-12 text-center py-5'>
                    <h2 className='bold-700'>{t("_home.Choose_Us")}</h2>
                </div>

                <div className='col-md-12'>
                    <div className='row mt-5 px-5'>
                        {
                            chooseUsData.map((data, index) => (
                                <div key={index} className='col-md-6 col-lg-3 mb-4 col-sm-6 p-3'>
                                    <div className='border-1-5 w-100 position-relative box-shadow bg-white p-3 border-radius'>
                                        <img src={data.image} className="image_ bg-white p-2 border-1-5" />
                                        <div className='col-md-12 mt-5 text-center'>
                                            <h4 className='text-success bold-700'>{data.title}</h4>
                                            <p className='text-left'>{data.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* home page tird section  */}


            {/* home page four section  */}
            <div className='w-100 homepage_foursection pt-5'>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-md-6'>
                            <img src="https://i0.wp.com/workspace.vmeals.ae/wp-content/uploads/2019/06/Photo-07-11-2021-8-54-25-AM.jpg?ssl=1" className='w-100 image_ border-radius' />
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
                    <GoogleReviewComponents></GoogleReviewComponents>
                </div>
            </div>
            {/* home page five section  */}


            <Footer></Footer>
        </>
    );
}