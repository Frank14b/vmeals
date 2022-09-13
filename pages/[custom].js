import Head from 'next/head'
import { useEffect, useState } from 'react'
import ApiCalls from '../utils/apicalls'
import { useRouter } from 'next/router'
import CategoryBlogComponent from '../components/blog/categoryBlog'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import BlogDetailsComponent from '../components/blog/blogDetails'

export default function CustomPage() {

  const [customPage, setCustomPage] = useState(null)
  const [customData, setCustomData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [seobanner, setSeobanner] = useState("")
  const [seodetails, setSeodetails] = useState("")
  const [seotitle, setSeotitle] = useState("")
  const qs = require('qs');
  const router = useRouter()
  const ID = router.query.custom

  const checkCustomData = (param) => {
    let data = {
      'dataValue': param
    }
    let result = ApiCalls.checkCustomData(qs.stringify(data))
    result.then(response => {
      if (response.data.status == 200) {
        if (response.data.data) {
          setCustomPage(response.data.data.type)

          if (response.data.data.data) {

            if(response.data.data.type == "singlePost") {
              setSeobanner(response.data.data.data.customImage)
              setSeotitle(response.data.data.data.postMeta._yoast_wpseo_title[0])
              setSeodetails(response.data.data.data.postMeta._yoast_wpseo_metadesc[0])
            }

            setCustomData(response.data.data.data)
            setLoading(false)
          } else {
            setCustomData([])
          }

        }
      }
    }).catch(e => {
    })
  }

  useEffect(() => {
    setLoading(true)
    setCustomPage(null)
    setCustomData([])
    checkCustomData(ID)
  }, [ID])

  return (
    <div className="">

      <Header page={"about"} subpage="blog" title={seotitle} banner={seobanner} description={seodetails}></Header>

      {
        (loading) && (
          <>
            <div className='h-100 position-relative'>
              <div className='col-md-8 mx-auto my-auto'>
                <h4 className='text-center bold-800'>Loading Data...</h4>
                <Skeleton baseColor='#E1F0E0' count={5} />
              </div>
            </div>
          </>
        )
      }

      {
        (customPage == "categoryPosts") && (
          <CategoryBlogComponent data={customData}></CategoryBlogComponent>
        )
      }

      {
        (customPage == "singlePost") && (
          <BlogDetailsComponent data={customData}></BlogDetailsComponent>
        )
      }

      <Footer></Footer>

    </div>
  )
}
