import {  createContext, useContext } from "react";
let AppContext= createContext()
const AppProvider =({children})=>{
    return(
        <AppContext.Provider value={'something'}>{children}</AppContext.Provider>
    );
 
}
let useGlobalContext =()=>{
    return useContext(AppContext)
}
export {AppContext ,AppProvider, useGlobalContext}
