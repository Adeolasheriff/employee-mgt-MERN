import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Image() {
    const [file,setfile] = useState()
    const [image,setImage] = useState()
     
      const handleUpload = (e) => {
        const formdata = new FormData()
        formdata.append('file',file)
             axios.post('http://localhost:8080/upload',formdata)
             .then(res => console.log(res))
             .catch(err => console.log(err))
      }

      useEffect(()=> {
        axios.get('http://localhost:8080/getImage')
        .then(res => setImage(res.data[1].image))
        .catch(err => console.log(err))
      },[])
   return (
    <div>
         <input type='file' onChange={e => setfile(e.target.files[0])} />
         <button onClick={handleUpload}>upload</button>
         <br />
        <img src={'http://localhost:8080/images/'+image} alt='img'/>
    </div>
  )
}
