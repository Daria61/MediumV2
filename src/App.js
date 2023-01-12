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
  const [signstatus, setSignstatus] = useState(false)
  return (
    <div className="App">
      <Header signstatus={signstatus}  setSignstatus={setSignstatus}/>
      <HeadSection {...headSecTit} signstatus={signstatus}  setSignstatus={setSignstatus} />
      <Trend info={News} />
      <Main info={News} aside={aside} signstatus={signstatus} />
    </div>
  );
}

export default App;
