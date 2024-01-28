import React, { useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerAPI } from '../Services/allAPIs';


function Auth({insideRegister}) {
  const navigate = useNavigate()
  const [userData,setUserData] = useState({
    username:"",email:"",password:""
  })
  const handleRegister =async (e)=>{
    e.preventDefault()
    console.log(userData);
    const {username,email,password} = userData
    if(!username  ||  !email || !password){
      toast.info("Please fill the form completly!!")
    }else{
      // toast.success("Proceed to api call")
      try{
          const result = await registerAPI(userData)
          console.log(result);
          if(result.status===200){
            toast.success(`${result.data.username} has registered successfully!!!`)
            setUserData({ username:"",email:"",password:""})
            setTimeout(()=>{
                navigate('/login')
            },3000);
          }else{
            toast.warning(result.response.data)
          }
      }catch{
        console.log(err);
      }
    }

  }
  return (
    <div style={{width:'100%', height:'100vh'}} className='d-flex justify-content-center align-items-center'>
      <div className="container w-75">
        <Link to={'/'}><i className='fa-solid fa-arrow-left me-1'></i> Back to Home </Link>
        <div className="card shadow p-5 bg-success">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img className='w-100' src="https://ngo.kmatechnoware.com/assets/login_img/loginvector.png" alt="login" />
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center flex-column">
                <h1 className='fw-bolder text-light mt-2'><i style={{height:'45px'}} class="fa-solid fa-paperclip me-2"></i>Project Fair</h1>
                <h5 className='fw-bolder mt-2 pb-3 text-light'>
                  {insideRegister?'Sign up to your Account':'Sign in to your Account'}
                </h5>
                <Form className="w-100">
{insideRegister &&(
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control type="text" placeholder="Enter Username" onChange={e=>setUserData({...userData,username:e.target.value})} value={userData.username} />
      </Form.Group>)}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" onChange={e=>setUserData({...userData,email:e.target.value})} value={userData.email}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" onChange={e=>setUserData({...userData,password:e.target.value})} value={userData.password}  />
      </Form.Group>
   
    {
      insideRegister?
      <div>
        <button onClick={handleRegister} className='btn btn-light mb-2'>Register</button>
        <p>Already have an Account? click here to <Link to={'/login'}>Login</Link></p>
      </div>:
      <div>
       <button className='btn btn-light mb-2'>Login</button>
       <p>New User? click here to <Link to={'/register'}>Register</Link></p>
     </div>
    }
     </Form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer autoClose={3000} theme='colored' />
    </div>
  )
}

export default Auth