import { useState  ,useRef, memo} from 'react'
import Animation from './helpers/Animation';
import FormImg from "../assets/contact.jpg"
import IMG1 from "../assets/bg/b1.webp"
import emailjs from '@emailjs/browser';
import { Pattern9 } from './patterns/Pattern1';
import { useTranslation } from 'react-i18next';

const Contact = memo(({title , desc , onHere , number , style}) => {
  const form = useRef();
  const {t} = useTranslation() ;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_pl60iqr', 'template_03nn5rk', form.current, '3BxbLM5srobXbwT-i')
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log(error);
      });
      e.target.reset() ;
  };
  let services = t("servicesAction" , {returnObjects:true})
  const [values , setvalues] = useState(services[number])

  return (
    <>
      <Pattern9 />
      <Animation />
    <section className='Contact' id='Contact'>
      <div className="bgCover"  >  <img src={IMG1} alt="contact"  /> </div>      
      <div className="container">
      <div className="box box-img "   > <img src={FormImg} alt="Smiling man with laptop on geometric patterned background with text 'We're Here to Help You”"  /> </div>
       
        <div   className="box"  >
          <div  className='h1 '>{title || t("home.contact.h1")}</div> 
          <p  className='h2'>{desc ? desc : t("home.contact.phead")} </p>

          <form ref={form} onSubmit={sendEmail}>
              <input   required type="text" name="name" placeholder={t("home.contact.name")} id="" />
              <input   required type="Email" name="email" placeholder={t("home.contact.email")} id="" />
              <input   required type="text" name="phone" placeholder={t("home.contact.phone")} id="" />
              <select   name='services' className='input form-select' aria-label=".form-select-lg examplev" value={values} >
                <option value="0">{t("home.contact.select")}</option>
                {services.map((e,index)=> <option key={index} value={e} >{e}</option> )}
              </select>
            <textarea   name="message" placeholder={t("home.contact.message")} id="" cols="30" rows="10"></textarea>

            <button   className='bt' aria-label="Submit" >{t("home.contact.bt")}</button>
          </form>
        </div>

      </div>
    </section>
    </>
  )
})

export default Contact