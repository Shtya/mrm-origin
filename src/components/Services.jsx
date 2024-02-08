import { Link } from 'react-router-dom';
import IMG3 from "../assets/bg/b1.webp"
import { memo } from 'react';
import { useTranslation } from 'react-i18next';


const Services = memo(()=> {
  const {t} = useTranslation() ;
  const services = t("home.Home_Services3.box" , {returnObjects:true})

  return (
    <>
    <section className='services search-edite' id='Services'>
      <h2 className='h1 clip ' data-aos="zoom-in" >{t("home.Home_Services3.h1")}</h2> 
      
      <div className="container">
      <ul className='ul' data-aos="zoom-in">
        {services.map((e , index) => (
          <div key={index} className="box" data-aos="zoom-in"   >
            <div className="animate" ></div>
            <Link to={`${e.route}`}   >
              <div className='a' ><i className={`${e.icon} `}> <span />  <span /> </i> </div>
              <h3 className='h2 '>{e.title}</h3>
              <div className='p '>{e.desc}</div>
          </Link>
          </div>
        ))}
      </ul>
      </div>
    </section>
    </>
  );
})


export default Services