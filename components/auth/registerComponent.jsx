import useTranslation from 'next-translate/useTranslation';
import Footer from '../layout/footer';
import Header from '../layout/header';
import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { FaPhone, FaMailBulk, FaMapMarker } from "react-icons/fa";
import Link from 'next/link';


export default function RegisterComponent() {
    const { t } = useTranslation('common');
    const [pageLoading, setPageloading] = useState(true)

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

    useEffect(() => {
        setPageloading(true)
    }, [])

    return (
        <>
            <Header page={"about"} subpage="faqs"></Header>

            <div className='w-100'>
                <div className='container mt-5 pt-5' style={{ "minHeight": "80vh" }}>
                    <div className='row mt-5'>
                        <div className='col-md-6 col-lg-6'>
                            <h1 className='bold-700 text-success'>Every day fresh and healthy meals</h1>

                            <p>
                                Experience our fresh and healthy meals every day at your doorstep. You can choose your plan as per your requirements and preferences. Each meal is prepared, packed, and delivered hygienically.
                            </p>

                            <button className='btn btn-md btn-success'>Contact Us</button>

                            <h3 className='bold-700 mt-5'>If you need more help</h3>

                            <p className='mb-4'>
                                If you not sure which diet plan you should choose, you can talk to our experts, and we can suggest to you the best possible option for your health goal.
                            </p>

                            <p>
                                <Link href={"tel:+971 56 29 22 081"}>
                                    <a className='t-18 text-success' target={"_blank"} rel="noreferrer"><FaPhone className='pull-left mt-1'></FaPhone>&nbsp; +971 56 29 22 081</a>
                                </Link>
                            </p>
                            <p>
                                <Link href={"mailto:info@vmeals.ae"}>
                                    <a className='t-18 text-success' target={"_blank"} rel="noreferrer"><FaMailBulk className='pull-left mt-1'></FaMailBulk>&nbsp; info@vmeals.ae</a>
                                </Link>
                            </p>
                            <p>
                                <Link href={""}>
                                    <a className='t-18 text-success' target={"_blank"} rel="noreferrer"><FaMapMarker className='pull-left mt-1'></FaMapMarker>&nbsp; Shop 5, Oxford Tower, Business Bay, Dubai, U.A.E</a>
                                </Link>
                            </p>
                        </div>


                        <div className='col-md-6 col-lg-6 accordeon_faq'>
                            {
                                (pageLoading) && (
                                    <>
                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
}