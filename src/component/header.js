import Button from "./Button"
import Modal from "./modal"
import {useState} from "react"
import SignHeader from '../componentTwo/Header'
const Header =({afterSign, setAfterSign, data ,setData, user, filt, setFilt, headColor, setHeadColor})=>{
    
    const [modal, setModal] = useState(false)
    const [scroll, setScroll] = useState(false)
    let BtnTit = {tit:"Get started"} 
    const ModalStatus = ()=>{
        setModal(!modal)
    }
    const refresh=()=>{
        setFilt({...filt, filtStatus: false, filtCategory: ""})
    }
    if(afterSign){
        return(
            <SignHeader afterSign={afterSign}  setAfterSign={setAfterSign}  data={data} setData={setData} user={user} refresh={refresh}/>
        )
    }
    let color = headColor
    const changeColor =()=>{
        if(window.scrollY > 500){
            setScroll(true)
        }else{
            setScroll(false)
        }
    }
    setHeadColor(scroll? 'white': '#FFC017')
    window.addEventListener("scroll", changeColor)
    return (
        <div className="row contain justify-content-between  navOne" style={{backgroundColor:color}}  >
            <div className="col-2 py-3">
               <a href="/"> <img src={require("../image/mediumlogo.png")} alt="a" className="w-100" onClick={refresh}/></a>
            </div>
            <div className="col-6 row d-flex  flex-nowrap">
                <div className="col d-flex align-items-center justify-content-end">
                     <button className="btn mx-2 mb-0"><a href="/ourstory">Our Story</a></button>
                     <button className="btn mx-2 mb-0"><a href="/membership">Membership</a></button>
                     <button className="btn mx-2 mb-0"><a href="/write">Write</a></button>
                     <button className="btn mx-2 mb-0" onClick={ModalStatus}>Sign in </button>
                </div>
                 <div className="col-3 d-flex align-items-center">
                    <button className="btn btn-dark rounded-5" onClick={ModalStatus}>Get started</button>
                </div>
            </div>
            <div>
                {modal && (<Modal ModalStatus = {ModalStatus} modal={modal} afterSign={afterSign}  setAfterSign={setAfterSign} user={user}/>)}
            </div>
        </div>
    )
}
export default Header