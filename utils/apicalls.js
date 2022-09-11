import AppLink from "./urls"
import axios from "axios";

const getAllReviews = () => {
    let params = {
        url: AppLink.API_NEXT + "reviews",
        method: "GET",
    }
    return axios(params)
}

const getHomePageSlider = () => {
    let params = {
        url: AppLink.API_NEXT + "getHomePageSlider",
        method: "GET",
    }
    return axios(params)
}

const getHomePageChooseUs = () => {
    let params = {
        url: AppLink.API_NEXT + "getHomepageChooseUs",
        method: "GET",
    }
    return axios(params)
}

const getHomePageHowItsWork = () => {
    let params = {
        url: AppLink.API_NEXT + "getHomepageHowItsWork",
        method: "GET",
    }
    return axios(params)
}

const getFaqsLeftSideData = () => {
    let params = {
        url: AppLink.API_NEXT + "getFaqsLeftSideData",
        method: "GET",
    }
    return axios(params)
}

const getFaqsList = () => {
    let params = {
        url: AppLink.API_NEXT + "getFaqsList",
        method: "GET",
    }
    return axios(params)
}

const getOurCompanyFirstSection = () => {
    let params = {
        url: AppLink.API_NEXT + "OurCompanyFirstSection",
        method: "GET",
    }
    return axios(params)
}

const getProductList = () => {
    let params = {
        url: AppLink.API_NEXT + "getProductList",
        method: "GET",
    }
    return axios(params)
}

const getMealPlansMeta = () => {
    let params = {
        url: AppLink.API_NEXT + "getMealPlansMeta",
        method: "GET",
    }
    return axios(params)
}

const getMealPlansleftside = () => {
    let params = {
        url: AppLink.API_NEXT + "getMealPlansleftside",
        method: "GET",
    }
    return axios(params)
}

const getAllBlog = () => {
    let params = {
        url: AppLink.API_NEXT + "getAllBlog",
        method: "GET",
    }
    return axios(params)
}

const getBlogById = (id) => {
    let params = {
        url: AppLink.API_NEXT + "getBlogById",
        method: "POST",
        data: {
            'id': id
        },
        Headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
    return axios(params)
}

const getAllCategories = () => {
    let params = {
        url: AppLink.API_NEXT + "getAllCategories",
        method: "GET",
    }
    return axios(params)
}

const getRecentBlog = () => {
    let params = {
        url: AppLink.API_NEXT + "getRecentBlog",
        method: "GET",
    }
    return axios(params)
}

const ApiCalls = {
    "getAllReviews": getAllReviews,
    "getHomePageDatas": getHomePageSlider,
    "getHomePageChooseUs": getHomePageChooseUs,
    "getHomePageHowItsWork": getHomePageHowItsWork,
    "getFaqsLeftSideData": getFaqsLeftSideData,
    "getFaqsList": getFaqsList,
    "getOurCompanyFirstSection": getOurCompanyFirstSection,
    'getProductList': getProductList,
    "getMealPlansMeta": getMealPlansMeta,
    "getMealPlansleftside": getMealPlansleftside,
    "getAllBlog": getAllBlog,
    "getBlogById": getBlogById,
    "getAllCategories": getAllCategories,
    "getRecentBlog": getRecentBlog
}

export default ApiCalls