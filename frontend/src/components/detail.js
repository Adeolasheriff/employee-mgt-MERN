import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  Link, useNavigate, useParams } from 'react-router-dom';


export default function Detail() {
    const {id} = useParams()
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [age,setAge] = useState()
    const [city,setCity] = useState()
    // const navigate = useNavigate()


    useEffect(()=>{
      axios.get('http://localhost:8080/getuser/'+id)
      .then(result => {
        console.log(result)
        setName(result.data.name)
        setEmail(result.data.email)
        setAge(result.data.age)
        setCity(result.data.city)
      })
      .catch(err => console.log(err))
    },[])
    // const handleUpdate = ((e)=> {
    //      e.preventDefault();
    //      axios.put('http://localhost:8080/update/' +id,{name,email,age,city})
    //       .then(res => {
    //         console.log(res)
    //         navigate('/home')
    //          })

    //       .catch(err => console.log(err))
    // })
  return (
    <div>
          <div className='d-flex vh-100 justify-content-center align-items-center bg-primary p-4'>
             <div className='w-50 bg-white rounded p-4'>
                <form>
                    <h2>details</h2>
                    <div className='mt-3'>
                        <label className='mb-2' htmlFor="">Name</label>
                        <input type="text" className='form-control ' disabled placeholder='Enter your name' onChange={(e) => setName((e.target.value))} value={name}/>
                    </div>

                       <div className='mt-3'>
                          <label className='mb-2' htmlFor="">Email </label>
                           <input type="email" className='form-control' disabled placeholder='Enter your email' onChange={(e)=> setEmail((e.target.value))} value={email} />
                            </div>
                       
                       <div className='mt-3'>
                          <label className='mb-2' htmlFor="">Age </label>
                           <input type="text" className='form-control' disabled placeholder='your age' onChange={(e)=> setAge((e.target.value))} value={age} />
                            </div>
                       <div className='mt-3 mb-3'>
                          <label className='mb-2' htmlFor="">city </label>
                           <input type="text" className='form-control' disabled placeholder='city' onChange={(e)=> setCity((e.target.value))} value={city} />
                            </div>
                             <Link to={`/update/${id}`} className='btn btn-success mt-2 rounded-0 w-100'>Update </Link>
                             <Link to={`/home`} className='btn btn-info mt-2 rounded-0 w-100'>Home </Link>
                      </form>
             </div>
             </div>
    </div>
  )
}
