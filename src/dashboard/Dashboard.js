import React , {useEffect, useState} from 'react'
import { DChart } from './Dchart'



export default function Dashboard() {
  const [news, setNews] =useState([])
  const [err, setErr] = useState("")
  useEffect(()=>{
    fetch('http://192.168.1.50:4040/news')
  .then((res)=>res.json())
  .then((data)=>{
    setNews(data.news)
  })
  .catch((err)=> setErr(err))
  },[
  ])
  return (
    <div>
      <DChart news={news} />
    </div>
  )
}
