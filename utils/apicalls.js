import AppLink from "./urls"
import axios from "axios";

const getAllReviews = () => {
    let params = {
        url: AppLink.API_NEXT + "reviews",
        method: "GET",
    }
    return axios(params)
}

const ApiCalls = {
    "getAllReviews": getAllReviews
}

export default ApiCalls