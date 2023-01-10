const Modal =({modal, ModalStatus})=>{
    const dis = modal? "block":"none"
    return(
        <div className="modal" onClick={ModalStatus} style={{display:dis}}>
            <div className="modal-body" onClick={(e)=> e.stopPropagation()}>
                <div className="closeBtn" onClick={ModalStatus}><i class="bi bi-x-lg"></i></div>
                <h1>Welcome</h1>
                <div>
                    <div className="btn border rounded-1"><i class="bi bi-facebook"></i>Sign in with Google</div>
                    <div className="btn border rounded-1"><i class="bi bi-facebook"></i>Sign in with Facebook</div>
                    <div className="btn border rounded-1"><i class="bi bi-facebook"></i>Sign in with Apple</div>
                    <div className="btn border rounded-1"><i class="bi bi-facebook"></i>Sign in with Twitter</div>
                    <div className="btn border rounded-1"><i class="bi bi-facebook"></i>Sign in with email</div>
                </div>
                <div>No account? <p style={{color:"green"}}>Create one</p></div>
                <div>Forget email or trouble signing in? <a href="s" style={{color:"#ccc"}} >Get help</a></div>
                <div>Click "Sign in" to agree to Medium's <a href="a.mn" style={{color:"#ccc"}} >Terms of Service</a> and ackknowledge that Medium's <a href="a.mn" style={{color:"#ccc"}} >Privacy Policy</a> applies to you.</div>
            </div>
        </div>
    )
}
export default Modal