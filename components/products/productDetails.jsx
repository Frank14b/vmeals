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
import StepperComponent from '../stepperComponent';


export default function ProductDetailsComponent({ data, productTemp }) {

    const { t } = useTranslation('common');
    const axios = require('axios');
    const [pageloading, setPageloading] = useState(true)


    useEffect(() => {
    }, [])

    return (
        <>

            {/* home page five section  */}
            <div className='w-100 py-5 my-5'>

                <div className='w-100 pt-5' >
                    <div className='container'>
                        <StepperComponent active={2}></StepperComponent>
                    </div>
                </div >

                <div className='col-md-11 mx-auto mt-5 px-2'>

                    <div className='row'>
                        <div className='col-md-7'>
                            <h1 className='bold-800 w-100'>
                                {data.name}

                                <span className='badge bg-success text-white border-radius pull-right t-16 p-2 px-3 mt-2 cursor-pointer'>View Weekly Menu</span>
                            </h1>

                            <div className='mt-3 position-relative col-md-12 w-100 border-radius box-shadow' style={{ height: "470px" }}>
                                {
                                    (data.images) && (
                                        <Image src={data.images[0].src} layout={'fill'} objectFit={'cover'} height={470} className="border-radius box-shadow" />
                                    )
                                }
                            </div>
                        </div>

                        <div className='col-md-5 p-2'>
                            <div className='col-md-12 bg-success-light border-radius px-3 py-3'>
                                {
                                    (data.attributes) && (
                                        data.attributes.map((dataAttr, index) => (
                                            <div className='col-md-12' key={index}>
                                                <div className='col-md-12'><h6 className='text-success bold-700'>{dataAttr.name}</h6></div>

                                                <div className='bg-white border-radius my-2'>
                                                    <div className='row Prod_variations text-center mt-3 mb-3'>
                                                        {
                                                            (dataAttr.options.length == 1) && (
                                                                dataAttr.options.map((dataOpt, index2) => (
                                                                    <div className='col-md-12 variation-option position-relative' key={index2}>
                                                                        <p className='bold-700 t-14'>{dataOpt.split(":")[0]}</p>
                                                                        {
                                                                            (dataOpt.split(":")[1]) && (
                                                                                <a className='text-muted prod-var t-14'>{dataOpt.split(":")[1]}</a>
                                                                            )
                                                                        }
                                                                    </div>
                                                                ))
                                                            )
                                                        }

                                                        {
                                                            ([2, 4, 8].includes(dataAttr.options.length)) && (
                                                                dataAttr.options.map((dataOpt, index2) => (
                                                                    <div className='col-md-6 variation-option position-relative' key={index2}>
                                                                        <p className='bold-700 t-14 mt-1'>{dataOpt.split(":")[0]}</p>
                                                                        {
                                                                            (dataOpt.split(":")[1]) && (
                                                                                <a className='text-muted prod-var t-14'>{dataOpt.split(":")[1]}</a>
                                                                            )
                                                                        }
                                                                    </div>
                                                                ))
                                                            )
                                                        }

                                                        {
                                                            ([3, 6, 9].includes(dataAttr.options.length)) && (
                                                                dataAttr.options.map((dataOpt, index2) => (
                                                                    <div className='col-md-4 variation-option position-relative' key={index2}>
                                                                        <p className='bold-700 t-14'>{dataOpt.split(":")[0]}</p>
                                                                        {
                                                                            (dataOpt.split(":")[1]) && (
                                                                                <a className='text-muted prod-var t-14'>{dataOpt.split(":")[1]}</a>
                                                                            )
                                                                        }
                                                                    </div>
                                                                ))
                                                            )
                                                        }
                                                    </div>
                                                </div>

                                            </div>
                                        ))
                                    )
                                }
                            </div>
                        </div>
                    </div>

                </div>

            </div >
            {/* home page five section  */}

        </>
    );
}