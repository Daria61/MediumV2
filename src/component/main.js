import Aside from "./aside"
import { Link } from "react-router-dom"
const main =({info, aside, afterSign , setFilt, filt , setData, user})=>{
    const Btnsave=(para)=>{
       setData( info.map((a)=>{
        if(a.id=== para.id){
            return {...a, save: !a.save}
        }
        return a
    })
       )
    }
    if(filt.filtStatus){
        let bb = info.filter(a=> a.category === filt.filtCategory)
        return(
            <div className="contain position-relative m-auto row" style={{maxWidth:"1150px"}} >
                {bb.map((a, index)=>{
                    return(
                        <div key={index} className="col-12 my-2" style={{maxWidth:"700px"}}>
                            <div className="d-flex align-items-center">
                                    <img className='m-1' style={{width:"20px", height:"20px"}} src={a.createdUser.img} alt="a"/>
                                    <p className='fw-semibold m-0' style={{fontSize:"12px", }}>{afterSign && user.Name ===a.createdUser.Name? "You" : a.createdUser.Name}</p>
                            </div>
                            <div className="row">
                                <div className="col-7">
                                   <Link to={a.id}>
                                   <div className='fw-bold text-start' style={{fontSize:"21px", }}>{a.head}</div>
                                   <p className="text-start" style={{color:"#757575", fontSize:"16px"}}>{a.title}</p>
                                   </Link>
                                   <div className='d-flex  align-items-center' style={{fontSize:"11px", color:"#757575"}}>
                                       <p>{a.date.month} {a.date.day}, {a.date.year==="2023" ? "": a.date.year}</p>
                                       <p className="mx-1">|</p>
                                       <p className="mx-1">{a.read}</p>
                                       <p className="mx-1">|</p>
                                       <p className="mx-1" style={{backgroundColor:"#F2F2F2", padding:"5px 10px" , borderRadius:"20px"}}>{a.category}</p>
                                       <p style={{color:"#FFC017"}}>{ a.isTrending ? <i class="fs-5 bi bi-star-fill"></i> : ""}</p>
                                       <p  onClick={()=>Btnsave(a)}> {afterSign? <i style={{color: a.save? "#FFC017": ""}} class="bi bi-bookmark-fill fs-6 ps-2"></i> : ""}</p>                                      
                                    </div>
                                </div>
                                <div className="col-5">
                                    <Link to={a.id}> <img src={a.img} alt="a"/></Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <Aside footer={aside} info={info} filt={filt} setFilt={setFilt} />
            </div>
        )
    }
    return(
        <div className="contain position-relative m-auto row" style={{maxWidth:"1150px"}} >
            {info.map((a)=>{
                return(
                    <div className="col-12 my-2" style={{maxWidth:"700px"}}>
                        <div className="d-flex align-items-center">
                                <img className='m-1' style={{width:"20px", height:"20px"}} src={a.createdUser.img} alt="a"/>
                                <p className='fw-semibold m-0' style={{fontSize:"12px", }}>{afterSign && user.Name ===a.createdUser.Name? "You" : a.createdUser.Name}</p>
                        </div>
                        <div className="row">
                            <div className="col-7">
                                   <Link to={a.id}>
                                   <div className='fw-bold text-start' style={{fontSize:"21px", }}>{a.head}</div>
                                   <p className="text-start" style={{color:"#757575", fontSize:"16px"}}>{a.title}</p>
                                   </Link>
                               <div className='d-flex  align-items-center' style={{fontSize:"11px", color:"#757575"}}>
                                    <p>{a.date.month} {a.date.day}, {a.date.year==="2023" ? "": a.date.year}</p>
                                    <p className="mx-1">|</p>
                                    <p className="mx-1">{a.read}</p>
                                    <p className="mx-1">|</p>
                                    <p className="mx-1" style={{backgroundColor:"#F2F2F2", padding:"5px 10px" , borderRadius:"20px"}}>{a.category}</p>
                                    <p style={{color:"#FFC017"}}>{ a.isTrending ? <i class="fs-5 bi bi-star-fill"></i> : ""}</p>
                                    <p  onClick={()=>Btnsave(a)}> {afterSign? <i style={{color: a.save? "#FFC017": ""}} class="bi bi-bookmark-fill fs-6 ps-2"></i> : ""}</p>
                                </div>
                            </div>
                            <div className="col-5">
                               <Link to={a.id}> <img src={a.img} alt="a"/></Link>
                            </div>
                        </div>
                    </div>
                )
            })}
            <Aside footer={aside} info={info} filt={filt} setFilt={setFilt} />
        </div>
    )
}
export default main