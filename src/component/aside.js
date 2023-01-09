const aside =({footer ,info})=>{
    let category =[]
    info.map((a)=>{
        if(!category.includes(a.category)){
            category.push(a.category)
        }
    })
    console.log(category);
    return(
           <div className="col-4 pe-5 position-absolute top-0 end-0  " >
                <div>
                    <p  className="text-start" style={{fontSize:"16px", fontWeight:"bold"}}>DISCOVER MORE OF WHAT MATTERS TO YOU</p>
                </div>
                <div className="d-flex flex-wrap align-items-center mb-3">
                    {category.map((a)=>{
                        return(
                            <div className="border d-flex  align-items-center rounded-1 m-1" style={{padding:"6px 12px" }}><a style={{fontSize:"12px", color:"#757575", textDecoration:"none"}}  href="a" >{a}</a></div>
                        )
                    })}
                </div>
                <div className="border-top pt-2 d-flex flex-wrap ">
                    {footer.map((a)=>{
                        return(
                            <a style={{fontSize:"14px", color:"#757575", padding:"5px 10px", textDecoration:"none"}}  href="a" >{a}</a>
                        )
                    })}
                </div>
            </div> 
    )
}
export default aside 