import React from 'react'
import Navbar1 from './Navbar'
import VedioTestimonials from "../assets/bg/testimonials.mp4"
import Qoute from "../assets/bg/qoute.png"
import Img1 from "../assets/Icon/projects/1 (1).webp"
import Img2 from "../assets/Icon/projects/1 (2).webp"
import Img3 from "../assets/Icon/projects/1 (3).webp"
import Img4 from "../assets/Icon/projects/1 (4).webp"
import Img5 from "../assets/Icon/projects/1 (5).webp"
import Img6 from "../assets/Icon/projects/1 (6).webp"
import Img7 from "../assets/Icon/projects/1 (7).webp"
import Img8 from "../assets/Icon/projects/1 (8).webp"
import Intro from "../assets/bg/events.jpg"
import Cover from "../assets/bg/coverEvents.jpg" 
import IMG1 from "../assets/bg/2.webp" 
import { Divider } from './patterns/Pattern1'

import FixedImg from "../assets/bg/1.webp"
import Footer from './Footer'
import GalleryOFportfolio from './GalleryOfProject'
import Contact from './Contact'

import PersonImg from "../assets/bg/person.jpg"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const data = [
    {  icon:Img1 , title:"Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing." , desc:"Being a high-strung person, I have to admit Johnna immediately picked up on my personality type and provided me a Client Experience tailored to me and my expectations. She is very good at what she does." },
    {  icon:Img2 , title:"Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing." , desc:"Being a high-strung person, I have to admit Johnna immediately picked up on my personality type and provided me a Client Experience tailored to me and my expectations. She is very good at what she does." },
    {  icon:Img3 , title:"Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing." , desc:"Being a high-strung person, I have to admit Johnna immediately picked up on my personality type and provided me a Client Experience tailored to me and my expectations. She is very good at what she does." },
    {  icon:Img4 , title:"Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing." , desc:"Being a high-strung person, I have to admit Johnna immediately picked up on my personality type and provided me a Client Experience tailored to me and my expectations. She is very good at what she does." },
]


var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1 , 
    // autoplay:true ,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
            slidesToShow: 1,
        }
      }
    ]
  };

let reviews = [
    {img:PersonImg, name:"Mike Wigger" , job:"Realtor" , vedio:VedioTestimonials ,desc:"Being a high-strung person, I have to admit Johnna immediately picked up on my personality type and provided me a Client Experience tailored to me and my expectations. She is very good at what she does."},
    {img:PersonImg, name:"Mike Wigger" , job:"Realtor" , vedio:"" ,desc:"Being a high-strung person, I have to admit Johnna immediately picked up on my personality type and provided me a Client Experience tailored to me and my expectations. She is very good at what she does."},
    {img:PersonImg, name:"Mike Wigger" , job:"Realtor" , vedio:"" ,desc:"Being a high-strung person, I have to admit Johnna immediately picked up on my personality type and provided me a Client Experience tailored to me and my expectations. She is very good at what she does."},
    {img:PersonImg, name:"Mike Wigger" , job:"Realtor" , vedio:VedioTestimonials ,desc:"Being a high-strung person, I have to admit Johnna immediately picked up on my personality type and provided me a Client Experience tailored to me and my expectations. She is very good at what she does."},
]

const Projects = () => {
  return (
    <div className='project'>
        <Navbar1 />
        <div className="IntroCover">
             <div className="coverIntro"> <img className='cover' src={Intro} alt="" />  </div>
            <div className="container">
                <div className="coverImg"> <img src={Img8} alt="" /> </div>
                <div className="text">
                    <div className="h1"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                    <div className="h2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem distinctio commodi fugiat qui, nobis consequatur quis laboriosam saepe molestiae aliquam. </div>
                </div>
            </div>
        </div>
        <Divider classn="divider" />


        <div className="qoutation">
        <div className="bgCover"  >  <img src={IMG1} alt="contact"  /> </div>      
            <div className="container">
                <div className="box">
                    <div className='h2'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora cum incidunt totam! </div>
                    <div className="p"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia sunt illum fugiat, perferendis, ex facere iusto molestias nemo minima fugit architecto eaque qui quasi vero. </div>
                    <div className="p"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia sunt illum fugiat, perferendis, ex facere iusto molestias nemo minima fugit architecto eaque qui quasi vero. </div>
                </div>
                <div className="cover2"></div>
                <div className="coverImg"> <img src={Img1} alt="" /> </div>
            </div>
        </div>
        <Divider classn="divider" />

        <div className="events">
            <div className="bgCover"> <img src={FixedImg} alt="" /> </div>
            <div className="container">
            <div className="h1"> Event Services </div>
            <div className="boxes">
                {data.map((e,index)=> ( 
                    <div className="box" key={index} >
                        <div className="coverImg"> <img src={e.icon} alt="" /> </div>
                        <div className="text">
                            <div className="h2"> {e.title} </div>
                            <div className="p"> {e.desc} </div>
                        </div>
                    </div>
                 ))}
            </div>

            </div>
        </div>
        <Divider classn="divider" />

        <GalleryOFportfolio />
        <Divider classn="divider" />


        <div className="qoutation2">
        <div className="bgCover"  >  <img src={IMG1} alt="contact"  /> </div>      
            <div className="container">
            <div className="coverImg"> <img src={Img7} alt="" /> </div>

                <div className="box">
                    <div className='h2'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora cum incidunt totam! </div>
                    <div className="p"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia sunt illum fugiat, perferendis, ex facere iusto molestias nemo minima fugit architecto eaque qui quasi vero. </div>
                    <div className="p"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia sunt illum fugiat, perferendis, ex facere iusto molestias nemo minima fugit architecto eaque qui quasi vero. </div>
                </div>
            </div>
        </div>
        <Divider classn="divider" />

        {/* <div className="testimonials">
            <div className="bgCover"> <img src={FixedImg} alt="" /></div>
            <Slider {...settings} className="container">
                    {
                        reviews.map((e, index)=>(
                            <div className="box" key={index}>
                                <div className="tail">
                                    <div className="name"> {e.name} </div>
                                    <div className="rate"> {e.icon} {e.icon} {e.icon} {e.icon} {e.icon} </div>
                                </div>
                                <div className="img"> <img src={e.img} alt="" /> </div>
                                <div className="subtitle"> {e.subtitle} </div>
                                <div className="job"> {e.job} </div>
                                <div className="p"> {e.desc} </div>
                            </div>
                        ))
                    }

            </Slider>
        </div> */}

        <div className="testimonials">
            <div className="bgCover"> <img src={FixedImg} alt="" /></div>
            <Slider {...settings} className="container">
                {reviews.map((e,index)=>(
                    <div className={`box ${e.vedio ? "box-vedio":""}`} key={index}>
                        <div className="img"> <img  src={e.img} alt="" /> </div>
                        <div className="text">
                            <img src={Qoute} alt="" className="qoute" />
                            { e.vedio 
                                ? <video webkit-playsinline="true" playsInline preload="auto" id='myVideo'   autoPlay loop muted >
                                            <source  src={VedioTestimonials } type="video/mp4" />
                                    </video> 
                                : <div className="desc"> { e.desc} </div> }
                            <div className="name"> {e.name} </div>
                            <div className="job"> {e.job} </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>

        <Contact />





        <Footer />

    </div>
  )
}

export default Projects