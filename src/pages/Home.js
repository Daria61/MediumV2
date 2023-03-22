import React from 'react'
import HeadSection from '../component/HeadSection'
import Trend from '../component/Trend'
import Main from '../component/Main'



export default function Home({ filt, setFilt}) {
  const user = {mail : "ch.d@gmail.com", pas : 9988 , Name: "Ch. Erdenedari", userId:"abc", img:require("../image/profile.png") }
  
  return (
    <>
         <HeadSection/>
         <Trend />
         <Main  filt={filt} setFilt={setFilt} user={user}/>
    </>
  )
}

