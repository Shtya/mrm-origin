import React from 'react'

const BoxBlueColor = ({Img , title , data}) => {
  return (
    <div className="box-style-3">
    <div className="bg"> <img src={Img} alt="Snapchat-page"  /></div>
    <div className="container">
    <div className="h1 clip" data-aos="zoom-in" > {title}</div>
    <div className="boxs">
    {
      data.map((e,index)=> (
        <div className="box" key={index}  data-aos="zoom-in" >
          <div className='main'>
            <img className='tokenImage' src={e.icon} alt="NFT" />
            <h2 className='h2'>{e.title} </h2>
            <p  className='p'>{e.desc}</p>
          </div>
        </div>
       ))
    }
    </div>
  </div>
</div>
  )
}

export default BoxBlueColor