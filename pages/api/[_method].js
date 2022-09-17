import WpApiController from '../../components/controllers/wpapiController'

export default function handler(req, res) {

    if(req.query._method == "getHomePageSlider") {
        WpApiController.getHomepageSlidersData(req, res)
    }

    if(req.query._method == "getPartnersSlider") {
        WpApiController.getPartnersSlider(req, res)
    }

    if(req.query._method == "getHomepageChooseUs") {
        WpApiController.getHomepageChooseUs(req, res)
    }

    if(req.query._method == "getMealPlansInDubai") {
        WpApiController.getMealPlansInDubai(req, res)
    }

    if(req.query._method == "getHomepageHowItsWork") {
        WpApiController.getHomepageHowItsWork(req, res)
    }

    if(req.query._method == "getFaqsLeftSideData") {
        WpApiController.getFaqsLeftSideData(req, res)
    }

    if(req.query._method == "getFaqsList") {
        WpApiController.getFaqsList(req, res)
    }

    if(req.query._method == "OurCompanyFirstSection") {
        WpApiController.OurCompanyFirstSection(req, res)
    }

    if(req.query._method == "getProductList") {
        WpApiController.getProductList(req, res)
    }

    if(req.query._method == "getMealPlansMeta") {
        WpApiController.getMealPlansMeta(req, res)
    }

    if(req.query._method == "getMealPlansleftside") {
        WpApiController.getMealPlansleftside(req, res)
    }

    if(req.query._method == "getAllBlog") {
        WpApiController.getAllBlog(req, res)
    }

    if(req.query._method == "getBlogById") {
        WpApiController.getBlogById(req, res)
    }

    if(req.query._method == 'getAllCategories') {
        WpApiController.getAllCategories(req, res)
    }

    if(req.query._method == "getRecentBlog") {
        WpApiController.getRecentBlog(req, res)
    }

    if(req.query._method == "checkCustomData") {
        WpApiController.checkCustomData(req, res)
    }

    if(req.query._method == "getProductData") {
        WpApiController.getProductData(req, res)
    }

    if(req.query._method == "reviews") {
        getGoogleReviews()
    }

    function getGoogleReviews() {
        return new Promise((resolve, reject) => {
            const url = 'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJcTFhgEdzXz4RJtANMZv4OJs&fields=reviews,formatted_address,name,rating,user_ratings_total,utc_offset&key=AIzaSyBrZ_0yZnN55oIAb4YoyTUu0NTii1T5yx8';
            axios.get(url)
                .then(response => {
                    if (response.data.status == 'OK') {
                        res.status(200).json({ data: response.data })
                    }else {
                        res.status(400).json({ data: [] })
                    }
                })
        })
    }
}
