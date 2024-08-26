import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


export default function Signup() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = ((e)=> {
         e.preventDefault();
         axios.post('http://localhost:8080/register',{name,email,password})
          .then(res => {console.log(res)
            navigate('/')
             })

          .then(err => console.log(err))
    })
  return (
    <div>
          <div className='d-flex vh-100 justify-content-center align-items-center bg-primary p-4'>
             <div className='w-50 bg-white rounded p-4'>
                <form onSubmit={handleSubmit}>
                    <h2>register</h2>
                    <div className='mt-3'>
                        <label className='mb-2' htmlFor="">Name</label>
                        <input type="text" className='form-control ' placeholder='Enter your name' onChange={(e) => setName((e.target.value))}/>
                    </div>

                       <div className='mt-3'>
                          <label className='mb-2' htmlFor="">Email </label>
                           <input type="email" className='form-control' placeholder='Enter your email' onChange={(e)=> setEmail((e.target.value))} />
                            </div>
                       <div className='mt-3'>
                          <label className='mb-2' htmlFor="">Password </label>
                           <input type="password" className='form-control' placeholder='Enter your password' onChange={(e)=> setPassword((e.target.value))} />
                            </div>
                              <button type='submit' className='btn btn-success mt-2 rounded-0 w-100'> Register</button>
                              <p>have an account ?</p>
                              <Link to={'/login'} type='submit' className='btn btn-default border w-100 bg-light text-decoration-none mt-2 rounded-0 w-100'>login</Link>
                   
                </form>
             </div>
             </div>
    </div>
  )
}
