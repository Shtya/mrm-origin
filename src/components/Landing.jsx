import Navbar from './Navbar';
import Dashboard from "./Dashboard.mp4"
import DashboardScreen from "../assets/dashboard-screen.jpg"

import IMG3 from "../assets/bg/b3.webp"

import { memo, useEffect, useRef } from 'react';

const Landing = memo(() => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {videoRef.current.addEventListener('loadeddata', handleVideoLoaded);}
    return () => { if (videoRef.current) {   videoRef.current.removeEventListener('loadeddata', handleVideoLoaded); } }
  }, []);

  const handleVideoLoaded = () => {
    videoRef.current.removeEventListener('loadeddata', handleVideoLoaded);
    videoRef.current.setAttribute('preload', 'auto');
  };

  return (
    <header id='header'  >
      <div className="bgCover" style={{zIndex:"0"}}  >  <img  loading='lazy' src={IMG3} alt="Landing"  /> </div>
      <div className="container"> <Navbar /> </div>
      <section id='video' >

          <video poster={DashboardScreen} webkit-playsinline="true" playsInline preload="auto" ref={videoRef}  id='myVideo'   autoPlay loop muted >
            <source  src={Dashboard } type="video/mp4" />
          </video>

        </section>
    </header>
  )
})

export default Landing