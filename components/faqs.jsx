import useTranslation from 'next-translate/useTranslation';
import Footer from './layout/footer';
import Header from './layout/header';
import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { FaPhone, FaMailBulk, FaMapMarker } from "react-icons/fa";
import Link from 'next/link';
import ApiCalls from '../utils/apicalls';
import Constants from '../utils/constants';


export default function FaqsComponent() {
    const { t } = useTranslation('common');
    const [pageLoading, setPageloading] = useState(true)
    const [faqsLeft, setFaqsLeft] = useState([])
    const [faqsList, setFaqsList] = useState([])

    useEffect(() => {
        getFaqsLeftSide()
        getFaqsList()
    }, [])

    const getFaqsLeftSide = () => {
        let result = ApiCalls.getFaqsLeftSideData()
        result.then(response => {
            if (response.data.status == 200) {
                setFaqsLeft(response.data.data)
            }
            setPageloading(true)
        }).catch(e => {
            setPageloading(false)
        })
    }

    const getFaqsList = () => {
        let result = ApiCalls.getFaqsList()
        result.then(response => {
            if (response.data.status == 200) {
                setFaqsList(response.data.data)
            }
            setPageloading(true)
        }).catch(e => {
            setPageloading(false)
        })
    }

    return (
        <>
            <Header page={"about"} subpage="faqs"></Header>

            <div className='w-100'>
                <div className='container mt-5 pt-5' style={{ "minHeight": "80vh" }}>
                    <div className='row mt-5'>
                        <div className='col-md-6 col-lg-6'>
                            {
                                (faqsLeft.length > 0) && (
                                    faqsLeft.map((data, index) => (
                                        (data.postMeta.type[0] == "__faqs_left_1") && (
                                            <div key={index}>
                                                <h1 className='bold-700 text-success'>{data.postMeta.title[0]}</h1>

                                                <div dangerouslySetInnerHTML={{ __html: data.postMeta.details[0] }} className="mb-2"></div>
                                            </div>
                                        )
                                    ))
                                )
                            }

                            <Link href={Constants.whtasapp_link}><a target="_blank" rel='noreferrer' className='btn btn-md btn-success px-4'>Contact Us</a></Link>

                            {
                                (faqsLeft.length > 0) && (
                                    faqsLeft.map((data, index) => (
                                        (data.postMeta.type[0] == "__faqs_left_2") && (
                                            <div key={index}>
                                                <h3 className='bold-700 mt-5'>{data.postMeta.title[0]}</h3>

                                                <div dangerouslySetInnerHTML={{ __html: data.postMeta.details[0] }} className="mb-4"></div>
                                            </div>
                                        )
                                    ))
                                )
                            }

                            <p>
                                <Link href={"tel:+971 56 29 22 081"}>
                                    <a className='t-18 text-success text-decoration-none' target={"_blank"} rel="noreferrer"><FaPhone className='pull-left mt-1'></FaPhone>&nbsp; +971 56 29 22 081</a>
                                </Link>
                            </p>
                            <p>
                                <Link href={"mailto:info@vmeals.ae"}>
                                    <a className='t-18 text-success text-decoration-none' target={"_blank"} rel="noreferrer"><FaMailBulk className='pull-left mt-1'></FaMailBulk>&nbsp; info@vmeals.ae</a>
                                </Link>
                            </p>
                            <p>
                                <Link href={""}>
                                    <a className='t-18 text-success text-decoration-none' target={"_blank"} rel="noreferrer"><FaMapMarker className='pull-left mt-1'></FaMapMarker>&nbsp; Shop 5, Oxford Tower, Business Bay, Dubai, U.A.E</a>
                                </Link>
                            </p>
                        </div>


                        <div className='col-md-6 col-lg-6 accordeon_faq'>
                            {
                                (pageLoading) && (
                                    <>
                                        <Accordion defaultActiveKey="0">
                                            {
                                                (faqsList.length > 0) && (
                                                    faqsList.map((data, index) => (
                                                        <Accordion.Item key={index} eventKey={index}>
                                                            <Accordion.Header>{data.postMeta.title[0]}</Accordion.Header>
                                                            <Accordion.Body>
                                                                <div dangerouslySetInnerHTML={{ __html: data.postMeta.details[0] }}></div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    ))
                                                )
                                            }
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