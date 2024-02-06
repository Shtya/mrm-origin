import ImgIntro from "../assets/about-us/about us 12-01.webp"
import ImgBox1 from "../assets/about-us/Our mission 500x500 3.webp"
import ImgBox2 from "../assets/about-us/Our vission 500x500 3.webp"
import ImgContact from "../assets/about-us/aboutus.jpg"
import Navbar from '../components/Navbar'
import OneWhy from '../components/OneWhy'
import Footer from '../components/Footer'
import Animation from '../components/helpers/Animation'
import { Divider } from '../components/patterns/Pattern1'
import IMG2 from "../assets/bg/b2.webp"
import IMG1 from "../assets/bg/b2.webp"
import MetaTag from './MetaTag'
import { Helmet } from "react-helmet"
import { memo } from "react"
import { useTranslation } from "react-i18next"

const AboutUs = memo(() => {
  const {t} = useTranslation() ;

  const vission_mission = [ 
    {title:"Our Vision",   alt:"Golden 'VISION' text on a dark reflective grid    " , img:ImgBox2 , desc :t("about_us.box3")} ,
    {title:"Our Mission" , alt:"Shiny 'MISSION' text on a stark grid backdrop." , img:ImgBox1 , desc : t("about_us.box4") } ,
  ]
  return (
    <div className='about-us'>
      <MetaTag canonical="about-us"  title="Best Advertising & Digital Marketing Company in Dubai " desc="Best Advertising and Digital Marketing company in Dubai, helping Businesses achieve success and growth by offering Full Marketing services" />
      <Helmet > <script type="application/ld+json">{`  "@context": "https://schema.org",  "@type": "ContactPage",  "name": "mrm advertising",  "url": "https://mrmadvertisingdubai.com/about-us",  "description": "Best Advertising and Digital Marketing company in Dubai, helping Businesses achieve success and growth by offering Full Marketing services",  "address": {    "@type": "PostalAddress",    "streetAddress": "123 Street Name",    "addressLocality": "dubai",    "addressRegion": "State",    "postalCode": "0000",    "addressCountry": "dubai"  },  "contactPoint": {    "@type": "ContactPoint",    "telephone": "+971561384496",    "contactType": "customer service",    "areaServed": "US" }`}</script> </Helmet>
      <Animation />
      <div className="container"> <Navbar /> </div>
      <div className="coverIntro hidden-img"> <img src={ImgIntro} alt="intro page contains word 'about us '" /></div>

        <Divider classn=" divider-top " />
        <div className="searching ">
        <div className="bgCover"> <img  src={IMG1} alt="about"  /> </div>
          <div className="container">
            <div className="coverImg " data-aos="fade-right"> <img src={ImgContact} alt="about"  /> </div>
            <div className="boxs ">
                <h2 className='box p ' data-aos="fade-left">{t("about_us.box1")}</h2>
                <h2 className='box p ' data-aos="fade-left">{t("about_us.box2")}</h2>
            </div>
          </div>
        </div>

        <Divider classn="divider" />
        <div className="WHY">
          <div className="bgCover"> <img  src={IMG2} alt="about"  /> </div>
          <div className="container" data-aos="fade-up">
            {vission_mission.map((e,index)=> (
                <OneWhy altCover={e.alt} key={index} img={e.img} title={e.title} desc={e.desc} />
              ))}
        </div>
        </div>

      <Footer />
    </div>
  )
})

export default AboutUs