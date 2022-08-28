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
    "API_NEXT" : getApiNext()
}

export default AppLink