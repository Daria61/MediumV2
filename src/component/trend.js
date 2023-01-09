const trend =({info})=>{
    let trendarr =[]
    info.map((a)=>{
        if(a.isTrending === true){
            trendarr.push(a)
        }
    })
    return(
        <div style={{padding:"50px", marginBottom:"50px"}} className="border-bottom ">
            <div className="d-flex">
                <img src={require('../image/Frame.png')} alt="s" style={{width:"30px", height:"30px"}}/>
                <p>TRENDING ON MEDIUM </p>
            </div>
            <div className='row'>
                {trendarr.map((a, Index)=>{
                    if( Index < 6 && a.isTrending === true){
                        return(
                            <div className='d-flex col-4'>
                                <div className='trendIndex'>0{Index+1}</div>
                                <div>
                                    <div className='d-flex align-items-center'>
                                        <img className='m-1' style={{width:"20px", height:"20px"}} src={a.createdUser.img} alt="a"/>
                                        <div className='d-flex'>
                                        <p className='fw-semibold m-0' style={{fontSize:"12px", }}>{a.createdUser.Name} </p>
                                        <p>{}</p>
                                        <p className='fw-semibold m-0 px-1' style={{fontSize:"12px",color:"#757575" }}> {a.createdUser.organization ? "in" : ""}</p>
                                        <p className='fw-semibold m-0 px-1' style={{fontSize:"12px", }}> {a.createdUser.organization ? a.createdUser.organization : ""}</p>
                                        </div>
                                        
                                    </div>
                                    <div className='fw-bold text-start'>{a.head}</div>
                                    <div className='d-flex' style={{fontSize:"11px", color:"#757575"}}> 
                                        <p>{a.date.month} {a.date.day}, {a.date.year==="2023" ? "": a.date.year}</p>
                                        <p className='px-2'>|</p>
                                        <p>{a.read}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    } 
                })
                }
            </div>
        </div>
    )
}
export default trend