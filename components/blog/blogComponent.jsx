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
import { FaAngleDoubleRight, FaAngleRight } from "react-icons/fa"


export default function BlogComponent() {
    const { t } = useTranslation('common');
    const axios = require('axios');
    const [allreview, setAllreviews] = useState([])
    const [blogs, setBlogs] = useState([])
    const [recentblogs, setRecentBlogs] = useState([])
    const [pageloading, setPageloading] = useState(true)
    const [allcategories, setAllcategories] = useState([])
    const [chooseUs, setChooseUs] = useState([])
    const [metaData, setMetaData] = useState({
        title: "Vmeals",
        description: "Vmeals",
        image: "",
    })

    const getAllBlog = () => {
        let result = ApiCalls.getAllBlog()
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

    const getAllCategories = () => {
        let result = ApiCalls.getAllCategories()
        result.then(response => {
            if (response.data.status == 200) {
                setAllcategories(response.data.data)

                let allCategoriesSlug = []
                for (let i = 0; i < response.data.data.length; i++) {
                    allCategoriesSlug.push(response.data.data[i].slug)
                }
                window.localStorage.setItem("categoriesSlug", JSON.stringify(allCategoriesSlug))
            }
        })
    }

    const getRecentBlog = () => {
        let result = ApiCalls.getRecentBlog()
        result.then(response => {
            if (response.data.status == 200) {
                setRecentBlogs(response.data.data)
            }
        })
    }

    useEffect(() => {
        getAllBlog()
        getAllCategories()
        getRecentBlog()
    }, [])

    return (
        <>

            <Header page={"about"} subpage="blog"></Header>

            {/* home page five section  */}
            <div className='w-100 pt-5 mt-5' >
                <div className='col-md-11 col-lg-10 mx-auto mt-5 px-2'>

                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h1 className='text-success bold-800'>Blog</h1>
                            <p><Link href={"/"}><a className='text-success bold-700'>Home</a></Link> / Blog</p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-7 col-lg-9'>
                            <div className='row'>
                                {
                                    (blogs.length > 0) ? (
                                        blogs.map((data, index) => (
                                            <div className='col-md-12 col-lg-6 mb-4' key={index}>
                                                <div className='blog_card w-100 position-relative bg-success-light p-0'>
                                                    <div className="content_img_div">
                                                        <Image className='content_img' objectFit='cover' src={data.customImage} layout='fill' />
                                                    </div>

                                                    <span className='content_category box-shadow bg-success text-white bold-700 px-4 py-2 border-radius'>
                                                        <Link href={(data.category[0]) ? "/" + data.category[0].category_nicename : "/"}>
                                                            <a className='text-white'>{(data.category[0]) ? data.category[0].name : ""}</a>
                                                        </Link>
                                                    </span>

                                                    <div className='content_text pb-4 px-3'>
                                                        <h4 className='bold-800 text-center cut-text-2'>
                                                            <Link href={data.post_name}>
                                                                <a className='text-success-hover'>{data.postMeta._yoast_wpseo_title[0]}</a>
                                                            </Link>
                                                        </h4>
                                                        <p className='text-center cut-text-3'>{data.postMeta._yoast_wpseo_metadesc[0]}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <></>
                                    )
                                }

                            </div>
                        </div>
                        <div className='col-md-5 col-lg-3'>

                            <div className='col-md-12 mt-5'>
                                <h2 className='bold-800'>Categories</h2>
                                <hr className='bg-success text-success' />

                                <div className='col-md-12'>
                                    {
                                        (allcategories.length > 0) && (
                                            allcategories.map((data, index) => (
                                                <>
                                                    <Link href={data.slug} key={index}>
                                                        <a className='bold-700 text-success-hover' key={index}><FaAngleRight className='text-success'></FaAngleRight> {data.name} ({data.count})</a>
                                                    </Link>
                                                    <hr className='hr' />
                                                </>
                                            ))
                                        )
                                    }
                                </div>
                            </div>

                            <div className='col-md-12 mt-5'>
                                <h2 className='bold-800'>Recent Posts</h2>
                                <hr className='bg-success text-success' />

                                <div className='col-md-12'>
                                    {
                                        (recentblogs.length > 0) && (
                                            recentblogs.map((data, index) => (
                                                <>
                                                    <Link href={data.post.post_name} key={index}>
                                                        <div className='row cursor-pointer'>
                                                            <div className='col-md-4'>
                                                                <Image width={100} height={100} className='content_img border-radius' objectFit='cover' src={(data.customImage) ? data.customImage : "https://www.ardb.com.kh/wp-content/themes/RDB/images/no-image.jpg"} />
                                                            </div>
                                                            <div className='col-md-8'>
                                                                <p><a className='text-success bold-700'>{(data.category[0]) ? data.category[0].name : ""}</a></p>
                                                                <h5><a className='bold-700 text-success-hover' key={index}>{data.post.post_title}</a></h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <hr className='hr' />
                                                </>
                                            ))
                                        )
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
            {/* home page five section  */}

            <Footer></Footer>

        </>
    );
}