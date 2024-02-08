import React , { Suspense, memo , lazy} from "react";
import { Divider } from "../components/patterns/Pattern1";
import MetaTag from "./MetaTag";
import {  ImageGalleryHome2 } from '../components/Images2';
import { useTranslation } from 'react-i18next';

import Animation from "../components/helpers/Animation";
import Clients from "../components/Clients";

const  Landing    = lazy(() => import("../components/Landing"));
const  Why        = lazy(() => import("../components/Why"));
const  Who        = lazy(() => import("../components/Who"));
const  Services   = lazy(() => import("../components/Services"));
const  Blog       = lazy(() => import("../components/Blog"));
const  Clients2   = lazy(() => import("../components/Clients2"));
const  Contact    = lazy(() => import("../components/Contact"));
const  NewSlider  = lazy(() => import("../components/NewSlider"));
const  Footer     = lazy(() => import("../components/Footer"));



function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div className="Home" >
      <MetaTag   canonical=""   title="MRM | Best Digital Marketing & Advertising Agency in Dubai" desc="Boost your Brand with MRM Advertising, Top Digital Marketing & Advertising Agency in Dubai.We Offer Premier Digtal marketing, SEO and Web Design Services." />
      
       <Animation />
       
        <Suspense fallback={<div style={{background:"black" , height:"100vh"}}></div>}> 
            <Landing /> 
        </Suspense>

        <Divider classn="divider" />
        <Suspense fallback={<div style={{background:"black" , height:"100vh"}}></div>}> 
            <Who /> 
        </Suspense>


        <Divider classn="divider-left" />
        <Suspense fallback={<div style={{background:"black" , height:"100vh"}}></div>}> 
            <Why /> 
        </Suspense>


        <Divider classn="divider" />
        <Suspense fallback={<div style={{background:"black" , height:"100vh"}}></div>}> 
            <Services /> 
        </Suspense>


        <Divider classn="divider-left" />
        <Suspense fallback={<div style={{background:"black" , height:"100vh"}}></div>}> 
            <NewSlider  DATA={ImageGalleryHome2} typeOf="Signages" title={t("home.Home_Header.name")}   header1={t("home.Home_Header.header",{returnObjects:true})}  />  
        </Suspense>

        
        
        <Divider classn="divider" />
         <Suspense fallback={<div style={{background:"black" , height:"100vh"}}></div>}> 
            <Clients2 /> 
         </Suspense>
         {/* <Clients /> */}

         <Suspense fallback={<div style={{background:"black" , height:"100vh"}}></div>}> 
            <Contact />  
         </Suspense>


        <Divider classn="divider" />
        <Suspense fallback={<div style={{background:"black" , height:"100vh"}}></div>}> 
            <Blog /> 
        </Suspense>

        
        <Suspense fallback={<div style={{background:"black" , height:"100vh"}}></div>}> 
            <Footer  /> 
        </Suspense>
        </div>
  );
}

export default memo(Home);
