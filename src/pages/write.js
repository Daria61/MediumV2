import React from 'react'
import { useContext } from 'react'
import { HeaderColor } from '../context/create.context'

export default function Write() {
  const {setHeadColor} = useContext(HeaderColor)

    setHeadColor("#f24d2e")
  return (
    <div>
        <div className='row' style={{backgroundColor:"#f24d2e", paddingTop:"60px"}}>
            <div className='col-8 border-end border-dark pt-5 text-start'>
                <p className='text-white'>START A BLOG FOR FREE</p>
                <h1 style={{fontSize:"90px"}}>Publish, grow, and earn, all in one place.</h1>
                <p>If you have a story to tell, knowledge to share, or a perspective to offer — welcome home. Sign up for free so your writing can thrive in a network supported by millions of readers — not ads.</p>
                <button className='btn btn-light rounded-5 mb-5'>Start writing</button>
            </div>
            <div className='col-4'></div>
        </div>
    </div>
  )
}
