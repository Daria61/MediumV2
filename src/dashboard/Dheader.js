import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Dheader() {
  return (
    <div>
        <header className='navbar bg-light navbar-expand-lg'>
        <div className='row'>
        <div className='col'>
          <NavLink className='link' to='/'  style={({isActive})=>({color: isActive ? "blue": "black" })}>Home</NavLink>
          </div>
          <div className='col'>
          <NavLink className='link' to='/main'  style={({isActive})=>({color: isActive ? "blue": "black" })}>Main</NavLink>
          </div>
          <div className='col'>
          <NavLink className='link' to='/aboutus' style={({isActive})=>({color: isActive ? "blue": "black" })}>AboutUs</NavLink>
          </div>
          <div className='col'>
          <NavLink className='link' to='/contact'  style={({isActive})=>({color: isActive ? "blue": "black" })}>Contact</NavLink>
          </div>
        </div>
      </header>
    </div>
  )
}
