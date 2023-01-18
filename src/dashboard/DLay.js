import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'


export default function Home() {
  return (
    <div>
      <div className='row text-start'>
        <div className='col-3'>
          <div className='p-2'> <NavLink to='/'>Home</NavLink></div>
          <div className='p-2'> <NavLink to='/dashboard'>Dashboard</NavLink></div>
          <div className='p-2'> <NavLink to='/news'>News</NavLink></div>
          <div className='p-2'> <NavLink to='/users'>Users</NavLink></div>
        </div>
        <div className='col-9'>
        <Outlet/>
        </div>
      </div>
    </div>
  )
}
