import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import IntroImg from "../assets/about-us/OUR BLOG 1400x700-01.webp"
import OneBlog from '../components/helpers/OneBlog';
import Footer from '../components/Footer';
import { Divider } from '../components/patterns/Pattern1';

import IMG1 from "../assets/bg/b1.webp"



import Animation from '../components/helpers/Animation';
import baseURL, { baseImg } from '../API/API';
import { useLocation } from 'react-router-dom';
import MetaTag from './MetaTag';
import { useTranslation } from 'react-i18next';

const Blogs = () => {
  const {t} = useTranslation() ;

  const [Digital , setDigital] = useState([])
  const [Latest , setLatest] = useState([])
  const [Tips , setTips] = useState([])

  useEffect(_=> { 

    baseURL.get("?category=Digital Marketing News", {timeout:"3000"} ).then(e => setDigital(e.data.data))
    baseURL.get("?category=Latest Updates and Insights", {timeout:"3000"} ).then(e => setLatest(e.data.data))
    baseURL.get("?category=Tips and Strategies" , {timeout:"3000"} ).then(e => setTips(e.data.data))
  } ,[])

  useEffect(_ =>{
    setTimeout(() => {
      if( Digital?.length <= 0 ||   Latest?.length <= 0 ||   Tips?.length <= 0 ){
        baseURL.get("?category=Digital Marketing News" , {timeout:"3000"} ).then(e => setDigital(e.data.data))
        baseURL.get("?category=Latest Updates and Insights" , {timeout:"3000"} ).then(e => setLatest(e.data.data))
        baseURL.get("?category=Tips and Strategies" , {timeout:"3000"} ).then(e => setTips(e.data.data))
      }
      
    }, 5000);
  },[])
  


  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1 , 
    // autoplay:true ,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1 ,
          // dots: false/,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1 ,
          // dots: false,
        }
      }
    ]
  };

  return (
    <div className='blog-page'>
      <MetaTag canonical="blogs" title="Digital Marketing Updates and Tips for Business Growth " desc="Stay ahead with the latest digital marketing updates, Insights and expert tips for your Digital business growth with MRM`s informative blogs " />
      <Animation />
      <div className="container"> <Navbar /></div>
        <div className="coverIntro" style={{marginBottom:"-83px"}}> <img src={IntroImg} alt="Chic 'OUR BLOG' text over a laptop on a desk" /></div>

        <div className="quotation">
        <div className="bgCover2"   >  <img  src={IMG1} alt="blogs"  /> </div>
        
          <div className="container">
            <p className="h3 " data-aos="fade-up">{t("blog.Qutaion")}</p>
          </div>
          </div>
        <Divider classn="divider " />
        <OneBlog onHere={true} classn="blog-1" name={t("blog.sec1")} settings={settings}  blogs={Digital} />
        <Divider classn="divider-left" />
        <OneBlog onHere={false} classn="blog-2" name={t("blog.sec2")} settings={settings}  blogs={Latest} />
        <Divider classn="divider" />
        <OneBlog onHere={true} classn="blog-3" name={t("blog.sec2")} settings={settings}  blogs={Tips} />

      <Footer />
    </div>
  )
}

export default Blogs