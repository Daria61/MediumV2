import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Dheader from './Dheader'
import Home from './Dhome'
import Lay from './DLay'
import Dnews from './Dnews'
import Duser from './Duser'

export default function Main() {
  const [news, setNews] =useState()
  const [err, setErr] = useState()
  fetch('https://newsapi.org/v2/everything?q=world&apiKey=57f263c59a5c451d8dcf306599bde48c')
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data);
    setNews(data)
  })
  .catch((err)=> setErr(err))
  return (
    <div>
      <Dheader/>       
      <Routes>
        <Route  element={<Lay/>}>
          <Route index  element={<Home/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/news' element={<Dnews/>}></Route>
          <Route path='/users' element={<Duser/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}
