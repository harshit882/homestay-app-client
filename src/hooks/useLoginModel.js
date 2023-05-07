import { create } from "zustand"; 
const useLoginModel =create((set)=>({
    isOpen:false,
    onOpen : ()=>set({isOpen :true}),
    onClose : ()=>set({isOpen :false})
}))
export default useLoginModel;