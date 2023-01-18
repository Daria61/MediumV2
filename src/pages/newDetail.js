import React from 'react'
import Data from '../component/data'
import { useParams } from 'react-router-dom'

export default function NewDetail({setHeadColor}) {
  setHeadColor("#fff")
    const {id} = useParams()
    const showNow = Data.filter((a)=> id === a.id)
    console.log(showNow);
  return (
    <div>
      <div className='m-auto row' style={{maxWidth:"1150px",paddingTop:"80px"}}>

        <div className='col-md-8' style={{maxWidth:"700px"}}>
          <div className="d-flex align-items-center w-100">
              <img className='m-1' style={{width:"50px", height:"50px"}} src={showNow[0].createdUser.img} alt="a"/>
              <div className='text-start pt-3 ps-2'>
                <p className='fw-semibold m-0' style={{fontSize:"16px", }}>{  showNow[0].createdUser.Name}</p>
                <div className='d-flex  align-items-center' style={{fontSize:"11px", color:"#757575"}}>
                   <p>{showNow[0].date.month} {showNow[0].date.day}, {showNow[0].date.year==="2023" ? "": showNow[0].date.year}</p>
                   <p className="mx-1">|</p>
                   <p className="mx-1">{showNow[0].read}</p>
                   <p className="mx-1">|</p>
                   <p className="mx-1" style={{backgroundColor:"#F2F2F2", padding:"5px 10px" , borderRadius:"20px"}}>{showNow[0].category}</p>
                   <p style={{color:"#FFC017"}}>{ showNow[0].isTrending ? <i class="fs-5 bi bi-star-fill"></i> : ""}</p>
                   {/* <p  onClick={()=>Btnsave(showNow[0])}> {afterSign? <i style={{color: a.save? "#FFC017": ""}} class="bi bi-bookmark-fill fs-6 ps-2"></i> : ""}</p>                                       */}
                </div>
              </div> 
          </div>
          <div className='w-100 mt-4'>
            <img alt="" src={showNow[0].img}  className="w-100"/>
          </div>
          <div className='text-start mt-4 '>
            <h2 className='fw-bold'>{showNow[0].head}</h2>
          </div>
          <div className='text-start' >
            <p style={{fontSize:"20px", marginTop:"30px"}}>{showNow[0].paragra}</p>
          </div>
        </div>
        <div className=' ms-5  col-md-4' style={{position:"fixed", top:"80px", right:"100px"}}>
          <div className='border-start text-start p-3'>
          <img className='' style={{width:"70px", height:"70px"}} src={showNow[0].createdUser.img} alt="a"/>
          <p className='fw-semibold m-0' style={{fontSize:"16px", }}>{  showNow[0].createdUser.Name}</p>

          </div>
        </div>
      </div>
    </div>
  )
}
