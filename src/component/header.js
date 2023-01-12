import Button from "./Button"
import Modal from "./modal"
import {useState} from "react"
import SignHeader from '../componentTwo/Header'
const Header =({signstatus, setSignstatus})=>{
    const [modal, setModal] = useState(false)
    const [scroll, setScroll] = useState(false)
    let BtnTit = {tit:"Get started"} 
    const ModalStatus = ()=>{
        setModal(!modal)
    }
    if(signstatus){
        return(
            <SignHeader signstatus={signstatus}  setSignstatus={setSignstatus}/>
        )
    }
    const changeColor =()=>{
        if(window.scrollY > 600){
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
                {modal && (<Modal ModalStatus = {ModalStatus} modal={modal} signstatus={signstatus}  setSignstatus={setSignstatus}/>)}
            </div>
        </div>
    )
}
export default Header