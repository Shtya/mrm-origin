import React, { useEffect, useState } from 'react'
import FixedImg from "../assets/bg/1.webp"
import Cover from "../assets/bg/coverEvents.jpg" 
import Img1 from "../assets/Icon/projects/1 (1).webp"
import Img2 from "../assets/Icon/projects/1 (2).webp"
import Img3 from "../assets/Icon/projects/1 (3).webp"
import Img4 from "../assets/Icon/projects/1 (4).webp"
import Img5 from "../assets/Icon/projects/1 (5).webp"
import Img6 from "../assets/Icon/projects/1 (6).webp"
import Img7 from "../assets/Icon/projects/1 (7).webp"
import Img8 from "../assets/Icon/projects/1 (8).webp"


import P_Imgmain2 from "../assets/gallery/1.RECEPTION/Reception Signage 600x600-03.webp"
import P_Imgmain3 from "../assets/gallery/1.RECEPTION/Reception Signage 600x600-04.webp"
import P_Imgmain4 from "../assets/gallery/1.RECEPTION/Reception Signage 600x600-05.webp"
import { Link } from 'react-router-dom'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const GalleryOFportfolio = () => {
  const [id , setid] = useState()
  const [indexImg , setindexImg] = useState(0)

  const [projects , setProjects] = useState([
    {  curr: 0 , id: 1 ,  images:{main:Img1 , submain:[Img2 ,Img1 ,Img2 ,Img3]} , routes:"" , title:"Lorem ipsum dolor" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laborum, minima itaque architecto magnam explicabo beatae. Quas quis consectetur velit itaque modi soluta rerum, aliquid asperiores quod dolore aliquam inventore distinctio labore dolorum atque assumenda delectus officia praesentium? Rem, beatae!" },
    {  curr: 0 , id: 2 ,  images:{main:Img3 , submain:[Img4 ,Img1 ,Img2 ,Img3]} , routes:"" , title:"Lorem ipsum dolor" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laborum, minima itaque architecto magnam explicabo beatae. Quas quis consectetur velit itaque modi soluta rerum, aliquid asperiores quod dolore aliquam inventore distinctio labore dolorum atque assumenda delectus officia praesentium? Rem, beatae!" },
    {  curr: 0 , id: 3 ,  images:{main:Img5 , submain:[Img6 ,Img1 ,Img2 ,Img3]} , routes:"" , title:"Lorem ipsum dolor" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laborum, minima itaque architecto magnam explicabo beatae. Quas quis consectetur velit itaque modi soluta rerum, aliquid asperiores quod dolore aliquam inventore distinctio labore dolorum atque assumenda delectus officia praesentium? Rem, beatae!" },
    {  curr: 0 , id: 4 ,  images:{main:Img7 , submain:[Img8 ,Img1 ,Img2 ,Img3]} , routes:"" , title:"Lorem ipsum dolor" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laborum, minima itaque architecto magnam explicabo beatae. Quas quis consectetur velit itaque modi soluta rerum, aliquid asperiores quod dolore aliquam inventore distinctio labore dolorum atque assumenda delectus officia praesentium? Rem, beatae!" },
  ])


  const handleImg = (IdxOfImg , id , IdxOfPro)=>{

    setindexImg(IdxOfImg)
  setid(id)
  const updatedProjects = [...projects];
  updatedProjects[IdxOfPro] = { ...updatedProjects[IdxOfPro], curr: IdxOfImg};
  setProjects(updatedProjects)
  }

 

  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1 , 
    rows: 2 ,
    // autoplay:true ,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          rows: 1 ,
          initialSlide: 1 ,
        }
      }
    ]
  };

  return (
      
      <div className="project">
        <div className="bgCover"> <img src={FixedImg} alt="" /> </div>
        <Slider {...settings} className="container">
            {projects?.map((e,index)=>(
                index % 2 == 0 ? 
                <div className={`box box${index+1}`} key={index}>

                    <div className="coverImg">
                        <img src={e.images?.submain[ id == e.id && indexImg || e.curr]} alt="" />
                        <div className="allImg"> { e?.images?.submain.map((ele,idx)=> ( <img onClick={_=> handleImg(idx , e.id , index)} key={idx} src={ele} alt="" />  )) } </div>
                    </div>

                    <Link to="" className="text" >
                        <div className="h2">{e.title} </div>
                        <div className="p"> {e.desc} </div>
                        <div className="bt"> Learn more  </div>
                    </Link>
                </div> 

                : <div className={`box box${index+1}`}  key={index}>

                    <Link to="" className="text" >
                        <div className="h2">{e.title} </div>
                        <div className="p"> {e.desc} </div>
                        <div className="bt"> Learn more  </div>

                    </Link>

                    <div className="coverImg">
                        <img src={e.images?.submain[ id == e.id && indexImg || e.curr]} alt="" />
                        <div className="allImg"> { e?.images?.submain.map((ele,idx)=> ( <img onClick={_=> handleImg(idx , e.id , index)} key={idx} src={ele} alt="" />  )) } </div>
                    </div>

                </div> 
            
            )) }
        </Slider>

      </div>
      

  )
}

export default GalleryOFportfolio