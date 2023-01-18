import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dheader from './Dheader'
import Home from './home'

export default function Main() {
  return (
    <div>
      <Dheader/>       
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        {/* <Route path='/aboutus' element={<AboutUs/>}></Route> */}
        {/* <Route path='/main' element={<Main/>}></Route> */}
        {/* <Route path='/contact' element={<Contact/>}></Route> */}
      </Routes>
    </div>
  )
}
