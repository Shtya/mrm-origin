import React , {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import baseURL, { baseImg } from '../API/API'
import Loading from "./Loading"
import Alt_Navbar from '../components/Navbar1'


const BlogsAll = () => {
  const [loadData , setloadData] =useState()
  const [data , setdata] = useState([])
  const [idDelete , setIdDelete] = useState("")
  const [showModal ,setshowModal] = useState(false)

  const handelModal = (e)=>{
    setshowModal(!showModal)
    setIdDelete(e)
  }

  const handelDelete = async()=>{
    setloadData(true)
    await baseURL.delete(idDelete)
    setshowModal(!showModal)
    setloadData(false)
  }

  useEffect(_=>{ baseURL.get("").then(res => setdata(res.data.data))} , [loadData])


  return (
    <div className={`blogs-view`}>
      <div className="container container1"> <Alt_Navbar /> </div>
    <div className='container '>
      {data?.length >= 1 ? (
        data?.map((e,index)=> (
          <div className="boxs" key={index}>
            <div className="coverImg"> <img src={e.thumbnail} alt="blog"  /> </div>
            <div className="text">
              <h2 className='h2'> {e.title} </h2>
              <div className="details">
                  <h3 className='p'> {e.category} </h3>
                  <div className='date'> {e.createdAt.split("T")[0]} </div>
            </div>
            </div>
            <ul>
              <Link className='bt btn btn-view' to={`/blog/${e._id}`}> View </Link>
              <Link className='bt btn btn-edite'  to={`/edite-blog/${e._id}`}> Edite </Link>
              <Link className='bt btn btn-delete' to="" onClick={_=> handelModal(e._id)}> Delete </Link>
            </ul>
          </div>
        ))
      ) : <Loading /> }
    </div>

    {
      showModal && <div className="overlay-modal">
      <div className="modal">
      <i className="fa-solid fa-xmark close" onClick={_=> setshowModal(!showModal)}></i>
      <p className='p'>Are you sure you want to delete everything from this website?</p>
      <p className='p'>This action cannot be undone.</p>
        <div className="action">
          <p className='btn-delete' onClick={handelDelete}>Delete</p>
          <p className='btn-close'  onClick={_=> setshowModal(!showModal)}>Close</p>
        </div>
    </div>
    </div>
    }
    </div>
  )
}

export default BlogsAll