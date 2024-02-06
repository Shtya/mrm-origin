import React, { useEffect, useState } from 'react'
import {Routes , Route, useNavigate, useLocation} from "react-router-dom"
import { useTranslation } from 'react-i18next';

import "./sass/main.css"

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Blogs from './pages/Blogs'
import Landing from './pages/Landing'
import Error from './pages/Error'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import S_SEO from './pages/S_SEO'
import S_WebDesign from './pages/S_WebDesign'
import S_Media from './pages/S_Media'
import M_Signages from './pages/M_Signages'
import S_Branding from './pages/S_Branding'
import S_Gifts from './pages/S_Gifts'
import S_Exhibition from './pages/S_Exhibition'
import S_photography from './pages/S_photography';

import Facebook from './components/Social-media/Facebook'
import Instagram from './components/Social-media/Instagram'
import Snapchat from './components/Social-media/Snapchat'
import Linkedin from './components/Social-media/Linkedin'
import Tiktok from './components/Social-media/Tiktok'
import X from './components/Social-media/X'
import SlideNav from './components/SlideNav'


import BlogDetails from './components/BlogDetails'
import Dashboard from './blog/Dashboard'
import BlogsAll from './blog/BlogsAll'
import E_post from './blog/E_post'
import UploadImg from './blog/UploadImg';
import Projects from './components/Projects';

export const Social_Media = ["https://www.facebook.com/MRMadvertisingDubai" , "https://www.instagram.com/mrmadvertising/" , "https://www.linkedin.com/company/mrm-advertising-media" , "https://api.whatsapp.com/send?phone=+971561384496&text=Hello%2C%20world!"]
export const Animate = "zoom-in"


const App = () => {
  const { t, i18n } = useTranslation();
  const [lang , setlang] =useState()

  useEffect(_=> { i18n.changeLanguage(localStorage?.getItem("lang"))   } ,[])
  useEffect(_=> { setlang(localStorage.getItem("lang"))   } ,[localStorage.getItem("lang")])

  const {pathname} = useLocation() ;
  const push = useNavigate();
  useEffect(_=>{
    if(pathname == "/home") return push("/")
    if(pathname == "/photography-and-videography-agency-in-dubai") return push("/Photography-In-Dubai")
    if(pathname == "/web-design") return push("/web-development-company-in-dubai")
    if(pathname == "/seo") return push("/seo-agency-in-dubai")
    if(pathname == "/Exhibition-and-display-stand") return push("/exhibition-and-display-stand-agency-in-dubai")
    if(pathname == "/gifts") return push("/Corporate-gifts-in-dubai")
    if(pathname == "/signages") return push("/indoor-and-outdoor-signages-agency-in-dubai")
    if(pathname == "/portfolio") return push("/social-media-marketing-agency-in-dubai")
  } ,[pathname])

 
  return ( 
    <div className={` App lang-${lang}`}>
      <SlideNav whats={false} />
      
      <Routes>
        <Route index   path='/'    element={<Home />} />                           
        <Route path='/about-us'    element={<AboutUs />} />                          
        <Route path='/contact-us'  element={<ContactUs />} />                           
        <Route path='*'            element={<Error />} />                        
        <Route path='/privacy'     element={<Privacy />} />                          
        <Route path='/terms'       element={<Terms />} />                          
        <Route path='/projects'       element={<Projects />} />                          
        
        <Route path='/web-development-company-in-dubai'              element={<S_WebDesign/>} />                        
        <Route path='/Photography-In-Dubai'                          element={<S_photography />} />                        
        <Route path='/exhibition-and-display-stand-agency-in-dubai'  element={<S_Exhibition  />} />                        
        <Route path='/indoor-and-outdoor-signages-agency-in-dubai'   element={<M_Signages />} />                        
        <Route path='/branding-agency-in-dubai'                      element={<S_Branding  />} />                        
        <Route path='/Corporate-gifts-in-dubai'                      element={<S_Gifts  />} />                        
        <Route path='/advertising-ppc-agency-in-dubai'               element={<S_Media />} />   
        <Route path='/seo-agency-in-dubai'                           element={<S_SEO />} />                        
        <Route path='/social-media-marketing-agency-in-dubai'        element={<Landing />} />                        
        

        <Route path="/dashboard"      element={<Dashboard />} /> 
        <Route path="/Img"      element={<UploadImg />} /> 
        <Route path="/MRM"            element={<BlogsAll />} /> 
        <Route path="/edite-blog/:id" element={<E_post />} /> 
        <Route path="/blog/:id"       element={<BlogDetails />} />
        <Route path='/blog'           element={<Blogs />} /> 

        <Route path='/snapchat'  element={<Snapchat />} />                        
        <Route path='/facebook'  element={<Facebook />} />                        
        <Route path='/instagram' element={<Instagram />} />                        
        <Route path='/linkedin'  element={<Linkedin />} />                        
        <Route path='/x'        element={<X />} />                        
        <Route path='/tiktok'    element={<Tiktok />} />                        

      </Routes>
    </div>

  )
}

export default App




