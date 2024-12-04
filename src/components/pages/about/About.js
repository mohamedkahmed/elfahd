import React from 'react'
import './About.scss'
import BreadCrumb from '../breadCrumb/BreadCrumb.js'
import Coustomheader from  "../../coustom_header/Coustomheader.jsx"
import { Helmet } from 'react-helmet-async'
import { useFetchHomeAbout, useFetchhowItworks } from '../../../services/authfetch.jsx'
import Loading from '../../loading/Loading.jsx'
const About = () => {
  const {loading, howtitworks} = useFetchhowItworks()
  const {homeAboutData} = useFetchHomeAbout()
  if(loading){
    return <Loading />
  }
  return (
<>
<Helmet>
  <title>About</title>
  <meta name='description'content='about codezen platform' />
  <link rel='canonical' href='/about' />
</Helmet>
<BreadCrumb title = "من نحن" />
    <section className='about'>
      <div style={{paddingRight:"1rem" , width:"100%"}}> <Coustomheader  title = "من نحن"/></div>
   
        <div className="container">
       
          <div className='about-up'>
          
          <div className="row">
                    <div className="col-lg-6 col-12 route">
                        <div className="image">
                          <img src={homeAboutData[0]?.image} alt="about-img" width={200} height={200} />
                        </div>

                    
                    </div>
               <div className="col-lg-6 col-12">
                        <div className="text">
                          <h4>{homeAboutData[0]?.title}</h4>
                          <p>{homeAboutData[0]?.about}</p>
                       
                        </div>
                        
                    
                    </div>
              </div>
          </div>
          <div className="about-center">
            <div className="title-text-up">
              <h2>كيف عملنا
              </h2>
              <h3>نحن نجمع بين الخبرة والتطوير للوصول إلى نتيجة تفوق توقعات العملاء
              </h3>
            </div>
            <div className="row">
              {howtitworks?.map((item , i) => {
                return (
                  <div className='col-lg-4 col-md-6 col-12' key={item?.id}>
                    <div className="about-center-content">
                    <div className="number-box">
                   {i + 1}
                    </div>
                    <div className="img-box">
                      <img src={item?.imagework} alt={item?.title} />
                    </div>
                    <div className="text-box">
                      <h3>{item?.title}</h3>
                      <p>{item?.details}</p>
                    </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
              {/* <Member /> */}
        </div>
    
    </section>
    </>
  )
}

export default About