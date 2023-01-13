import './App.css';
import Header from './component/header';
import HeadSection from './component/HeadSection'
import Trend from './component/trend'
import Main from './component/main'
import News from './component/data';
import { useState } from 'react';
let headSecTit = { HeadTit:"Stay curious.", Tit:"Discover stories, thinking, and expertise from writers on any topic.", Btn:"Start reading"}
let aside =["Help", "Status", "Writers", "Blog", "Careers", "Privacy", "Tems", "About", "Text to speech"]

function App() {
  const filtObj={
    filtStatus: false,
    filtCategory: ""
  }
  const Obj ={
    signstatus: false,
    save : false
  }
  const [afterSign, setAfterSign] = useState(Obj)
  const [filt , setFilt] = useState(filtObj)
  return (
    <div className="App">
      <Header afterSign={afterSign}  setAfterSign={setAfterSign}/>
      <HeadSection {...headSecTit} afterSign={afterSign}  setAfterSign={setAfterSign} />
      <Trend info={News} />
      <Main info={News} aside={aside} afterSign={afterSign} setAfterSign={setAfterSign} filt={filt} setFilt={setFilt} />
    </div>
  );
}

export default App;
