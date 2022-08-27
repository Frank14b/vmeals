import useTranslation from 'next-translate/useTranslation';
import React, { useRef, useState } from "react";
import { useEffect } from 'react';

export default function GoogleReviewComponents() {
    const { t } = useTranslation('common');
    const fs = require('fs')
    const klaw = require('klaw')
    const path = require('path')
    const matter = require('gray-matter')
    const axios = require('axios');
    const yaml = require('js-yaml');


    function getGoogleReviews() {
        console.log('=> Fetching reviews data..')
        return new Promise((resolve, reject) => {
            let reviews;
            const url = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=VMeals&key=AIzaSyBrZ_0yZnN55oIAb4YoyTUu0NTii1T5yx8';
            axios.get(url)
                .then(res => {
                    console.log('=> Reviews data fetched!')
                    console.log(res.data)
                    if (res.data.status == 'OK') {
                        console.log('=> Saving new reviews to markdown..')
                        let today = new Date('now');
                        reviews = res.data.result.reviews

                        // Converting reviews to netlify format
                        reviews.forEach(item => {
                            let content = {
                                image: item.profile_photo_url,
                                title: item.author_name,
                                link: '',
                                company: '',
                                testimonial: item.text,
                                rating: item.rating,
                                promted: false,
                                google: true,
                            }
                            content = yaml.safeDump(content, { delims: true })
                            content = `---\n${content}\n---`
                            let path = `./data/testimonials/${slugify(item.author_name)}.md`
                            if (!fs.existsSync(path)) {
                                fs.writeFile(path, content, err => {
                                    if (err) {
                                        console.error(err)
                                        return
                                    }
                                })
                            }
                        })
                    }
                    resolve(reviews)
                })
        })
    }


    function getTestimonials() {
        getGoogleReviews();
        const items = [];
        const getFiles = () =>
            new Promise((resolve) => {
                if (fs.existsSync('./data/testimonials')) {
                    klaw('./data/testimonials')
                        .on('data', (item) => {
                            if (path.extname(item.path) === '.md') {
                                const data = fs.readFileSync(item.path, 'utf8');
                                const dataObj = matter(data);
                                delete dataObj.orig;
                                items.push(dataObj);
                            }
                        })
                        .on('error', (e) => {
                            console.log(e);
                        })
                        .on('end', () => {
                            resolve(items);
                        });
                } else {
                    resolve(items);
                }
            });
            
        // return getFiles();
    }

    useEffect(() => {
        getTestimonials()
    }, [])

    return (
        <>

        </>
    );
}