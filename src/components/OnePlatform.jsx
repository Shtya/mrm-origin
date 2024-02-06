import React, { memo } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const OnePlatform = memo(({title , paragraph , img , classn , path , trueBtn}) => {
  const navigate = useNavigate()
  const {t} = useTranslation() ;

  return (
    <Link to={`${path}`}  className={`box ${classn}`}>
        <div className="coverImg"> <img src={img} alt="platform"  /></div>
        <div className="inner-box">
            <span className="one"/>
            <span className="two"/>
            <h3 className='h2 '> {title} </h3>
            <p className='p '>{paragraph}</p>
            {trueBtn &&<button className='bt' aria-label="Submit" onClick={_=> navigate(path)}>  {t("services.OurSocialMedia.bt")} </button>}
        </div>
      </Link>
  )
})

export default OnePlatform