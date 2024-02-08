import React , {Suspense, useEffect  ,useState} from 'react';
import {createRoot} from 'react-dom/client';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import './i18n';
import App from './App';
import IMG3 from "./assets/bg/b9.webp"
import logo from "./assets/Logo1.webp"
import {BrowserRouter, useLocation} from "react-router-dom"
import MetaTag from './pages/MetaTag';


const Loading = () => {
  const {pathname} = useLocation() ;
  const [time , settime] = useState(true)
  useEffect(_=>{
    const data = async()=>{
      await pathname == "/blog" || pathname == "/" ? settime(true) : settime(false)
      setTimeout(() => {
        settime(false)
      }, 1300);
    }

    data()
  } ,[pathname])
  return (
   time == true && <div className="animation_text" >
        <div className="bgCover"  >  <img  src={IMG3}  alt="home"  /> </div>
          <div className="coverImg"> <img  src={logo}  alt="" /> </div>
          <div className="container2">  <span></span>  <span></span>  <span></span>  <span></span></div>
      </div>
  )
}


createRoot(document.getElementById("root")).render(
    <BrowserRouter> 
        <MetaTag   canonical=""   title="MRM | Best Digital Marketing & Advertising Agency in Dubai" desc="Boost your Brand with MRM Advertising, Top Digital Marketing & Advertising Agency in Dubai.We Offer Premier Digtal marketing, SEO and Web Design Services." />
        <App /> 
        <Loading />
      </BrowserRouter>  )





