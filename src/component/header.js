import Button from "./Button"
import Modal from "./modal"
import {useState} from "react"
const header =()=>{
    const [modal, setModal] = useState(false)
    let BtnTit = {tit:"Get started"} 
    const ModalStatus = ()=>{
        setModal(!modal)
    }
    return (
        <div className="row contain justify-content-between  navOne">
            <div className="col-2 py-3">
                <img src={require("../image/mediumlogo.png")} alt="a" className="w-100"/>
            </div>
            <div className="col-6 row ">
                <div className="col d-flex align-items-center justify-content-end">
                     <button className="btn mx-2 mb-0">Our Story</button>
                     <button className="btn mx-2 mb-0">Membership</button>
                     <button className="btn mx-2 mb-0">Write</button>
                     <button className="btn mx-2 mb-0" onClick={ModalStatus}>Sign in </button>
                </div>
                 <div className="col-3 d-flex align-items-center">
                    <Button {...BtnTit}/> 
                </div>
            </div>
            <div>
                {modal && (<Modal ModalStatus = {ModalStatus} modal={modal}/>)}
            </div>
        </div>
    )
}
export default header