import Constants from "./constants"

const getApiNext = () => {
    let link = ""
    if(Constants.API_NEXT == "dev") {
        link = "http://localhost:3000/api/"

    }else if(Constants.API_NEXT == "staging") {
        link = "https://vmeals.vercel.app/api/"
        
    }else{
        link = "https://vmeals.vercel.app/api/"
    }

    return link
}

const AppLink = {
    "API_NEXT" : getApiNext(),
    "API_WP": "https://workspace.vmeals.ae/wp-json/v2/",
    "API_WP_1": "https://workspace.vmeals.ae/wp-json/"
}

export default AppLink