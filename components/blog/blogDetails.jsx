import useTranslation from 'next-translate/useTranslation';
import React, { useState } from "react";
import { useEffect } from 'react';
import ApiCalls from '../../utils/apicalls';
import Header from '../layout/header';
import Footer from '../layout/footer';
import 'react-loading-skeleton/dist/skeleton.css'
import Link from 'next/link';
import Image from 'next/image';
import { FaAngleDoubleRight, FaAngleRight } from "react-icons/fa"
import { height } from '@mui/system';


export default function BlogDetailsComponent({ data }) {

    const { t } = useTranslation('common');
    const axios = require('axios');

    const [blogs, setBlogs] = useState(data)
    const [recentblogs, setRecentBlogs] = useState([])
    const [pageloading, setPageloading] = useState(true)
    const [allcategories, setAllcategories] = useState([])

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
        getAllCategories()
        getRecentBlog()
    }, [])

    return (
        <>

            {/* home page five section  */}
            <div className='w-100 py-5 my-5' >

                <div className='col-md-12 text-center mt-5'>

                    <p><span className='bg-success badge p-2 t-15 border-radius bold-700 px-3'>{data.category[0].name}</span></p>
                    <h1 className='bold-800'>{data.data.post_title}</h1>

                </div>

                <div className='col-md-11 col-lg-10 mx-auto mt-5 px-2'>

                    <div className='row'>
                        <div className='col-md-7 col-lg-9'>
                            <div className='row'>

                                <div className='col-md-10 mx-auto'>
                                    <div className='col-md-12 position-relative' style={{ height: "500px" }}>
                                        <Image src={data.customImage} layout={"fill"} objectFit={"cover"} className="border-radius" />
                                    </div>

                                    <div className='col-md-12 text-justify _blogDetails position-relative mt-5'>
                                        <div dangerouslySetInnerHTML={{__html: data.data.post_content}}></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-md-5 col-lg-3 pb-5 mb-5'>

                            <div className='col-md-12 mt-5'>
                                <h2 className='bold-800'>Categories</h2>
                                <hr className='bg-success text-success' />

                                <div className='col-md-12'>
                                    {
                                        (allcategories.length > 0) && (
                                            allcategories.map((data, index) => (
                                                <div key={index}>
                                                    <Link href={data.slug} key={index}>
                                                        <a className='bold-700 text-success-hover' key={index}><FaAngleRight className='text-success'></FaAngleRight> {data.name} ({data.count})</a>
                                                    </Link>
                                                    <hr className='hr' />
                                                </div>
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
                                                <div key={index}>
                                                    <Link href={data.post.post_name} key={index}>
                                                        <div className='row cursor-pointer' key={index}>
                                                            <div className='col-sm-4'>
                                                                <Image width={100} height={100} className='content_img border-radius' objectFit='cover' src={(data.customImage) ? data.customImage : "https://www.ardb.com.kh/wp-content/themes/RDB/images/no-image.jpg"} />
                                                            </div>
                                                            <div className='col-sm-8'>
                                                                <p><a className='text-success bold-700'>{(data.category[0]) ? data.category[0].name : ""}</a></p>
                                                                <h5><a className='bold-700 text-success-hover' key={index}>{data.post.post_title}</a></h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <hr className='hr' />
                                                </div>
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

        </>
    );
}