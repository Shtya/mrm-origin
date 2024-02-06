import React, { memo, useState } from 'react'
import close from "../../assets/Icon/close.png"


const ExhibitionGallery = memo(({ classn ,Img , nameServices , data , title  }) => {

   // showImage
   const [showImg , setshowImg] = useState()
   const handleImg = (e)=>{
       setshowImg(e)
   }
  return (
    <>
    <div className={classn}>
      <div className="bgCover"  >   <img  src={Img} alt={nameServices}  />  </div>
      <div className="container"> <h2 className="h1" style={{marginBottom:"30px"}}>{title}</h2></div>
      <div className="container">
        <div className="boxs">
          {data.map((e,index)=> ( <div key={index} data-aos="zoom-in-up"  className="coverImg"> <i onClick={_=>handleImg(e.img)} className="fa-solid fa-compress"></i> <img src={e.img} alt="slider" /> </div> ))}
        </div>
      </div>
    </div>
    {
      showImg && <div className="showImagePreview">
        <img className='showImage' src={showImg} alt="" />
        <i onClick={_=> setshowImg("")}  className="fa-solid fa-xmark close"></i>
      </div>
    }
    </>
  )
})

export default ExhibitionGallery