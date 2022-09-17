import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';
import ApiCalls from '../utils/apicalls';
import GoogleReviewComponents from './googlereviews';
import Footer from './layout/footer';
import Header from './layout/header';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function OurCompanyComponent() {
    const { t } = useTranslation('common');
    const [ourCompanyData, setOurCompanyData] = useState([])
    const [thirdContentData, setThirdContentData] = useState([])
    const [firstContentData, setFirstContentData] = useState(null)
    const [secondContentData, setSecondContent] = useState([])
    const [pageloading, setPageloading] = useState(false)
    const [metaInfos, setMetaInfos] = useState({
        title: "Vmeals",
        description: "Vmeals",
        image: "",
    })
    const [show, setShow] = useState(false);
    const [mvvgChoose, setMvvgChoose] = useState("")

    const getOurCompanyFirstSection = () => {
        let result = ApiCalls.getOurCompanyFirstSection()
        result.then(response => {
            if (response.data.status == 200) {
                setOurCompanyData(response.data.data)
            }
            setPageloading(true)
        }).catch(e => {
            setPageloading(false)
        })
    }

    useEffect(() => {
        getOurCompanyFirstSection()
    }, [])

    useEffect(() => {
        let ourfamily = []
        let secondContent = []

        if (ourCompanyData.length > 0) {
            for (let i = 0; i < ourCompanyData.length; i++) {
                let data = ourCompanyData[i]
                if (data.postMeta.section_header[0] == "Our Family") {
                    ourfamily.push({
                        image: data.customImage.guid,
                        name: data.postMeta.title[0],
                        role: data.postMeta.description[0]
                    })
                }

                if (data.postMeta.title[0] == "mvvg") {
                    secondContent.push({
                        image: data.customImage.guid,
                        title: data.postMeta.title[0],
                        description: data.postMeta.description[0]
                    })
                }

                if (data.postMeta.section_header[0] == "Our Company") {
                    setFirstContentData({
                        title: data.postMeta.title[0],
                        description: data.postMeta.description[0],
                        description2: "",
                        banner: data.postMeta.banner[0],
                        image: data.customImage.guid,
                        background: data.customBackground.guid
                    })
                }

                if (data.postMeta.section_header[0] == "meta data") {
                    setMetaInfos({
                        title: data.postMeta.title[0],
                        description: data.postMeta.description[0],
                        image: data.customImage.guid,
                    })
                }
            }

            setThirdContentData(ourfamily)
            setSecondContent(secondContent)
        }
    }, [ourCompanyData])

    return (
        <>
            <Header page={"about"} subpage="company" title={metaInfos.title} description={metaInfos.description} banner={metaInfos.image}></Header>

            {/* home page first section  */}
            {
                (firstContentData) ? (
                    <div className='w-100 company_firstsection pt-5' style={{ "background": "url(" + firstContentData.background + ")bottom/contain no-repeat" }}>
                        <div className="col-md-10 mx-auto pt-5 mt-5">
                            <div className='row px-5'>
                                <div className='col-md-6 px-5'>
                                    <h1 className='bold-700'>{firstContentData.title}</h1>
                                    <div className='text-justify external_text' dangerouslySetInnerHTML={{ __html: firstContentData.description }}></div>
                                    {/* <div className='mt-5 bold-700 text-justify'><blockquote>{firstContentData.description2}</blockquote></div> */}
                                    <div className='banner bold-700'>{firstContentData.banner}</div>
                                </div>
                                <div className='col-md-6 p-3 position-relative ' style={{ height: "450px" }}>
                                    <Image layout='fill' objectFit='cover' src={firstContentData.image} className="w-100 border-radius" />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )
            }

            {/* home page first section  */}

            {/* home page second section  */}
            <div className='w-100 company_seocndsection pt-1'>
                <div className="col-md-10 mx-auto mt-5">
                    <div className='row'>
                        {
                            (secondContentData.length > 0) ? (
                                secondContentData.map((data, index) => (
                                    <div key={index} className='col-lg-3 col-sm-6 col-md-6 mb-3 position-relative p-3'>
                                        {/* <div className='upper_div'></div> */}
                                        <div onClick={() => {setMvvgChoose(data.image); setShow(true)}} className="position-relative cursor-pointer" style={{ height: "500px" }}>
                                            <Image layout='fill' objectFit='contain' src={data.image} />
                                        </div>
                                        {/* <div className='down_div text-center'>
                                            <h4 className='text-white text-uppercase bold-700'>{data.title}</h4>
                                            <h5 className='text-success text-uppercase bold-700'>{data.description}</h5>
                                        </div> */}
                                    </div>
                                ))
                            ) : (
                                <></>
                            )
                        }
                    </div>
                </div>
            </div>
            {/* home page second section  */}

            {/* home page third section  */}
            <div className='w-100 company_seocndsection pt-5'>
                <div className="col-md-10 mx-auto mt-5">
                    <div className='col-md-12 mb-5'><h2 className='text-center bold-700'>{t("Our Family")}</h2></div>
                    <div className='row px-5'>
                        {
                            (thirdContentData.length > 0) ? (
                                thirdContentData.map((data, index) => (
                                    <div key={index} className='col-lg-3 col-sm-6 col-md-6 mb-3 position-relative'>
                                        <div className='upper_div'></div>
                                        <span className="image_">
                                            <Image layout='fill' src={data.image} className="object-fit-cover" style={{ "objectPosition": "top", "borderRadius": "50%" }} />
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
                <div className='col-md-10 mx-auto px-5'>
                    <GoogleReviewComponents></GoogleReviewComponents>
                </div>
            </div>
            {/* page five section  */}


            <Modal show={show} onHide={() => setShow(false)} animation={true}>
                <Modal.Body>
                    <img src={mvvgChoose} className="w-100"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>


            <Footer></Footer>
        </>
    );
}