import React from 'react'
import { useEffect, useState } from 'react'


export default function Dhome() {
  const [news, setNews] = useState()
  useEffect(()=>{
   fetch('https://medium-api-psi.vercel.app/api/news')
 .then((res)=>res.json())
 .then((data)=>{
   console.log(data);
   setNews(data.result)
 })
 .catch((err)=> console.log(err))
 },[])
  return (
    <div>
      <div>
        <div className='p-4'>
        <table class="table  table-bordered">
          <thead>
            <tr>
              <th scope="col">a</th>
              <th scope="col">b</th>
              <th scope="col">c</th>
              <th scope="col">d</th>
            </tr>
          </thead>
          <tbody>
            {news.map(({_id , title, category,isTreding }, index)=>{
              return(
                <tr key={index}>
                   <th>{index+1}</th>
                   <td>{title}</td>
                   <td>{category}</td>
                   <td>{isTreding? (<button className='btn'>yes</button>): <button className='btn'>no</button>}</td>
                 </tr>
              )
            })}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}
