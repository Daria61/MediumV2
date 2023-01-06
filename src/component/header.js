import Button from "./Button"
const header =({tit})=>{
    let BtnTit = {tit:"Get started"} 
    return (
        <div className="row contain justify-content-between headerBgColor navOne">
            <div className="col-2 py-3">
                <img src={require("../image/mediumlogo.png")} alt="a" className="w-100"/>
            </div>
            <div className="col-6 row ">
                <div className="col d-flex align-items-center justify-content-end">
                {   tit.map((a)=>{
                    return <p className="mx-2 mb-0 ">{a}</p>
                    })
                }
                </div>
                 <div className="col-3 d-flex align-items-center">
                    <Button {...BtnTit}/> 
                </div>
            </div>
        </div>
    )
}
export default header