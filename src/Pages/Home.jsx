import React, { useState, useEffect } from 'react'
import landingImg from '../assets/images/landingImg.png'
import { Link, useNavigate } from 'react-router-dom'
import ProjectCard from '../Components/ProjectCard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Home() {
  const navigate = useNavigate()
  const [isLogggedIn,setIsLoaggedIn] = useState(false)

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsLoaggedIn(true)
    }else{
      setIsLoaggedIn(false)
    }
  },[])


  const handleProjectPage = ()=>{
    if(sessionStorage.getItem("token")){
      navigate('/projects')
    }else{
      toast.warning("Please login to Explore Our Projects!!!")
    }
   
  }
  return (
    <>
    {/* landing Part */}
      <div style={{ width: '100%', height: '100vh', backgroundColor: '#90ee90' }} className='rounded'>
        <div style={{ height: '100%' }} className='container'>
          <div style={{ height: '100%' }} className="row align-items-center ">
            <div className="col-lg-5">
              <h1 style={{ fontSize: '80px' }} className='fw-bolder text-light' ><i style={{ height: '82px' }} className='fa-solid fa-paperclip'></i>Project Fair</h1>
              <p>One Stop Destination For all Software Development Project. Where users can add and manage their projects. As well as access all projects available in our website...What are you Waiting for!!!</p>
            {isLogggedIn?<Link className='btn btn-warning mt-3' to={'/dashboard'}>Manage your Projects <i className="fa-solid fa-arrow-right ms-2"></i></Link> : <Link className='btn btn-warning mt-3' to={'/login'}>Starts to Explore <i className="fa-solid fa-arrow-right ms-2"></i></Link>}
            </div>
            <div className="col-lg-2"/>
              <div className="col-lg-5">
                <img className='img-fluid' src={landingImg} alt="No image" />
              </div>   
          </div>
        </div>
      </div>
      {/* all projects */}
      <div className="projects mt-5">
        <h1 className='text-center mb-5'>Explore Our Projects</h1>
        <marquee>
          <div className="d-flex justify-content-between">
            <div className="me-5">
              <ProjectCard/>
            </div>
          </div>
        </marquee>
        <div className="text-center">
          <button onClick={handleProjectPage} className='btn btn-link'>View More Projects</button>
        </div>
      </div>
      <ToastContainer autoClose={3000} theme='colored' />
    </>
  )
}

export default Home 