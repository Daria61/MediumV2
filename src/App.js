import './App.css';
import Header from './component/header';
import HeadSection from './component/HeadSection'
import Trend from './component/trend'
import Main from './component/main'
import News from './component/data';
import {Routes, Route} from "react-router-dom"
import OurStory from "./pages/ourStory"
import Write from './pages/write';
import NewDetail from './pages/newDetail';
import Membership from "./pages/membership"
import React, { useState } from 'react'

import Dashboard from '../src/dashboard/Dashboard'
import Home from '../src/dashboard/Dhome'
import Lay from '../src/dashboard/DLay'
import Dnews from '../src/dashboard/Dnews'
import Duser from '../src/dashboard/Duser'


let headSecTit = { HeadTit:"Stay curious.", Tit:"Discover stories, thinking, and expertise from writers on any topic.", Btn:"Start reading"}
let aside =["Help", "Status", "Writers", "Blog", "Careers", "Privacy", "Tems", "About", "Text to speech"]

function App() {


  const filtObj={
    filtStatus: false,
    filtCategory: ""
  }
  const [afterSign, setAfterSign] = useState(false)
  const [filt , setFilt] = useState(filtObj)
  const [data, setData]= useState(News)
  const [headColor, setHeadColor] = useState("")
  const user = {mail : "ch.d@gmail.com", pas : 9988 , Name: "Ch. Erdenedari", userId:"abc", img:require("./image/profile.png") }
  return (
    <div className="App">
      {
       <>      
      <Routes>
       <Route  element={<Header afterSign={afterSign}  setAfterSign={setAfterSign} data={data} setData={setData} user={user} filt={filt} setFilt={setFilt} headColor={headColor} setHeadColor={setHeadColor} />}>
        <Route index element={<><HeadSection {...headSecTit} afterSign={afterSign}  setAfterSign={setAfterSign} /><Trend info={data}/>, <Main  info={data} aside={aside} setData={setData} afterSign={afterSign} setAfterSign={setAfterSign} filt={filt} setFilt={setFilt} user={user}/></>}></Route>
        <Route path='/:id' element={<NewDetail setHeadColor={setHeadColor}/>}/>
        <Route path="/ourstory" element={<OurStory setHeadColor={setHeadColor}/>}></Route>
        <Route path="/membership" element={<Membership  setHeadColor={setHeadColor}/>}/>
        <Route path="/write" element={<Write  setHeadColor={setHeadColor}/>}/>
        </Route>
      </Routes>

      <Routes>
        <Route  element={<Lay />}>
          <Route index path='/admin' element={<Home />}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/news' element={<Dnews/>} ></Route>
          <Route path='/users' element={<Duser/>}></Route>
        </Route>
      </Routes> 
      </>
    }     
    </div>
  );
}

export default App;
