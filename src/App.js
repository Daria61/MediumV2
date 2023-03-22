import './App.css';
import Header from './component/Header';
import News from './component/Data';
import {Routes, Route} from "react-router-dom"
import OurStory from "./pages/OurStory"
import Write from './pages/Write';
import NewDetail from './pages/NewDetail';
import Membership from "./pages/Membership"
import React, { useState } from 'react'
import Home from './pages/Home';
// import Dashboard from '../src/dashboard/Dashboard'
// import Home from '../src/dashboard/Dhome'
// import Lay from '../src/dashboard/DLay'
// import Dnews from '../src/dashboard/Dnews'
// import Duser from '../src/dashboard/Duser';
import ContextService from  "./context/contextService";

function App() {
  const filtObj={
    filtStatus: false,
    filtCategory: ""
  }
  const [afterSign, setAfterSign] = useState(false)
  const [filt , setFilt] = useState(filtObj)
  const [data, setData]= useState(News)
  const [headColor, setHeadColor] = useState("")
  
  return (
    <div className="App">
      <ContextService afterSign={afterSign}  setAfterSign={setAfterSign} data={data} setData={setData} headColor={headColor} setHeadColor={setHeadColor} >
      <Routes>
       <Route  element={<Header filt={filt} setFilt={setFilt} />}>
        <Route index path="/" element={<Home  filt={filt} setFilt={setFilt}/>} />
        <Route path='/:id' element={<NewDetail/>}/>
        <Route path="/ourstory" element={<OurStory />}></Route>
        <Route path="/membership" element={<Membership />}/>
        <Route path="/write" element={<Write />}/>
       </Route>
      </Routes>

      {/* <Routes>
        <Route  element={<Lay />}>
          <Route index path='/admin' element={<Home />}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/news' element={<Dnews/>} ></Route>
          <Route path='/users' element={<Duser/>}></Route>
        </Route>
      </Routes>  */}
      </ContextService>
    </div>
  );
}

export default App;
