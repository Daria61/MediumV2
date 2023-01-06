const Button =({tit})=>{
    let BtnStyle = {border:"0", borderRadius:"20px", padding :"8px 12px", color:"white", backgroundColor:"black "}
    return (
        <button style={BtnStyle}>{tit}</button>
    )
}
export default Button