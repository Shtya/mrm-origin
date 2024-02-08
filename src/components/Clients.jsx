import { memo } from "react";
import { useTranslation } from "react-i18next";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import clients1  from "../assets/clients/(1).webp"
import clients2  from "../assets/clients/(2).webp"
import clients3  from "../assets/clients/(3).webp"
import clients4  from "../assets/clients/(4).webp"
import clients5  from "../assets/clients/(5).webp"
import clients6  from "../assets/clients/(6).webp"
import clients7  from "../assets/clients/(7).webp"
import clients8  from "../assets/clients/(8).webp"
import clients9  from "../assets/clients/(9).webp"
import clients10 from "../assets/clients/(10).webp"
import clients11 from "../assets/clients/(11).webp"
import clients12 from "../assets/clients/(12).webp"
import clients13 from "../assets/clients/(13).webp"
import clients14 from "../assets/clients/(14).webp"
import clients15 from "../assets/clients/(15).webp"
import clients16 from "../assets/clients/(16).webp"
import clients17 from "../assets/clients/(17).webp"
import clients18 from "../assets/clients/(18).webp"
import clients19 from "../assets/clients/(19).webp"
import clients20 from "../assets/clients/(20).webp"
import clients21 from "../assets/clients/(21).webp"
import clients22 from "../assets/clients/(22).webp"
import clients23 from "../assets/clients/(23).webp"
import clients24 from "../assets/clients/(24).webp"
import clients25 from "../assets/clients/(25).webp"
import clients26 from "../assets/clients/(26).webp"
import clients27 from "../assets/clients/(27).webp"
import clients28 from "../assets/clients/(28).webp"
import clients29 from "../assets/clients/(29).webp"
import clients30 from "../assets/clients/(30).webp"
import clients31 from "../assets/clients/(31).webp"
import clients32 from "../assets/clients/(32).webp"
import clients33 from "../assets/clients/(33).webp"



var settings = {
  dots: false,
  infinite: true,
  speed: 5000,
  autoplaySpeed: 5000 ,
  slidesToShow: 5,
  slidesToScroll: 3 , 
  // autoplay:true ,
  cssEase: "linear",
  pauseOnHover: false,
  pauseOnFocus: false,
  focusOnSelect: false,
  rows:3 ,
  // responsive: [
  //   {
  //     breakpoint: 1300,
  //     settings: {
  //       slidesToShow: 5,
  //       slidesToScroll: 1,
  //       infinite: true,
  //       dots: false
  //     }
  //   },
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 4,
  //       slidesToScroll: 2,
  //       infinite: true,
  //       dots: false
  //     }
  //   },
  //   {
  //     breakpoint: 900,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //       initialSlide: 1 ,
  //       dots: false,
  //     }
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 1 ,
  //       dots: false,
  //       autoplaySpeed: 1500 ,
  //     }
  //   },
  //   {
  //     breakpoint: 400,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1 ,
  //       autoplaySpeed: 1500 ,
  //       dots: false,
  //     }
  //   }
  // ]
};



const Clients = memo(() => {
  const {t} = useTranslation() ;
  const data = [ clients1 ,clients2, clients3 ,clients4 ,clients5 ,clients6 ,clients7 ,clients8 ,clients9 ,clients10,clients11,clients12,clients13,clients14,clients15,clients16,clients17,clients18,clients19,clients20,clients21,clients22,clients23,clients24,clients25,clients26,clients27,clients28,clients29,clients30,clients31,clients32,clients33];


    return (
    <section className='Clients' id='Clients'>
      <div className="h1 " >{t("home.client")}</div> 

      <Slider {...settings} className='container' >
          {
            data.map((e,index)=>(
              <div className={`box-shape box-${index}`}> 
                <span/> 
                <img loading='lazy' src={e}   alt="clients1" />   
              </div>  
            ))
          }
      </Slider>

    </section>
  )
})

export default Clients