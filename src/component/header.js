
import Modal from "./Modal"
import {useEffect, useState} from "react"
import SignHeader from './SignHeader'
import { useContext } from "react"
import { Sign } from "../context/create.context"
import { HeaderColor } from "../context/create.context"


const Header =({ filt, setFilt})=>{
    const user = {mail : "", pas : 9988 , Name: "Ch. Erdenedari", userId:"abc", img:require("../image/profile.png") }
    const {afterSign} = useContext(Sign)
    const {headColor, setHeadColor} = useContext(HeaderColor)

    const [modal, setModal] = useState(false)
    const [scroll, setScroll] = useState(false)
    

    const ModalStatus = ()=>{
        setModal(!modal)
    }

    const refresh=()=>{
        setFilt({...filt, filtStatus: false, filtCategory: ""})
    }

    const changeColor =()=>{
        if(window.scrollY > 500){
            setScroll(true)
        }else{
            setScroll(false)
        }
    }
    
    useEffect(()=>{setHeadColor(scroll? 'white': '#FFC017')},[ scroll])
     //#FFC017
    window.addEventListener("scroll", changeColor)

    if(afterSign){
        return(
            <SignHeader  user={user} refresh={refresh} />
        )
    }else{
    return (
        <div className="row contain justify-content-between  navOne" style={{backgroundColor:headColor}}  >
            <div className="col-2 py-1">
                <img src={require("../image/mediumlogo.png")} alt="a" className="w-100" onClick={refresh}/>
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
                {modal && (<Modal ModalStatus = {ModalStatus} modal={modal}  user={user}/>)}
            </div>
        </div>
    )
    }
}
export default Header