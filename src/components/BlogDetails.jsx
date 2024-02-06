import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Animation from './helpers/Animation';
import Footer from './Footer';
import Navbar1 from './Navbar';
import Related from './Slide/Related';
import baseURL, { baseImg } from '../API/API';
import MetaTag from '../pages/MetaTag';
import { Divider } from './patterns/Pattern1';
import AddComment from './AddComment';
import Skeleton from './Skeleton';

const BlogDetails = () => {
  const [data , setdata] = useState([])
  const [blogs , setblogs] = useState([])
    let {id} = useParams() ;

  useEffect(_=>{
    baseURL.get("" , {timeout:"3000"} ).then(e=> setblogs(e.data.data))
    baseURL.get(id , {timeout:"3000"} ).then(e=>{ setdata(e.data.data) })
  } ,[] )

  useEffect(_ =>{
    setTimeout(() => {
      
      if( data.length <= 0 || blogs.length <= 0 ){
        baseURL.get("" , {timeout:"3000"} ).then(e=> setblogs(e.data.data))
        baseURL.get(id , {timeout:"3000"} ).then(e=>{ setdata(e.data.data) })  
      }

    }, 5000);
  },[])
    
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1 , 
    autoplay:true ,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1 ,
          dots: false,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1 ,
          dots: false,
        }
      }
    ]
  };

  return (
    <div className='blog-details'>
      <MetaTag title={data?.titleData} desc={data?.descData}  />

      <div className="container container3"> <Navbar1 /> </div>
      <Animation />

      <div className="home">
          <div className="container">
              {data?.thumbnail ? <div className="boxImg hidden-img"  >  <img src={data?.thumbnail} alt={data.title || "blog"} /> </div> : "" }
              <div className="boxs" data-aos="fade-left" >
              <p  className="h2 hidden-text" > <span>{data.title}</span> </p>
            </div>
        </div>
      </div>

      <div className={`blog-detail blog-detail-${data?.num}`}>
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: data?.description }} />
        </div>
      </div>
      <Divider />

    <AddComment />


      <Divider />
      <div className="related">
        <div className="h1">Dive Into More Articles on This Topic</div>
        <Related  data={blogs} settings={settings} />
        </div>
      <Footer />
    </div>
  )
}

export default BlogDetails