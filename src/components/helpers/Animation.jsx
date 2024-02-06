import React, { memo, useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from 'react-router-dom';


const Animation = () => {
  const {pathname} = useLocation() ;
  useEffect(() => {
    AOS.init({
      delay: 50,
      offset: 10 ,
      duration: 400,
      easing: 'ease-in-out', // ease-in-out-back
      once:true 
    });
    AOS.refresh();
  }, [])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior:"instant"} )
  }, [pathname])

  return <></>
}


export default Animation