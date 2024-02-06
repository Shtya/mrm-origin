import Animation from './helpers/Animation'
import WhyImg from "../assets/Why Choose Us 400x500-07-01.webp"
import IMG2 from "../assets/bg/b3.webp"
import { memo } from 'react'
import { Animate } from '../App'
import { useTranslation } from 'react-i18next'

const Why = memo(() => {
  const { t } = useTranslation();

  const choose = t("home.Home_section2.box" , {returnObjects:true})

  return (

    <section id='Why' className='Why'>
      <Animation />
      <div className="bgCover"  >  <img  src={IMG2} alt="Man in blue suit thinking with question mark and speech bubbles graphic"  /> </div>
      <div className="container1">
        <h2 className="h1" data-aos={Animate} >{t("home.Home_section2.h1")}</h2>
      </div>
      <div className="container">
              <div className="boxs"  >
                  {choose.map((e,idx)=> (
                    <div className="box" data-aos={Animate} key={idx} >
                      <div className="group" >
                          <i  className={`${e.icon} `}></i>
                          <div className='h2' > {e.title}  </div>
                      </div>
                      <span className={`p`}>{e.desc}</span>
                    </div>
                  ))}
              </div>

            <div className="Img hidden-img"  >
              <img data-aos="zoom-in"   src={WhyImg} alt="Why-chooseus" />
            </div>
      </div>
    </section>
  )
})

export default Why