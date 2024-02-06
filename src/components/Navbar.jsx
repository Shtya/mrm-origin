import React, { memo, useEffect, useState } from 'react'
import Logo from "../assets/Logo1.webp"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Animation from './helpers/Animation';
import { useTranslation } from 'react-i18next';

const Navbar1 = memo(() => {
  const {pathname} =useLocation() ;

  // herflang
  const { t, i18n } = useTranslation();
  const handleLang = (e)=>{
    localStorage.setItem("lang" , e.target.value)
    i18n.changeLanguage(e.target.value || localStorage.getItem("lang") )
  }

  // when scroll up
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;
      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };
    window.addEventListener('scroll', handleScroll);
    return () =>  window.removeEventListener('scroll', handleScroll); 
  }, [prevScrollPos]);


  const Navigate = useNavigate()
  const [top , settop] = useState(false)
  useEffect(_=>{
    const handelScroll =  _=> window.scrollY > 50 ? settop("up-anything") : settop("")
    window.addEventListener("scroll" , handelScroll)
    return _=> window.removeEventListener("scroll" , handelScroll)} ,[ window])
    useEffect(_=>{


  let navLinks = document.querySelector(" .Navbar1 .nav-links");
  let menuOpenBtn = document.querySelector(" .Navbar1 .navbar .bx-menu");
  let menuCloseBtn = document.querySelector(" .Navbar1 .nav-links .bx-x");
  menuOpenBtn.onclick = function() {
  navLinks.style.left = "0";
  }
  menuCloseBtn.onclick = function() {
  navLinks.style.left = "-100%";
  }
  let htmlcssArrow = document.querySelector(".Navbar1 .htmlcss-arrow");
  htmlcssArrow.onclick = function() {
  navLinks.classList.toggle("show1");
  }
    } ,[])
  return (
  <div className="Navbar1"   >
    <Animation />
    <nav  >
      <div className={`navbar ${top}`} >
        <i className='bx bx-menu'></i>
        <div data-aos="fade-down" data-aos-delay="100" className="logo"><Link to="/"> <img src={Logo} alt="Navbar"  /></Link></div>
        <div className="nav-links">
          <div className="sidebar-logo">   <span className="logo-name"><img src={Logo} alt="Navbar"  /></span>   <i className='bx bx-x' ></i> </div>
          
          <ul className="links">
            <li data-aos="fade-down" data-aos-delay="200" onClick={_=> Navigate("/")}><Link className={pathname == "/" ? "active":""} to="/">   {t("Nav.li1")}  </Link></li>
            <li data-aos="fade-down" data-aos-delay="300" ><Link  > {t("Nav.li2")} </Link>
              <i className='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
              <ul className="htmlCss-sub-menu sub-menu">
                <li   onClick={_=> Navigate("/web-development-company-in-dubai")}><Link className={pathname == "/web-development-company-in-dubai" ? "active":""}    to="/web-development-company-in-dubai">    {t("Nav.li3")}  </Link></li>
                <li   onClick={_=> Navigate("/Photography-In-Dubai")}><Link className={pathname == "/Photography-In-Dubai" ? "active":""}    to="/Photography-In-Dubai">    {t("Nav.li4")}  </Link></li>
                <li   onClick={_=> Navigate("/exhibition-and-display-stand-agency-in-dubai")}><Link className={pathname == "/exhibition-and-display-stand-agency-in-dubai" ? "active":""}    to="/exhibition-and-display-stand-agency-in-dubai">   {t("Nav.li5")}  </Link></li>
                <li   onClick={_=> Navigate("/indoor-and-outdoor-signages-agency-in-dubai")}><Link className={pathname == "/indoor-and-outdoor-signages-agency-in-dubai" ? "active":""}    to="/indoor-and-outdoor-signages-agency-in-dubai">    {t("Nav.li6")}  </Link></li>
                <li   onClick={_=> Navigate("/social-media-marketing-agency-in-dubai")}><Link className={pathname == "/social-media-marketing-agency-in-dubai" ? "active":""}    to="/social-media-marketing-agency-in-dubai">   {t("Nav.li7")}  </Link></li>
                <li   onClick={_=> Navigate("/Corporate-gifts-in-dubai")}><Link className={pathname == "/Corporate-gifts-in-dubai" ? "active":""}    to="/Corporate-gifts-in-dubai">   {t("Nav.li8")}  </Link></li>
                <li   onClick={_=> Navigate("/advertising-ppc-agency-in-dubai")}><Link className={pathname == "/advertising-ppc-agency-in-dubai" ? "active":""}    to="/advertising-ppc-agency-in-dubai">   {t("Nav.li9")}  </Link></li>
                <li   onClick={_=> Navigate("/branding-agency-in-dubai")}><Link className={pathname == "/branding-agency-in-dubai" ? "active":""}    to="/branding-agency-in-dubai">   {t("Nav.li10")}  </Link></li>
                <li   onClick={_=> Navigate("/seo-agency-in-dubai")}><Link className={pathname == "/seo-agency-in-dubai" ? "active":""}    to="/seo-agency-in-dubai">   {t("Nav.li11")}  </Link></li>
              </ul>
            </li>
            <li data-aos="fade-down" data-aos-delay="400" onClick={_=> Navigate("/blog")}><Link  className={pathname == "/blog" ? "active":""} to="/blog">   {t("Nav.li12")}  </Link></li>
            <li data-aos="fade-down" data-aos-delay="500" onClick={_=> Navigate("/about-us")}><Link  className={pathname == "/about-us" ? "active":""} to="/about-us">    {t("Nav.li13")}  </Link></li>
            <li data-aos="fade-down" data-aos-delay="600" onClick={_=> Navigate("/contact-us")}><Link  className={pathname == "/contact-us" ? "active":""} to="/contact-us">    {t("Nav.li14")}  </Link></li>
            
            <select data-aos="fade-down" data-aos-delay="700" className='tran' value={localStorage.getItem("lang")|| "en"}  onChange={e => handleLang(e)}>
              <option value="en">English</option>
              <option value="en">العربية</option>
            </select>

          </ul>
        </div>
      </div>
    </nav>
  </div>
  )
})

export default Navbar1