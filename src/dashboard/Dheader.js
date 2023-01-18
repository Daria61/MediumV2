import React from 'react'

export default function Dheader() {
  return (
    <div>
        <header className='navbar bg-light navbar-expand-lg'>
        <div className='row align-items-center'>
          <div className='col-2'>
            <img src={require('../image/mediumlogo.png')} alt="" className='w-75'/>
          </div>
          <div className='col-6'>
            <input type='text' placeholder='search' className='w-100 rounded-5 outline-none border-0 p-2'/>
          </div>
        </div>
      </header>
    </div>
  )
}
