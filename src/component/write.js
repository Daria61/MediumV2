import { useState  } from "react"
import Button from "./Button"
const Write =({writeModal, setWriteModal,data ,setData, writeModalStatus, user})=>{
    console.log(writeModal);
    const dis = writeModal ?  "block": "none"
    let tit = "Save"
    const NewObj ={
        id: data.length, 
        img: require('../image/LongCovid.png'), 
        head:"",
        title:"" ,
        paragra :"",
        date:{day:"9", month:"Dec", year : "2023"}, 
        isTrending : false, 
        category:"", 
        key:"Long Covid",
        read:"9 min read",
        save: false,
        createdUser:{ Name:user.Name, userId: user.userId, img:require('../image/profile.png') ,organization :""} 
    }
    const [newData, setNewData] =useState(NewObj)
    const saveData=()=>{
        setData([...data, {...newData}])
        writeModalStatus()
    }
    return(
        <div className="modal d-flex justify-content-center" onClick={()=>writeModalStatus} style={{display:dis}}>
            <div className="writemodal-body rounded" onClick={(e)=> e.stopPropagation()}>
               <div className="closeBtn text-end" onClick={()=>setWriteModal(false)}><i class="bi bi-x-lg"></i></div>   
               <div className="">
               <input value={newData.head} onChange={(e)=>setNewData({...newData, head: e.target.value })}  className="d-block m-3 w-75 border-0 fs-1" placeholder="Head Title" style={{outline:"none"}}/>
               <input value={newData.title}  onChange={(e)=>setNewData({...newData, title: e.target.value })} className="d-block m-3 w-75 border-0 fs-3" placeholder="Title"style={{outline:"none"}} />
               <input value={newData.paragra} onChange={(e)=>setNewData({...newData, paragra:  e.target.value })}  className="d-block m-3 w-75 border-0" placeholder="Tell your story" style={{outline:"none"}}/>
               <input  value={newData.category} onChange={(e)=>setNewData({...newData, category:  e.target.value })}  className="d-block m-3 w-75 border-0" placeholder="Category" style={{outline:"none"}}/>
               </div>
               <div onClick={saveData}>
               <Button  tit={tit}/>
               </div>
            </div>
        </div>
    ) 
}
export  default Write 
// id:"1", 
//         img: require('../image/LongCovid.png'), 
//         head:"Understanding Long Covid",
//         title:"We know more now than before, and it’s still alarming" ,
//         date:{day:"9", month:"Dec", year : "2023"}, 
//         isTrending : false, 
//         category:"Writing", 
//         key:"Long Covid",
//         read:"9 min read",
//         save: false,
//         createdUser:{ Name:"Dr. Tom Frieden", userId:"1", img:require('../image/profile.png') ,organization :""} 
       