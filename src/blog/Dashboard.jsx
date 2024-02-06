import React , { useRef, useState} from 'react'
import {  useNavigate } from 'react-router-dom'
import JoditEditor from 'jodit-react';
import baseURL from '../API/API';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alt_Navbar from '../components/Navbar1';

const config = {headers : { "Content-Type":"multipart/form-data" , "Cache-Control": "no-cache"} , theme:"dark" }
const Section = ["Digital Marketing News" ,"Latest Updates and Insights" , "Tips and Strategies" ]


const E_post = () => {

  const editor = useRef(null);
  const navigate = useNavigate();
  const [isload , setisload] = useState(false)
  const [Image2, setImage2] = useState("");
  const [title, settitle] = useState("");
  const [Des, setDes] = useState("");
  const [category, setCategory] = useState();
  const [titleData, settitleData] = useState();
  const [descData, setdescData] = useState();
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(Image2 == "" || title == ""  || Des == ""  || category == "" ) return toast.error("Please fill in all the field!")

    setisload(true)
    await baseURL.post("" , {title ,description:Des , category , thumbnail:Image2 , titleData , descData })
    setisload(false)
    navigate("/MRM")
  }

  return (
    <div className='Dashboard-blog'>
      <div className="container"> <Alt_Navbar /> </div>
        <section className="create-post">
          <div className="container">
            <h2 className="h1">Create blog</h2>
            <form className="form create-post_form">
              <p className="error-message"> THis is an error message </p>
              <input type="text" placeholder='title'  value={title}    onChange={e=> settitle(e.target.value)}  />
              <select name=""                        value={category} onChange={e=> setCategory(e.target.value)}> {Section.map((e,index)=> ( <option key={index} value={e}>{e}</option> ))} </select>
              <input type="text" placeholder='Image'  value={Image2}    onChange={e=> setImage2(e.target.value)}  />
              <input type="text" placeholder='meta data title'  value={titleData}    onChange={e=> settitleData(e.target.value)}  />
              <input type="text" placeholder='meta data description'  value={descData}    onChange={e=> setdescData(e.target.value)}  />
              
              <JoditEditor   ref={editor}   value={Des}   config={config}   tabIndex={1}   onChange={setDes} />

              <button aria-label="Submit" className='bt' style={{opacity: !isload ? "1":".7" }}  onClick={handleSubmit} > 
                {
                  !isload ? "Create" 
                  :  <div className="LoadingAnimate"> <div className="load-wrapp"> <div className="load-3"> <div className="line"></div> <div className="line"></div> <div className="line"></div> </div> </div></div>
                }
              </button>
            </form>
            
          </div>
        </section>
        <ToastContainer />
    </div>
  )
}

export default E_post