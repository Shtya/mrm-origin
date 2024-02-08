import About_us from "../assets/about-us/aboutus.webp"
import Animation  from './helpers/Animation'
import IMG1 from "../assets/bg/b1.webp"
import { useNavigate } from "react-router-dom";
import { memo } from "react";
import { Animate } from "../App";
import { useTranslation } from "react-i18next";

const Who =memo(() => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return(
    <section className="Who search-edite " id='who' >
      <Animation />
      <div className="bgCover2"  >  <img  src={IMG1} alt="who" /> </div>
      <div className="container">

      <div className="Img " >
        <img loading='lazy' data-aos={Animate}  src={About_us} alt="Professionals collaborating in office, framed by letter-shaped windows"   />
      </div>

      <div className="box" data-aos={Animate}  >
        <h1 className='h2 ' data-aos={Animate} >{t("home.Home_section1.h2")}</h1>
        <span className='p ' data-aos={Animate}  >{t("home.Home_section1.p")}</span>
        <div className="info">
            <div className="box-child"  >
              <h2 className='h2 clip ' data-aos={Animate} ><i className="fa-solid fa-check"></i>{t("home.Home_section1.h3_1")}</h2>
              <span className='p ' data-aos={Animate} >{t("home.Home_section1.p_1")}</span>
            </div>
            <div className="box-child"  >
              <h2 className='h2 clip ' data-aos={Animate} ><i className="fa-solid fa-check"></i>{t("home.Home_section1.h3_2")}</h2>
              <span className='p ' data-aos={Animate} >{t("home.Home_section1.p_2")}</span>
            </div>
        </div>

        <button onClick={_=> navigate("/about-us")} className='bt ' data-aos={Animate} aria-label="Submit" data-aos-delay="100" >{t("home.Home_section1.bt")}</button>
      </div>
      </div>
    </section>
  )
})

export default Who