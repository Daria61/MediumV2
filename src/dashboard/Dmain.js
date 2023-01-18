import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Dheader from './Dheader'
import Home from './Dhome'
import Lay from './DLay'
import Dnews from './Dnews'
import Duser from './Duser'

export default function Main() {
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
