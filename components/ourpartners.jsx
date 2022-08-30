import useTranslation from 'next-translate/useTranslation';
import SliderComponent from './homepage/sliderComponent';
import Footer from './layout/footer';
import Header from './layout/header';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

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


    const howContactYou = (e) => {

    }

    const InquireType = (e) => {

    }

    const setMessageFunction = (e) => {

    }

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
                            <div className='bg-success-light w-100 p-3 border-radius' style={{ minHeight: "60vh" }}>

                                <div className='row mb-3'>
                                    <div className='col-md-12 py-3'>
                                        <h2 className='text-success bold-700'>{t("Register your Company")}</h2>
                                    </div>
                                </div>

                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 0, width: '100%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div className='row my-3'>
                                        <div className='col-md-6'>
                                            <TextField
                                                required
                                                className='bg-white border-radius box-shadow'
                                                id="outlined-required1"
                                                label="First Name"
                                                defaultValue=""
                                            />
                                        </div>

                                        <div className='col-md-6'>
                                            <TextField
                                                required
                                                className='bg-white border-radius box-shadow'
                                                id="outlined-required2"
                                                label="Last Name"
                                                defaultValue=""
                                                type={"text"}
                                            />
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-md-12 my-3'>
                                            <TextField
                                                required
                                                className='bg-white border-radius box-shadow'
                                                id="outlined-required3"
                                                label="Email"
                                                defaultValue=""
                                                type={"email"}
                                            />
                                        </div>

                                        <div className='col-md-12 my-3'>
                                            <TextField
                                                required
                                                className='bg-white border-radius box-shadow'
                                                id="outlined-required4"
                                                label="Mobile Number"
                                                defaultValue=""
                                                type={"number"}
                                            />
                                        </div>
                                    </div>

                                    <div className='row my-3'>
                                        <div className='col-md-6 my-3'>
                                            <TextField
                                                required
                                                className='bg-white border-radius box-shadow'
                                                id="outlined-required5"
                                                label="Company Name"
                                                defaultValue=""
                                            />
                                        </div>

                                        <div className='col-md-6 my-3'>
                                            <TextField
                                                required
                                                className='bg-white border-radius box-shadow'
                                                id="outlined-required6"
                                                label="Your Designation"
                                                defaultValue=""
                                                type={"text"}
                                            />
                                        </div>
                                    </div>

                                    <div className='col-md-12 my-3'>
                                        <Button variant="contained" color='success' className="w-100 border-radius">Submit</Button>
                                    </div>
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* home page first section  */}


            < Footer ></Footer >
        </>
    );
}