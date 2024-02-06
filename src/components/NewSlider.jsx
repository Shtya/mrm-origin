import React, { useEffect, useRef, useState  , memo} from 'react'
import { Animate } from '../App'
import IMG3 from "../assets/bg/b3.webp"


import SwiperCore from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay , Navigation , Scrollbar   } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';


SwiperCore.use([Autoplay]);


export default function NewSlider ({header1 , typeOf , DATA , classHeader , schema , title}) {
  const swiperRef = useRef(null)
  
  const header =header1
  const [data , setdata] = useState(DATA)
  const [type , settype] = useState(typeOf)

  useEffect(_=>{ setdata(DATA.filter(e => e.name?.includes("all"))) },[])
  // useEffect(_=> {  setdata(DATA.filter(e => e.name?.includes("all")))  } ,[])

  const handleFilter = (ele) => {
    setdata(DATA.filter(e => e.name.includes(ele))) 
    settype(ele)
  }


  const settings = {
    onSlideChange : ()=> settype(document.querySelectorAll(".swiper-slide-next img")[0]?.dataset?.type?.split(" ")[0])  ,
    slidesPerView: 2 ,
    spaceBetween: 0 ,
    loop:true, 
    speed: 3000 ,
    // preloadImages: true,
    autoplay:{delay: 0 , "disableOnInteraction": false} ,
    pagination: {clickable: true },
    modules: [ Autoplay , Navigation , Scrollbar],
    navigation:true,
  }


  // showImage
  const [showImg , setshowImg] = useState()
  const handleImg = (e)=>{
      setshowImg(e)
  }

  return (
    <div className="GALLERY">

        <div className="bgCover"  >  <img    src={IMG3} alt="home"  /> </div>
        <div className="h1">{title || "OUR WORKS"}</div>
        
        <ul className={`header1 header2 ${classHeader}`} data-aos={Animate} > 
          {header?.map((e,index)=> (<li className={type == e.type ? "active p" : "p"}  onClick={_=>handleFilter(e.type)} key={index}>{e.name}</li>))} 
        </ul>

          <div className="container">
              <Swiper  {...settings}    className="mySwiper" ref={swiperRef}  >

                {data.length > 0 && data?.map((ele,idx)=>( 
                    <SwiperSlide key={idx} > 
                    { ele.images.map((e,index)=> ( <img width={300} height={300} loading='lazy' onClick={_=>handleImg(e.img)}  key={index} src={e.img} data-type={`${ele.name}`}  alt={e?.alt || e?.type || "image"}  />  )) }
                    
                    </SwiperSlide>
                    )) }
              </Swiper>

              {
                showImg && <div className="showImagePreview">
                  <img className='showImage' src={showImg} alt="image" />
                  <i onClick={_=> setshowImg("")}  className="fa-solid fa-xmark close"></i>
                </div>
              }
          </div>
    </div>
  )
}

