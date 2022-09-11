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


export default function BlogDetailsComponent({ID}) {
    const { t } = useTranslation('common');
    const axios = require('axios');
    const [allreview, setAllreviews] = useState([])
    const [blogs, setBlogs] = useState([])
    const [pageloading, setPageloading] = useState(true)
    const [leftside, setLeftSide] = useState([])
    const [chooseUs, setChooseUs] = useState([])
    const [metaData, setMetaData] = useState({
        title: "Vmeals",
        description: "Vmeals",
        image: "",
    })

    const getBlogDetails = () => {
        let result = ApiCalls.getBlogById(ID)
        result.then(response => {
            if (response.data.status == 200) {
                setBlogs(response.data.data)
                setPageloading(false)
            } else {
                setPageloading(true)
            }
        }).catch(e => {
            setPageloading(true)
        })
    }

    useEffect(() => {
        getBlogDetails()
    }, [])

    return (
        <>

            <Header page={"about"} subpage="blog"></Header>

            {/* home page five section  */}
            <div className='w-100 pt-5 mt-5' >
                <div className='container mt-5'>

                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h1 className='text-success bold-800'>Blog</h1>
                            <p><Link href={"/"}><a className='text-success bold-700'>Home</a></Link> / Blog</p>
                        </div>
                    </div>

                    <div className='row'>

                    </div>
                </div>
            </div >
            {/* home page five section  */}

            <Footer></Footer>

        </>
    );
}