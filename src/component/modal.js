import { useState } from 'react'
const Modal =({modal, ModalStatus , afterSign, setAfterSign  })=>{
    const user = {mail : "ch.d@gmail.com", pas : 9988}
    const dis = modal? "block":"none";
    const [mail ,setMail] = useState("")
    const [ sign, setSign] = useState(false)
    const signMail =()=>{
        setSign(true)
    }
    const checkMail =()=>{
        if(mail=== user.mail){
            setAfterSign({...afterSign , signstatus: true})
        }
    }
    if(sign){
        return(
            <div className="modal d-flex justify-content-center" onClick={ModalStatus} style={{display:dis}}>
               <div className="modal-body rounded" onClick={(e)=> e.stopPropagation()}>
               <div className="closeBtn text-end" onClick={ModalStatus}><i class="bi bi-x-lg"></i></div>
               <div className='mt-5'>
                   <h3>Sign in with email</h3>
                   <p style={{fontSize:"14px", width:"400px", margin:"auto"}} >Enter the email address associated with your account, and we’ll send a magic link to your inbox.</p>
               </div>
               <div className='my-5'>
                    <p>Your email</p>
                    <input className='border-0 border-bottom form-contol' type="text" value={mail} onChange={(e) =>{setMail(e.target.value)}}/>
               </div>
               <button style={{border:"0", borderRadius:"20px", padding :"8px 80px", color:"white", backgroundColor:"black "}} onClick={checkMail}>Continue</button>
               <div className='d-flex mt-4 justify-content-around' style={{color:"green"}} onClick={signMail}>
                   <div className='d-flex'><i class="bi bi-chevron-left "></i>
                   <p className='text-center'>All sign in options</p>
                   </div>
                   
               </div>
            </div>
            </div>
        )
    }
    return(
        <div className="modal d-flex justify-content-center" onClick={ModalStatus} style={{display:dis}}>
            <div className="modal-body rounded" onClick={(e)=> e.stopPropagation()}>
                <div className="closeBtn text-end" onClick={ModalStatus}><i class="bi bi-x-lg"></i></div>
                <h1 className='pb-5'>Welcome</h1>
                <div className='d-block'>
                    <div className=" m-2 d-flex  justify-content-around">
                        <div  className="btn border rounded-5 d-flex  align-items-center " style={{width:"220px"}}>
                            <img style={{width:"15px", height:"15px"}} src={require('../image/Google.png')} alt="a"/>
                            <p className='m-0 ps-2 '>Sign in with Google</p>
                        </div>
                    </div>
                    <div className=" m-2 d-flex  justify-content-around">
                        <div  className="btn border rounded-5 d-flex  align-items-center "  style={{width:"220px"}}>
                            <img style={{width:"15px", height:"15px"}} src={require('../image/fb.png')} alt="a"/>
                            <p className='m-0 ps-2 '>Sign in with Facebook</p>
                        </div>
                    </div>

                    <div className=" m-2 d-flex  justify-content-around">
                        <div  className="btn border rounded-5 d-flex  align-items-center "  style={{width:"220px"}}>
                            <img style={{width:"15px", height:"15px"}} src={require('../image/apple.png')} alt="a"/>
                            <p className='m-0 ps-2 '>Sign in with Apple</p>
                        </div>
                    </div>
                    <div className=" m-2 d-flex  justify-content-around">
                        <div  className="btn border rounded-5 d-flex  align-items-center "  style={{width:"220px"}}>
                            <img style={{width:"15px", height:"15px"}} src={require('../image/twitter.png')} alt="a"/>
                            <p className='m-0 ps-2 '>Sign in with Twitter</p>
                        </div>
                    </div>
                    <div className=" m-2 d-flex  justify-content-around">
                        <div  className="btn border rounded-5 d-flex  align-items-center "  style={{width:"220px"}} onClick={signMail} >
                        <i class="bi bi-envelope"></i>
                            <p className='m-0 ps-2'>Sign in with email</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center my-5">No account? <a href="s" style={{color:"green", textDecoration:"none", fontWeight:"900" }}>Create one</a></div>
                <div className="my-4">Forget email or trouble signing in? <a href="s" style={{color:"#ccc"}} >Get help</a></div>
                <div className="d-flex justify-content-around"><div className='w-75'>Click "Sign in" to agree to Medium's <a href="a.mn" style={{color:"#ccc"}} >Terms of Service</a> and ackknowledge that Medium's <a href="a.mn" style={{color:"#ccc"}} >Privacy Policy</a> applies to you.</div></div>
            </div>
        </div>
    )
}
export default Modal