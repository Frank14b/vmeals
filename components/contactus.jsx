import useTranslation from 'next-translate/useTranslation';
import Footer from './layout/footer';
import Header from './layout/header';
import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { FaPhone, FaMailchimp, FaMapMarker, FaClock, FaMailBulk, FaWhatsapp } from "react-icons/fa";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';


export default function ContactUsComponent() {
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

    const howContactYou = (e) => {

    }

    const InquireType = (e) => {

    }

    const setMessageFunction = (e) => {

    }

    useEffect(() => {
        setPageloading(true)
    }, [])

    return (
        <>
            <Header page={"contactus"} subpage=""></Header>

            <div className='w-100'>
                <div className='container my-5 pt-5' style={{ "minHeight": "80vh" }}>
                    <div className='row mt-5'>

                        <div className='col-md-12'>
                            <iframe className='border-radius' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.781980368394!2d55.17432021467844!3d24.973531284000714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f734780613171%3A0x9b38f89b310dd026!2sVMeals!5e0!3m2!1sen!2sin!4v1636199074513!5m2!1sen!2sin" height="450" style={{ border: "0px", PointerEvent: "none", width: "100%" }} allowFullScreen="" loading="lazy"></iframe>
                        </div>


                        <div className='col-md-6 col-lg-6 p-3'>

                            <div className='col-md-12 bg-success-light p-4 border-radius'>
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
                                        <div className='col-md-12'>
                                            <div className='row'>
                                                <div className='col-md-6' style={{ paddingLeftL: "16px" }}>
                                                    <FormControl fullWidth>
                                                        <InputLabel id="demo-simple-select-label">Inquiry Type *</InputLabel>
                                                        <Select
                                                            className='bg-white border-radius box-shadow'
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            label="Inquiry Type"
                                                            onChange={InquireType}
                                                            required
                                                        >
                                                            <MenuItem value={""}></MenuItem>
                                                            <MenuItem value={10}>Ten</MenuItem>
                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </div>

                                                <div className='col-md-6'>
                                                    <FormControl fullWidth>
                                                        <InputLabel id="demo-simple-select-label2">How should we contact you? *</InputLabel>
                                                        <Select
                                                            className='bg-white border-radius box-shadow'
                                                            labelId="demo-simple-select-label2"
                                                            id="demo-simple-select2"
                                                            label="Inquiry Type"
                                                            onChange={howContactYou}
                                                            required
                                                        >
                                                            <MenuItem value={""}></MenuItem>
                                                            <MenuItem value={10}>Ten</MenuItem>
                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-md-12 my-3'>
                                            <TextField
                                                className='bg-white border-radius box-shadow'
                                                id="outlined-multiline-flexible"
                                                label="Message"
                                                required
                                                multiline
                                                maxRows={4}
                                                onChange={setMessageFunction}
                                            />
                                        </div>

                                        <div className='col-md-12 my-3'>
                                            <Button variant="contained" color='success' className="w-100 border-radius">Submit</Button>
                                        </div>

                                    </div>
                                </Box>
                            </div>

                        </div>

                        <div className='col-md-6 col-lg-6 my-5'>
                            <h1 className='bold-700 text-success mb-4'>Let’s have a chat!</h1>

                            <p>
                                <Link href={"tel:+971 56 29 22 081"}>
                                    <a className='t-20 my-2 text-decoration-none text-black' target={"_blank"} rel="noreferrer"><FaPhone className='pull-left mt-1 text-success'></FaPhone>&nbsp; +971 56 29 22 081</a>
                                </Link>
                            </p>
                            <p>
                                <Link href={"mailto:info@vmeals.ae"}>
                                    <a className='t-20 my-2 text-decoration-none text-black' target={"_blank"} rel="noreferrer"><FaMailBulk className='pull-left mt-1 text-success'></FaMailBulk>&nbsp; info@vmeals.ae</a>
                                </Link>
                            </p>
                            <p>
                                <Link href={"#"}>
                                    <a className='t-20 my-2 text-decoration-none text-black' rel="noreferrer"><FaClock className='pull-left mt-1 text-success'></FaClock>&nbsp; Saturday – Thursday | 9:00am – 9:00pm</a>
                                </Link>
                            </p>
                            <p>
                                <Link href={"#"}>
                                    <a className='t-20 my-2 text-decoration-none text-black' rel="noreferrer"><FaMapMarker className='pull-left mt-1 text-success'></FaMapMarker>&nbsp; Shop 5, Oxford Tower, Business Bay, Dubai, U.A.E</a>
                                </Link>
                            </p>

                            <h5 className='bold-700 my-4'>{t("Connect with us!")}</h5>

                            <Link href={""}>
                                <a className='btn btn-success btn-md' target={"_blank"} rel="noreferrer"><FaWhatsapp></FaWhatsapp>&nbsp; Whatsapp</a>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
}