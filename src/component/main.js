import Aside from "./aside"
const main =({info, aside, afterSign , setFilt, filt, setAfterSign } )=>{
    const Btnsave=()=>{
        setAfterSign({...afterSign , save: !afterSign.save})
    }
    if(filt.filtStatus){
        let bb = info.filter(a=> a.category === filt.filtCategory)
        return(
            <div className="contain position-relative m-auto row" style={{maxWidth:"1150px"}} >
                {bb.map((a)=>{
                    return(
                        <div className="col-12 my-2" style={{maxWidth:"700px"}}>
                            <div className="d-flex align-items-center">
                                    <img className='m-1' style={{width:"20px", height:"20px"}} src={a.createdUser.img} alt="a"/>
                                    <p className='fw-semibold m-0' style={{fontSize:"12px", }}>{a.createdUser.Name}</p>
                                </div>
                                <div className="row">
                                    <div className="col-7">
                                       <div className='fw-bold text-start' style={{fontSize:"21px", }}>{a.head}</div>
                                       <p className="text-start" style={{color:"#757575", fontSize:"16px"}}>{a.title}</p>
                                       <div className='d-flex  align-items-center' style={{fontSize:"11px", color:"#757575"}}>
                                       <p>{a.date.month} {a.date.day}, {a.date.year==="2023" ? "": a.date.year}</p>
                                            <p className="mx-1">|</p>
                                            <p className="mx-1">{a.read}</p>
                                            <p className="mx-1">|</p>
                                            <p className="mx-1" style={{backgroundColor:"#F2F2F2", padding:"5px 10px" , borderRadius:"20px"}}>{a.key}</p>
                                            <p style={{color:"#FFC017"}}>{ a.isTrending ? <i class="fs-5 bi bi-star-fill"></i> : ""}</p>
                                            <p  onClick={()=>Btnsave(a)}> {afterSign.signstatus? <i class="bi bi-bookmark-fill"></i> : ""}</p>
                                           
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <img src={a.img} alt="a"/>
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
                                <p className='fw-semibold m-0' style={{fontSize:"12px", }}>{a.createdUser.Name}</p>
                            </div>
                            <div className="row">
                                <div className="col-7">
                                   <div className='fw-bold text-start' style={{fontSize:"21px", }}>{a.head}</div>
                                   <p className="text-start" style={{color:"#757575", fontSize:"16px"}}>{a.title}</p>
                                   <div className='d-flex  align-items-center' style={{fontSize:"11px", color:"#757575"}}>
                                   <p>{a.date.month} {a.date.day}, {a.date.year==="2023" ? "": a.date.year}</p>
                                        <p className="mx-1">|</p>
                                        <p className="mx-1">{a.read}</p>
                                        <p className="mx-1">|</p>
                                        <p className="mx-1" style={{backgroundColor:"#F2F2F2", padding:"5px 10px" , borderRadius:"20px"}}>{a.key}</p>
                                        <p style={{color:"#FFC017"}}>{ a.isTrending ? <i class="fs-5 bi bi-star-fill"></i> : ""}</p>
                                        {afterSign.signstatus? <i class="bi bi-bookmark mb-3 ms-2 fs-6"></i> : ""}
                                    </div>
                                </div>
                                <div className="col-5">
                                    <img src={a.img} alt="a"/>
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