import { memo } from "react"
import { Animate } from "../../App"


const PHOTOgraphy = memo(({classn ,Img , nameServices , title , data}) => {
  return (
    <div className={classn}>
      <div className="bgCover"  >  <img  src={Img} alt={nameServices}  /> </div>
        <h2 className="h1" data-aos={Animate}>{title}</h2> 
        <div className="container">
          {
            data.map((e,index)=> (
              <div className="box" key={index} data-aos={Animate}>
                <div className="innerbox">
                <div className="coverImg "> <img src={e.img} alt={nameServices}  />  </div>
                <div className="text">
                  <h3 className="h2 "> {e.title} </h3>
                  <div className="p ">{e.desc} </div>
                </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
  )
})

export default PHOTOgraphy