import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
// import GoogleReviewComponents from './googlereviews';
import Footer from './layout/footer';
import Header from './layout/header';

export default function OurCompanyComponent() {
    const { t } = useTranslation('common');

    const firstContentData = {
        title: "Our Company",
        description: "We here at <a href='#'>VMeals</a> believe that the foundation of a happy life lies in how healthy and good we feel about ourselves. We are a company devoted to changing lives by raising awareness and providing solutions for a healthy lifestyle.We are here to help you get a step closer to your goals, whether it is to manage a business lifestyle or initiating a transformation journey; we’ve got you covered! We have brought together a team of chefs and nutritionists with over 100 years of combined industry experience, collaborating to make a positive impact on your life.",
        description2: "“We are here to help you get a step closer to your goals, whether it is to manage a business lifestyle or initiating a transformation journey; we’ve got you covered! We have brought together a team of chefs and nutritionists with over 100 years of combined industry experience, collaborating to make a positive impact on your life”",
        banner: "Healthy is not boring",
        image: "https://i0.wp.com/workspace.vmeals.ae/wp-content/uploads/2022/07/DSC_8635.jpg?resize=1024%2C680&ssl=1"
    }

    const secondContentData = {
        title: "Our Vision Mission & Goal",
        description: "We here at <a href='#'>VMeals</a> believe that the foundation of a happy life lies in how healthy and good we feel about ourselves. We are a company devoted to changing lives by raising awareness and providing solutions for a healthy lifestyle.We are here to help you get a step closer to your goals, whether it is to manage a business lifestyle or initiating a transformation journey; we’ve got you covered! We have brought together a team of chefs and nutritionists with over 100 years of combined industry experience, collaborating to make a positive impact on your life.",
        image: "https://i0.wp.com/workspace.vmeals.ae/wp-content/uploads/2022/07/Vision-Mission-1.jpg?resize=1024%2C403&ssl=1"
    }

    const thirdContentData = [
        {
            image: "https://i0.wp.com/workspace.vmeals.ae/wp-content/uploads/2022/04/CEO.jpg?fit=952%2C1213&ssl=1",
            name: "ARAJ HASSAN",
            role: "CEO"
        },
        {
            image: "https://i0.wp.com/workspace.vmeals.ae/wp-content/uploads/2022/07/Maria.jpg?fit=4252%2C5102&ssl=1",
            name: "Maria",
            role: "MARKETING MANAGER"
        },
        {
            image: "https://i0.wp.com/workspace.vmeals.ae/wp-content/uploads/2022/07/Gunjan.jpg?fit=4252%2C5102&ssl=1",
            name: "GUNJAN",
            role: "NUTRITIONIST"
        },
        {
            image: "https://i0.wp.com/workspace.vmeals.ae/wp-content/uploads/2022/07/Amal.jpg?fit=4252%2C5102&ssl=1",
            name: "Amal",
            role: "DIETITIAN"
        }
    ]

    return (
        <>
            <Header page={"about"} subpage="company"></Header>

            {/* home page first section  */}
            <div className='w-100 company_firstsection pt-5' style={{ "background": "url(./images/Waves-Object.jpg)bottom/contain no-repeat" }}>
                <div className="container pt-5 mt-5">
                    <div className='row'>
                        <div className='col-md-6'>
                            <h1 className='bold-700'>{firstContentData.title}</h1>
                            <div className='text-justify external_text' dangerouslySetInnerHTML={{ __html: firstContentData.description }}></div>
                            <div className='mt-5 bold-700 text-justify'><blockquote>{firstContentData.description2}</blockquote></div>
                            <div className='banner bold-700'>{firstContentData.banner}</div>
                        </div>
                        <div className='col-md-6 p-3'>
                            <Image width={650} height={450} src={firstContentData.image} className="w-100 border-radius" />
                        </div>
                    </div>
                </div>
            </div>
            {/* home page first section  */}

            {/* home page second section  */}
            <div className='w-100 company_seocndsection pt-1'>
                <div className="container mt-5">
                    <div className='col-md-12 mx-auto text-center position-relative'>
                        <h2 className='bold-700 pb-5'>{secondContentData.title}</h2>
                        <div className='col-md-12 position-relative company_seocndsection_image_div' style={{ "height": "55vh" }}>
                            <Image layout='fill' src={secondContentData.image} className="w-100" style={{ "objectFit": "contain" }} />
                        </div>
                    </div>
                </div>
            </div>
            {/* home page second section  */}

            {/* home page third section  */}
            <div className='w-100 company_seocndsection pt-5'>
                <div className="container mt-5">
                    <div className='col-md-12 mb-5'><h2 className='text-center bold-700'>{t("Our Family")}</h2></div>
                    <div className='row'>
                        {
                            (thirdContentData.length > 0) ? (
                                thirdContentData.map((data, index) => (
                                    <div key={index} className='col-lg-3 col-sm-6 col-md-6 mb-3 position-relative'>
                                        <div className='upper_div'></div>
                                        <span className="image_">
                                            <Image layout='fill' src={data.image} className="object-fit-cover" style={{"objectPosition": "top", "borderRadius": "50%"}}/>
                                        </span>
                                        <div className='down_div text-center'>
                                            <h4 className='text-white text-uppercase bold-700'>{data.name}</h4>
                                            <h5 className='text-success text-uppercase bold-700'>{data.role}</h5>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <></>
                            )
                        }
                    </div>
                </div>
            </div>
            {/* home page third section  */}

            {/* page five section  */}
            <div className='w-100 company_fivesection pt-5'>
                <div className='container'>
                    {/* <GoogleReviewComponents></GoogleReviewComponents> */}
                </div>
            </div>
            {/* page five section  */}


            <Footer></Footer>
        </>
    );
}