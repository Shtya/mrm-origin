import React, { memo } from 'react'
import { Animate } from '../App'

const OneWhy = ({img , title , desc , classn , alt , altCover}) => {
  return (
    <div className={`one-why ${classn}`} data-aos={Animate}>
      <div className="coverImg" > <img src={img} alt={altCover}  /> </div>
      <div className="inner-box">
        <div className="p ">{desc}</div>
      </div>
  </div>
  )
}

export default OneWhy