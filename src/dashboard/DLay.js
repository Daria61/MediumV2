import React, { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import Dheader from './Dheader'
import { useEffect } from 'react'

export default function Home() {
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
    <>
    <Dheader/>
    <div>
      <div className='row text-start'>
        <div className='col-3'>
          <div className='p-2'> <NavLink to='/admin'>Home</NavLink></div>
          <div className='p-2'> <NavLink to='/dashboard'>Dashboard</NavLink></div>
          <div className='p-2'> <NavLink to='/news'>News</NavLink></div>
          <div className='p-2'> <NavLink to='/users'>Users</NavLink></div>
        </div>
        <div className='col-9'>
        <div className='row'>
           <div className='col-4 '>
            <div className='m-3 p-3 border rounded'>
              <p className='text-warning'>Users</p>
              <div className='d-flex justify-content-between'>
                <div><i class="bi bi-person-fill"></i></div>
                <div>4500</div>
              </div>
            </div>
           </div>
           <div className='col-4 '>
            <div className='m-3 p-3 border rounded'>
              <p className='text-warning'>News</p>
              <div className='d-flex justify-content-between'>
                <div><i class="bi bi-newspaper"></i></div>
                <div>{news.length}</div>
              </div>
            </div>
           </div>
           <div className='col-4 '>
            <div className='m-3 p-3 border rounded'>
              <p className='text-warning'>Access</p>
              <div className='d-flex justify-content-between'>
                <div><i class="bi bi-bar-chart-fill"></i></div>
                <div>4500</div>
              </div>
            </div>
           </div>
        </div>
        <Outlet/>
        </div>
      </div>
    </div></>
  )
}
