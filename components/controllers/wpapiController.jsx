import axios from "axios";
import AppLink from "../../utils/urls";

const qs = require('qs');

const getHomepageSlidersData = (req, res) => { // get homepage slider
    let data = qs.stringify({
        post_title: "HomePageSlide",
        post_type: "sections"
    })
    let params = {
        url: AppLink.API_WP + "homedatas",
        method: "POST",
        data: data,
        headers: {
            "Authorization": "Basic " + btoa("admin:Dubai12345**"),
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
    axios(params).then(response => {
        if (response.status == 200) {
            res.status(200).json({ status: 200, data: response.data })
        } else {
            res.status(200).json({ status: 400, data: [] })
        }
    }).catch(e => {
        console.log(e)
        res.status(400).json({ data: [] })
    })
}

const getHomepageHowItsWork = (req, res) => { // get homepage  how its work
    let params = {
        url: AppLink.API_WP + "homedatas",
        method: "POST",
        data: qs.stringify({
            post_title: "HomePageHow_its_works",
            post_type: "sections"
        }),
        headers: {
            "Authorization": "Basic " + btoa("admin:Dubai12345**"),
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
    axios(params).then(response => {
        if (response.status == 200) {
            res.status(200).json({ status: 200, data: response.data })
        } else {
            res.status(200).json({ status: 400, data: [] })
        }
    }).catch(e => {
        console.log(e)
        res.status(400).json({ data: [] })
    })
}

const getHomepageChooseUs = (req, res) => { // get homepage  how its work
    let params = {
        url: AppLink.API_WP + "homedatas",
        method: "POST",
        data: qs.stringify({
            post_title: "HomePage_Why_ChooseUs",
            post_type: "sections"
        }),
        headers: {
            "Authorization": "Basic " + btoa("admin:Dubai12345**"),
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
    axios(params).then(response => {
        if (response.status == 200) {
            res.status(200).json({ status: 200, data: response.data })
        } else {
            res.status(200).json({ status: 400, data: [] })
        }
    }).catch(e => {
        console.log(e)
        res.status(400).json({ data: [] })
    })
}

const getMealPlansInDubai = (req, res) => {
    let params = {
        url: AppLink.API_WP + "homedatas",
        method: "POST",
        data: qs.stringify({
            post_title: "HomePage_MealPlansInDubai",
            post_type: "sections"
        }),
        headers: {
            "Authorization": "Basic " + btoa("admin:Dubai12345**"),
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
    axios(params).then(response => {
        if (response.status == 200) {
            res.status(200).json({ status: 200, data: response.data })
        } else {
            res.status(200).json({ status: 400, data: [] })
        }
    }).catch(e => {
        console.log(e)
        res.status(400).json({ data: [] })
    })
}

const getFaqsLeftSideData = (req, res) => {
    let params = {
        url: AppLink.API_WP + "homedatas",
        method: "POST",
        data: qs.stringify({
            post_title: "faqs_left_side",
            post_type: "sections"
        }),
        headers: {
            "Authorization": "Basic " + btoa("admin:Dubai12345**"),
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
    axios(params).then(response => {
        if (response.status == 200) {
            res.status(200).json({ status: 200, data: response.data })
        } else {
            res.status(200).json({ status: 400, data: [] })
        }
    }).catch(e => {
        console.log(e)
        res.status(400).json({ data: [] })
    })
}

const getFaqsList = (req, res) => {
    let params = {
        url: AppLink.API_WP + "homedatas",
        method: "POST",
        data: qs.stringify({
            post_type: "faqs"
        }),
        headers: {
            "Authorization": "Basic " + btoa("admin:Dubai12345**"),
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
    axios(params).then(response => {
        if (response.status == 200) {
            res.status(200).json({ status: 200, data: response.data })
        } else {
            res.status(200).json({ status: 400, data: [] })
        }
    }).catch(e => {
        console.log(e)
        res.status(400).json({ data: [] })
    })
}

const OurCompanyFirstSection = (req, res) => {
    let params = {
        url: AppLink.API_WP + "homedatas",
        method: "POST",
        data: qs.stringify({
            post_type: "ourcompany"
        }),
        headers: {
            "Authorization": "Basic " + btoa("admin:Dubai12345**"),
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
    axios(params).then(response => {
        if (response.status == 200) {
            res.status(200).json({ status: 200, data: response.data })
        } else {
            res.status(200).json({ status: 400, data: [] })
        }
    }).catch(e => {
        console.log(e)
        res.status(400).json({ data: [] })
    })
}

const getProductList = (req, res) => {
    let params = {
        url: AppLink.API_WP + "productdatas",
        method: "POST",
        data: qs.stringify({
            post_type: "product"
        }),
        headers: {
            "Authorization": "Basic " + btoa("admin:Dubai12345**"),
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
    axios(params).then(response => {
        if (response.status == 200) {
            res.status(200).json({ status: 200, data: response.data })
        } else {
            res.status(200).json({ status: 400, data: [] })
        }
    }).catch(e => {
        console.log(e)
        res.status(400).json({ data: [] })
    })
}

const getMealPlansMeta = (req, res) => {
    let params = {
        url: AppLink.API_WP + "homedatas",
        method: "POST",
        data: qs.stringify({
            post_title: "mealplans_metadata",
            post_type: "sections"
        }),
        headers: {
            "Authorization": "Basic " + btoa("admin:Dubai12345**"),
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
    axios(params).then(response => {
        if (response.status == 200) {
            res.status(200).json({ status: 200, data: response.data })
        } else {
            res.status(200).json({ status: 400, data: [] })
        }
    }).catch(e => {
        console.log(e)
        res.status(400).json({ data: [] })
    })
}

const getMealPlansleftside = (req, res) => {
    let params = {
        url: AppLink.API_WP + "homedatas",
        method: "POST",
        data: qs.stringify({
            post_title: "meal_plans_left_side",
            post_type: "sections"
        }),
        headers: {
            "Authorization": "Basic " + btoa("admin:Dubai12345**"),
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
    axios(params).then(response => {
        if (response.status == 200) {
            res.status(200).json({ status: 200, data: response.data })
        } else {
            res.status(200).json({ status: 400, data: [] })
        }
    }).catch(e => {
        console.log(e)
        res.status(400).json({ data: [] })
    })
}

const getAllBlog = (req, res) => {
    let params = {
        url: AppLink.API_WP + "blogdatas",
        method: "POST",
        data: qs.stringify({
            post_type: "post"
        }),
        headers: {
            "Authorization": "Basic " + btoa("admin:Dubai12345**"),
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
    axios(params).then(response => {
        if (response.status == 200) {
            res.status(200).json({ status: 200, data: response.data })
        } else {
            res.status(200).json({ status: 400, data: [] })
        }
    }).catch(e => {
        console.log(e)
        res.status(400).json({ data: [] })
    })
}

const getBlogById = (req, res) => {
    let params = {
        url: AppLink.API_WP + "blogdatas",
        method: "POST",
        data: qs.stringify({
            id: req.body.id,
            post_type: "post"
        }),
        headers: {
            "Authorization": "Basic " + btoa("admin:Dubai12345**"),
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
    axios(params).then(response => {
        if (response.status == 200) {
            res.status(200).json({ status: 200, data: response.data })
        } else {
            res.status(200).json({ status: 400, data: [] })
        }
    }).catch(e => {
        console.log(e)
        res.status(400).json({ data: [] })
    })
}

const getAllCategories = (req, res) => {
    let params = {
        url: AppLink.API_WP_1 + "wp/v2/categories",
        method: "GET",
        headers: {
            "Authorization": "Basic " + btoa("admin:Dubai12345**"),
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
    axios(params).then(response => {
        if (response.status == 200) {
            res.status(200).json({ status: 200, data: response.data })
        } else {
            res.status(200).json({ status: 400, data: [] })
        }
    }).catch(e => {
        console.log(e)
        res.status(400).json({ data: [] })
    })
}

const getRecentBlog = (req, res) => {
    let params = {
        url: AppLink.API_WP + "blogdatas",
        method: "POST",
        data: qs.stringify({
            recent_post: true,
            post_type: "post"
        }),
        headers: {
            "Authorization": "Basic " + btoa("admin:Dubai12345**"),
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
    axios(params).then(response => {
        if (response.status == 200) {
            res.status(200).json({ status: 200, data: response.data })
        } else {
            res.status(200).json({ status: 400, data: [] })
        }
    }).catch(e => {
        console.log(e)
        res.status(400).json({ data: [] })
    })
}

const checkCustomData = (req, res) => {
    let params = {
        url: AppLink.API_WP + "customData",
        method: "POST",
        data: qs.stringify(req.body),
        headers: {
            "Authorization": "Basic " + btoa("admin:Dubai12345**"),
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
    axios(params).then(response => {
        if (response.status == 200) {
            res.status(200).json({ status: 200, data: response.data })
        } else {
            res.status(200).json({ status: 400, data: [] })
        }
    }).catch(e => {
        console.log(e)
        res.status(400).json({ data: [] })
    })
}

const getProductData = (req, res) => {
    let params = {
        url: AppLink.API_WP_1 + "wc/v1/products/"+req.body.id,
        method: "POST",
        data: qs.stringify(req.body),
        headers: {
            "Authorization": "Basic " + btoa("admin:Dubai12345**"),
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
    axios(params).then(response => {
        if (response.status == 200) {
            res.status(200).json({ status: 200, data: response.data })
        } else {
            res.status(200).json({ status: 400, data: [] })
        }
    }).catch(e => {
        console.log(e)
        res.status(400).json({ data: [] })
    })
}


const WpApiController = {
    "getHomepageSlidersData": getHomepageSlidersData,
    "getHomepageHowItsWork": getHomepageHowItsWork,
    "getHomepageChooseUs": getHomepageChooseUs,
    "getFaqsLeftSideData": getFaqsLeftSideData,
    "getFaqsList": getFaqsList,
    "OurCompanyFirstSection": OurCompanyFirstSection,
    "getProductList": getProductList,
    "getMealPlansMeta": getMealPlansMeta,
    "getMealPlansleftside": getMealPlansleftside,
    "getAllBlog": getAllBlog,
    "getBlogById": getBlogById,
    "getAllCategories": getAllCategories,
    "getRecentBlog": getRecentBlog,
    "checkCustomData": checkCustomData,
    "getProductData": getProductData,
    "getMealPlansInDubai": getMealPlansInDubai
}

export default WpApiController