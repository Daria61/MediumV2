const Header =({signstatus})=>{
    console.log(signstatus);
    if(signstatus){
        return(
            <div className="row justify-content-between p-2 border-bottom " style={{fontSize:"14px"}}>
                <div className="col-3 d-flex  align-items-center">
                    <img src={require('../imageTwo/Vector.png')} alt="a" className='p-2 me-3'/>
                    <div style={{backgroundColor:"#F5F2F6", borderRadius:"20px", padding:"5px 12px"}}>
                        <i class="bi bi-search"></i>
                        <input className='border-0' placeholder='Search Medium' type="text" style={{backgroundColor:" #F5F2F6"}}/>
                    </div>
                </div>
                <div className="col-3 row align-items-center m-0 justify-content-end">
                    <div className='col-2 d-flex' style={{color:"#706E72"}}>
                        <i class="bi bi-pencil-square"></i>
                        <p className='px-1 m-0'>Write</p>
                    </div>
                    <div className='col-2'>
                    <i class="bi bi-bell"></i>
                    </div>
                    <div className='col-2 d-flex align-items-center'>
                        <img src={require('../image/profile.png')} alt="a" className='w-100'/>
                        <i class="bi bi-chevron-down ms-1"></i>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header