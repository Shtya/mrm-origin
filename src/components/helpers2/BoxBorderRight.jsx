


import React from 'react'

const BoxBorderRight = ({Img , title , data , phead}) => {
  return (
    
    <div className="box-style-1">
    <div className="bgCover"  >  <img  src={Img} alt="Snapchat-page"  /> </div>
        <div className="container">
            <div className="h1 clip" style={phead ? {marginBottom:"5px"} : {marginBottom:"20px"}} data-aos="zoom-in">{title}</div>
            {phead && <div className="phead">{phead}</div>}
            <div className="boxs" >
              {
                data.map((e,index)=> (
                  <div className="box" key={index} data-aos="zoom-in"  >
                        <div className="icon"> <img src={e.icon} alt="" /> </div>
                          <div className="text">
                          <div className="h2 clip hidden-text" >{e.title} </div>
                          <div className="p hidden-text" >{e.desc} </div>
                      </div>
                  </div>
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default BoxBorderRight