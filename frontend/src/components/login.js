import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


export default function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e)=> {
         e.preventDefault()
         axios.post('https://employee-mern-apiii.vercel.app/login',{email,password})
        //  axios.post('http://localhost:8080/login',{email,password})
          .then(result => {
              console.log(result)
                if(result.data === 'success'){
                    navigate('/home') 
                }
            })


          .catch(err => console.log(err))
    }

  return (
    <div>
          <div className='d-flex vh-100 justify-content-center align-items-center bg-primary p-4'>
             <div className='w-50 bg-white rounded p-4'>
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>

                       <div className='mt-3'>
                          <label className='mb-2' htmlFor="">Email </label>
                           <input type="email" className='form-control' placeholder='Enter your email' onChange={(e)=> setEmail((e.target.value))} />
                            </div>
                       <div className='mt-3'>
                          <label className='mb-2' htmlFor="">Password </label>
                           <input type="password" className='form-control' placeholder='Enter your password' onChange={(e)=> setPassword((e.target.value))} />
                            </div>
                              <button type='submit' className='btn btn-success mt-2 rounded-0 w-100'> Login</button>
                              <p>Dont have an account ?</p>
                              <Link to={'/'} type='submit' className='btn btn-default border w-100 bg-light text-decoration-none mt-2 rounded-0 w-100'>Register</Link>
                   
                </form>
             </div>
             </div>
    </div>
  )
}
