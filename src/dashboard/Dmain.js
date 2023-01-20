import React, { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Dheader from './Dheader'
import Home from './Dhome'
import Lay from './DLay'
import Dnews from './Dnews'
import Duser from './Duser'

export default function Main() {
  const [news, setNews] =useState([])
  const [err, setErr] = useState("")
  useEffect(()=>{
    fetch('https://medium-api-psi.vercel.app/api/news')
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data);
    setNews(data.result)
  })
  .catch((err)=> setErr(err))
  },[])

  return (
    <div>
      <Dheader/>       
      <Routes>
        <Route path='/admin' element={<Lay news={news}/>}>
          <Route index path='/admin/home' element={<Home news={news}/>}></Route>
          <Route path='/admin/dashboard' element={<Dashboard/>}></Route>
          <Route path='/admin/news' element={<Dnews news={news}/>} ></Route>
          <Route path='/admin/users' element={<Duser/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}
