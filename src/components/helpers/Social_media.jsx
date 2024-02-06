
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Animate } from '../../App'

const Social_media = memo(({Img , title , desc , data , classn }) => {
  return (
    <div className={`${classn || "social-media" }`}>
          <div className="bgCover"> <img  src={Img} alt="web design services"  /> </div>
        <div className="container">
            <h3  className='h1 '>{title}</h3>
            <div data-aos={Animate} className="phead ">{desc}</div> 
            <div className="boxs">
            { data?.length >1 && data?.map((e,index)=> ( 
            <Link to={`${e?.path || ""}`} data-aos={Animate} key={index} className={`cover1 `} >
              <div className="box">
                <div className="IcomCover">  <img src={e.img} alt="social"  /> </div>
                <h3 className='h2 '>{e.title}</h3>
                <p className='p '>{e.desc}</p>
              </div>
            </Link> ))}
            </div>
        </div>
        </div>
  )
})

export default Social_media