// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

    const axios = require('axios');

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

    getGoogleReviews()
}
