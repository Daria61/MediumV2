const main =({info})=>{
    return(
        <div>
            {info.map((a)=>{
                return(
                    <div className="contain">
                        <div className="d-flex align-items-center">
                            <img className='m-1' style={{width:"20px", height:"20px"}} src={a.createdUser.img} alt="a"/>
                            <p className='fw-semibold m-0' style={{fontSize:"12px", }}>{a.createdUser.Name}</p>
                        </div>
                        <div className="row">
                            <div className="col-4">
                               <div className='fw-bold text-start' style={{fontSize:"21px", }}>{a.head}</div>
                               <p className="text-start" style={{color:"#757575", fontSize:"16px"}}>{a.title}</p>
                               <div className='d-flex  align-items-center' style={{fontSize:"11px", color:"#757575"}}>
                               <p>{a.date.month} {a.date.day}, {a.date.year=="2023" ? "": a.date.year}</p>
                                    <p className="mx-1">|</p>
                                    <p className="mx-1">{a.read}</p>
                                    <p className="mx-1">|</p>
                                    <p className="mx-1" style={{backgroundColor:"#F2F2F2", padding:"5px 10px" , borderRadius:"20px"}}>{a.key}</p>
                                    <p style={{color:"#FFC017"}}>{ a.isTrending ? <i class="fs-5 bi bi-star-fill"></i> : ""}</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <img src={a.img} alt="a"/>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default main