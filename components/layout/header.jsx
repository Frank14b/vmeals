import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useEffect } from 'react';
import ApiCalls from '../../utils/apicalls';

export default function Header({ page, subpage, title, description, banner }) {

    const { t } = useTranslation('common');
    const [products, setProducts] = useState([])
    const [pageloading, setPageloading] = useState(false)

    const openToggleMenu = () => {
        if (document.getElementById("navbarSupportedContent").style.display == "none" || document.getElementById("navbarSupportedContent").style.display == "") {
            document.getElementById("navbarSupportedContent").style.display = "block"
            document.getElementById("navbarSupportedContent2").style.display = "block"
        } else {
            document.getElementById("navbarSupportedContent").style.display = "none"
            document.getElementById("navbarSupportedContent2").style.display = "none"
        }
    }

    const getProductList = () => {
        let result = ApiCalls.getProductList()
        result.then(response => {
            if (response.data.status == 200) {
                setProducts(response.data.data)
                window.localStorage.setItem("product_menu", JSON.stringify(response.data.data))
            }
            setPageloading(true)
        }).catch(e => {
            setPageloading(false)
        })
    }

    useEffect(() => {
        let menu = window.localStorage.getItem("product_menu")
        if (menu) {
            setProducts(JSON.parse(menu))
        }

        getProductList()
    }, [])

    return (
        <>
            <Head>
                <title>Vmeals - {title}</title>
                <link href="./images/logo.png" rel="icon" />
                {/* <!-- required meta --> */}
                <meta charSet="UTF-8" />
                {/* <meta http-equiv="X-UA-Compatible" content="IE=edge" /> */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                {/* <!-- keywords for this document --> */}
                <meta name="keywords" content="" />
                {/* <!-- description for this document --> */}
                <meta name="description"
                    content={description} />
                {/* <!-- author of this document --> */}
                <link rel="canonical" href="https://vmeals.ae/" />
                <meta property="og:locale" content="en_GB" />
                <meta property="og:type" content="website" />
                <meta name="auhtor" content="Vmeals" />
                <link rel="profile" href="//gmpg.org/xfn/11" />
                <meta property="og:title" content={title} />
                <meta property="og:site_name" content="Vmeals" />
                <meta property="og:url" content="https://vmeals.com" />
                <meta property="og:description"
                    content={description} />
                <meta property="og:image" content={banner} />
                {/* <meta name="twitter:card" content="summary_large_image" /> */}
                <meta name="twitter:title" content={title} />
                <meta name="twitter:site" content="@Vmeals" />
                <meta name="twitter:description"
                    content={description} />
                <meta name="twitter:image" content={banner} />
                <meta name="application-name" content="Vmeals" />
            </Head>

            <div className='bg-light box-shadow-1 _navbax_fixed'>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link href={"./"}>
                            <span className="navbar-brand img_logo_div">
                                <Image alt='Vmeals' width={80} height={80} src='/images/logo.png' className='p-2 img_logo border' />
                            </span>
                        </Link>
                        <a href='#' onClick={() => openToggleMenu()} className="navbar-toggler border-0" id='btn-navbar-toggle'>
                            <span className="navbar-toggler-icon"></span>
                        </a>

                        <div className='row w-100' id='navbar_menus'>

                            <div className='col-md-6'>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <li clas="nav-item">
                                            <Link href={"./"}>
                                                <a className={`nav-link ${(page == "home") && "active"}`}>{t("_header.Home")}</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className={`nav-link dropdown-toggle ${(page == "about") && "active"}`} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                {t("_header.About")}
                                            </a>
                                            <div className="dropdown-menu box-shadow" aria-labelledby="navbarDropdown">

                                                <Link href={"/our-company"}>
                                                    <a className={`dropdown-item t-14 ${(subpage == "company") && "active"}`}>{t("_header.Our_Company")}</a>
                                                </Link>
                                                <Link href={"/our-partners"}>
                                                    <a className={`dropdown-item t-14 ${(subpage == "partners") && "active"}`}>{t("_header.Our_Partners")}</a>
                                                </Link>
                                                <Link href={"/blog"}>
                                                    <a className={`dropdown-item t-14 ${(subpage == "blog") && "active"}`}>{t("_header.blogs")}</a>
                                                </Link>
                                                <Link href={"/faqs"}>
                                                    <a className={`dropdown-item t-14 ${(subpage == "faqs") && "active"}`}>{t("_header.faqs")}</a>
                                                </Link>

                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link href={"/meal-plans"}>
                                                <a className={`nav-link dropdown-toggle ${(page == "meal plans") && "active"}`} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    {t("_header.Meal_Plans")}
                                                </a>
                                            </Link>
                                            <div className="dropdown-menu box-shadow" aria-labelledby="navbarDropdown">
                                                {
                                                    (products.length > 0) && (
                                                        products.map((data, index) => (
                                                            <Link href={"/" + data.post_name} key={index}>
                                                                <a key={index} className={`dropdown-item t-14 ${(subpage == data.post_title) && "active"}`}>{data.post_title}</a>
                                                            </Link>
                                                        ))
                                                    )
                                                }

                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <Link href={"/contact-us"}>
                                                <a className={`nav-link ${(page == "contactus") && "active"}`}>{t("_header.Need_Assistance")} ?</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent2">
                                    <ul className="navbar-nav mx-auto w-100">
                                        <li className="nav-item w-100">
                                            <Link href={"/meal-plans"}>
                                                <a className="nav-link pull-right"><button className="btn btn-success btn-sm login_btn">{t("_header.Get_Started")}</button></a>
                                            </Link>
                                            <Link href={"/login"}>
                                                <a className="nav-link pull-right"><button className="btn btn-outline-success mx-2 btn-sm login_btn">{t("_header.Login")}</button></a>
                                            </Link>
                                            <span className='pull-right d-flex'>
                                                <Link href={"/"} locale="en">
                                                    <a className="nav-link" href="#">{t("_header.English")}</a>
                                                </Link>
                                                <a className="nav-link"> /</a>
                                                <Link href={"/"} locale="ar">
                                                    <a className="nav-link" href="#">{t("_header.Arabic")}</a>
                                                </Link>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}