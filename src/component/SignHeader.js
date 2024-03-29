import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Write from './Write'
import { useContext } from 'react'
import { Data } from '../context/create.context'
import { Sign } from '../context/create.context'

const SignHeader =({user, refresh})=>{
    const [writeModal, setWriteModal] = useState(false)
    const [play, setPlay]=useState(false)

    const {afterSign} = useContext(Sign)
    const {data, setData} = useContext(Data)

    const writeModalStatus=()=>{
        setWriteModal(!writeModal)
    }

    const showProfile=()=>{
        setPlay(!play)
    }
    
    const dis = play? "block":"none"
    if(afterSign){
        return(
            <div className="row justify-content-between p-2 border-bottom " style={{fontSize:"14px"}}>
                <div>
                    {writeModal && (<Write writeModal={writeModal} setWriteModal={setWriteModal}  data={data} setData={setData} writeModalStatus={writeModalStatus} user={user}/>)}
                </div>
                <div className="col-4 d-flex  align-items-center">
                    <img src={require('../imageTwo/Vector.png')} alt="a" className='p-2 me-3' onClick={refresh}/>
                    <div style={{backgroundColor:"#F5F2F6", borderRadius:"20px", padding:"5px 12px", display:"flex"}}>
                        <i class="bi bi-search"></i>
                        <input className='border-0' placeholder='Search Medium' type="text" style={{backgroundColor:" #F5F2F6", outline:"none"}}/>
                    </div>
                </div>
                <div className="col-8 col-md-3 row align-items-center m-0 justify-content-around">
                    <div className='col-3 col-md-3 d-flex' style={{color:"#706E72"}}>
                        <i class="bi bi-pencil-square"></i>
                        <p className='px-1 m-0' onClick={()=>setWriteModal(true)}>Write</p>
                    </div>
                    <NavLink to='/admin' className='btn btn-outline-dark col-3'>Admin</NavLink>
                    <div className='col-3 col-md-3'>
                        <i class="bi bi-bell"></i>
                    </div>
                    <div className='col-3 col-md-3 d-flex align-items-center' onClick={showProfile}>
                        <img src={require('../image/profile.png')} alt="a" style={{width:"30px", height:"30px"}}/>
                        <i class="bi bi-chevron-down ms-1"></i>
                    </div>
                </div>
                <div style={{display: dis}} className="profileCon" >
                    <div className='profile p-3'>
                        <div className='row pb-3'>
                            <img src={user.img} alt="profile" className='col-5' style={{width:"75px" ,height:"55px"}}/>
                            <div className='col-7 pt-2'>
                                <p className='fw-semibold m-0'>{user.Name}</p>
                                <p className='m-0'>{user.mail}</p>
                            </div>
                        </div>
                        <div className='border-top text-start pt-3'>
                            <p onClick={writeModalStatus}>Write a story</p>
                            <p>Stories list</p>
                            <p>Settings</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SignHeader