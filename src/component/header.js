import Button from "./Button"
import Modal from "./modal"
import {useState} from "react"
import SignHeader from '../componentTwo/Header'
const Header =({afterSign, setAfterSign, data ,setData, user})=>{
    const [modal, setModal] = useState(false)
    const [scroll, setScroll] = useState(false)
    let BtnTit = {tit:"Get started"} 
    const ModalStatus = ()=>{
        setModal(!modal)
    }
    if(afterSign){
        return(
            <SignHeader afterSign={afterSign}  setAfterSign={setAfterSign}  data={data} setData={setData} user={user}/>
        )
    }
    const changeColor =()=>{
        if(window.scrollY > 500){
            setScroll(true)
        }else{
            setScroll(false)
        }
    }
    window.addEventListener("scroll", changeColor)
    return (
        <div className="row contain justify-content-between  navOne" style={scroll? {backgroundColor:"white"}:  {backgroundColor:"#FFC017"} }  >
            <div className="col-2 py-3">
                <img src={require("../image/mediumlogo.png")} alt="a" className="w-100"/>
            </div>
            <div className="col-6 row d-flex  flex-nowrap">
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
                {modal && (<Modal ModalStatus = {ModalStatus} modal={modal} afterSign={afterSign}  setAfterSign={setAfterSign} user={user}/>)}
            </div>
        </div>
    )
}
export default Header