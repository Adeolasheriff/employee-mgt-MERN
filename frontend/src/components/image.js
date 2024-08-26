import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Image() {
    const [file,setfile] = useState()
    const [image,setImage] = useState()
     
      const handleUpload = (e) => {
        const formdata = new FormData()
        formdata.append('file',file)
             axios.post('https://employee-mern-apiii.vercel.app/upload',formdata)
             .then(res => console.log(res))
             .catch(err => console.log(err))
      }

      useEffect(()=> {
        axios.get('https://employee-mern-apiii.vercel.app/getImage')
        .then(res => setImage(res.data[1].image))
        .catch(err => console.log(err))
      },[])
   return (
    <div>
         <input type='file' onChange={e => setfile(e.target.files[0])} />
         <button onClick={handleUpload}>upload</button>
         <br />
        <img src={'https://employee-mern-apiii.vercel.app/images/'+image} alt='img'/>
    </div>
  )
}
