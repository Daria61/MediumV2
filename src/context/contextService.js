import { Sign } from "./create.context";
import { Data } from "./create.context";
import { HeaderColor } from "./create.context";

const ContextService = ({children, afterSign ,setAfterSign, data, setData, headColor, setHeadColor})=>{
    return(
        <HeaderColor.Provider value={{headColor, setHeadColor}}>
        <Data.Provider value={{data, setData}}>
        <Sign.Provider value={{afterSign ,setAfterSign}} >
            {children}
        </Sign.Provider>
        </Data.Provider>
        </HeaderColor.Provider>
    )
}

export default ContextService