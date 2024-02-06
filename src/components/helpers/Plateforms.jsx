import React, { memo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Animate } from '../../App'

const Plateforms = memo(({Img , title , data , nameServices ,}) => {
  const navigate = useNavigate()
  return (
    <div className="platforms">
         <div className="bgCover"  >  <img  src={Img} alt={nameServices}  /> </div>
          <div className="container">
              <h3 className='h1'data-aos={Animate}>{title}</h3>
              <div className="boxs" data-aos={Animate}>
                  {
                    data.map((e,index)=> (
                      <Link key={index} to={`${e.path || ""}`} data-aos={Animate}   className={`box box-${index+1}`}>
                        <div className="coverImg"> <img src={e.img} alt="platform"  /></div>
                        <div className="inner-box">
                            <span className="one"/>
                            <span className="two"/>
                            <h3 className='h2 '> {e.title} </h3>
                            <p className='p '>{e.desc}</p>
                        </div>
                      </Link>
                    ))
                  }
              </div>
          </div>
      </div>
  )
})

export default Plateforms