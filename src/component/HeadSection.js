import Button from "./Button"
const HeadSection =({HeadTit,Tit,Btn,signstatus})=>{
    if(!signstatus){
        return(
            <div className="headerBgColor row text-start " style={{paddingLeft:"50px",paddingTop:"70px", borderBottom:"1px solid black"}}>
                <div className="col-7 " style={{padding:"50px 0 140px"}}>
                    <h1 style={{fontSize:"106px"}}>{HeadTit}</h1>
                    <p style={{fontSize:"24px", width:"60%"} }>{Tit}</p>
                    <Button tit ={Btn}/>
                </div>
                <div className="col-5  " >
                    <img  src={require("../image/svg.png")} alt="a" className="position-absolute end-0 "/>
                </div>
            </div>
        )
    }
    }
    
export default HeadSection