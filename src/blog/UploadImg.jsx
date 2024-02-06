import React, { useEffect, useState } from 'react'
import baseURL, { GetImg, baseImg } from '../API/API';


const UploadImg = () => {
  const Img  = []
  const [done , setdone] = useState(false)


  const formdata = new FormData();
  const handleImg = (e) => {
    const files = Array.from(e.target.files)
    files?.forEach((e) => formdata.append("images", e));
  }

  const handleSubmit  = async ()=>{
    setdone(true)
    await baseURL.post('image', 
      formdata,
      {headers: { "Content-Type": "multipart/form-data" }}
    ).then(res => console.log(res)).catch(err => console.log(err))
    setdone(false)
  }


  const handleCopy = (text) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };





  const [Images , setImages] = useState([])

  useEffect(_=>{
    baseURL.get(`image` , {timeout:4000}).then(res => setImages(res.data))
  } ,[done])

  // console.log(Images)
  return (
    <div className='addImage'>
      <div className="container">
      <input type="file"  multiple onChange={handleImg}/>
      <button aria-label="Submit" onClick={handleSubmit} className='bt' style={done ? {opacity:".7"} : {opacity:"1"}}>  Send </button>
      <div className="images">
        {Images?.map((e,index)=> <div key={index}>
          
          <div className="grid"> {e?.images?.map((ele , idx) => <div key={100 + idx} className="box">  <img style={{color:"white"}} src={`${GetImg}/${ele}`} width={60} height={60} alt={ele} />  <div> {ele} </div>  <div className="copy" onClick={() => handleCopy(`https://mrm-0-server.vercel.app/image/${ele}`)}> copy</div> </div>  )}</div> <hr/> <hr/>
          </div>)}
      </div>
      </div>
    </div>
  )
}

export default UploadImg