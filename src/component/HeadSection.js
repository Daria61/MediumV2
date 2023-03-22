import Button from "./Button"
import { useContext } from "react"
import { Sign } from "../context/create.context"
const HeadSection =()=>{
    const {afterSign} = useContext(Sign)
  
    if(!afterSign){
        return(
            <div className="headerBgColor row text-start " style={{paddingLeft:"50px",paddingTop:"70px", borderBottom:"1px solid black"}}>
                <div className="col-7 " style={{padding:"50px 0 140px"}}>
                    <h1 style={{fontSize:"106px"}}>"Stay curious."</h1>
                    <p style={{fontSize:"24px", width:"60%"} }>"Discover stories, thinking, and expertise from writers on any topic."</p>
                    <Button tit ={"Start reading"}/>
                </div>
                <div className="col-5  " >
                    <img  src={require("../image/svg.png")} alt="a" className="position-absolute end-0 "/>
                </div>
            </div>
        )
    }
    }
    
export default HeadSection