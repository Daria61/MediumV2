import React from 'react'
import { useContext } from 'react'
import { HeaderColor } from '../context/create.context'

export default function Membership() {

  const {setHeadColor} = useContext(HeaderColor)

  setHeadColor("#4479ff")
  return (
    <div className='text-white'>
      <div className='text-center border-bottom' style={{backgroundColor:"#4479ff", paddingTop:"120px"}}>
        <h1 style={{fontSize:"86px", }}>Fuel great thinking</h1>
        <p className=' w-25 m-auto' >Become a Medium member to enjoy unlimited access anddirectly support the writers you read most.
        </p>
        <button className='btn btn-light rounded-5 mt-3 mb-5'>Get unlimited access</button>
      </div>
      <div  className='row p-5 text-start' style={{backgroundColor:"#4479ff",}}>
        <div className='col-6 border-end '>
          <h1>Get unlimited access to every story.</h1>
          <p>Read any article in our entire library across all your devices — with no paywalls, story limits or ads.</p>
        </div>
        <div className='col-6'>
          <h1>Support the voices you want to hear more from.</h1>
          <p>A portion of your membership will directly support the writers and thinkers you read the most.

</p>
        </div>
      </div>
    </div>
  )
}
