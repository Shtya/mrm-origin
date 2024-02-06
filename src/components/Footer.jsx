import Logo from "../assets/Logo1.webp"
import { Link, useLocation } from 'react-router-dom'
import { Pattern9 } from './patterns/Pattern1'
import IMG3 from "../assets/bg/b1.webp"
import { Social_Media } from "../App"
import { memo, useRef } from "react"
import { useTranslation } from "react-i18next"


const Footer = memo(() => {

  
  const {pathname} = useLocation() ;
  const {t} = useTranslation() ;

  return (
    <>
    <Pattern9  />
    <footer id="footer" >
    <div className="bgCover" style={{zIndex:"1"}}  >  <img  src={IMG3} alt="footer"  /> </div>
      <div className="container" >

      <div className="top">
        <img src={Logo} alt="footer"  data-aos="fade-up" data-aos-delay="50" />
        <div className="phead" data-aos="fade-up" data-aos-delay="100">{t("home.footer.h1")}</div>
        <ul className='social last-social'>
          <li data-aos="fade-up" data-aos-delay="50">  <Link to={Social_Media[0]} target="_blank" className="Iicon"> <div className="style"> <i className="fa-brands fa-facebook-f"></i>    </div> </Link></li>
          <li data-aos="fade-up" data-aos-delay="70"> <Link to={Social_Media[1]} target="_blank" className="Iicon"> <div className="style"> <i className="fa-brands fa-instagram"></i></div> </Link></li>
          <li data-aos="fade-up" data-aos-delay="90"> <Link to={Social_Media[3]} target="_blank" className="Iicon"> <div className="style"><i className="fa-brands fa-whatsapp"></i>        </div> </Link></li>
          <li data-aos="fade-up" data-aos-delay="110"> <Link to={Social_Media[2]} target="_blank" className="Iicon"> <div className="style"> <i className="fa-brands fa-linkedin-in"></i></div> </Link></li>
        </ul>
      </div>

      <div className="center">
        <ul className='ul-1' data-aos="fade-up" data-aos-delay="120">
          <div className='h2 clip'> {t("home.footer.ul1.name")} </div>
          <li ><i className="fa-solid fa-envelope"></i>  info@mrmadvertisingdubai.com </li>
          <li ><i className="fa-solid fa-map-location-dot"></i>  Business Bay - Dubai </li>
          <li ><i className="fa-solid fa-phone"></i>  +971561384496 </li>
        </ul>

        <ul className='ul-2' data-aos="fade-up" data-aos-delay="140">
          <div className='h2 clip'> {t("home.footer.ul2.name")} </div>
          <li > <Link to="/contact-us"> {t("home.footer.ul2.li1")}  </Link></li>
          <li > <Link to="/about-us"> {t("home.footer.ul2.li2")}  </Link></li>
          <li > <a href={pathname!= "/" ? "/#Services" : "#Services"}> {t("home.footer.ul2.li3")} </a></li>
          <li > <Link to="/blog"> {t("home.footer.ul2.li4")} </Link></li>
        </ul>

        <ul className='ul-3' data-aos="fade-up" data-aos-delay="160" >
          <div className='h2 clip'> {t("home.footer.ul3.name")} </div>
          <li className='newsletter'>{t("home.footer.ul3.p")}</li>
          <div className="group">
            <input type="text" placeholder={t("home.footer.ul3.placeHolder")} />
            <i className="fa-regular fa-envelope"></i>
          </div>
        </ul>


      </div>

        <div className="bottom" data-aos="fade-up" data-aos-delay="0" data-aos-offset="0">
          <p className='p' > {t("home.footer.ul4.name")} </p>
          <div className="last" >
            <Link className='p' to="/terms">  {t("home.footer.ul4.li1")} </Link>
            <Link className='p' to="/privacy">  {t("home.footer.ul4.li2")} </Link>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
})

export default Footer