import { create } from "zustand"; 
const useRegisterModel =create((set)=>({
    onOpen : ()=>set({isOpen :true}),
    onClose : ()=>set({isOpen :false})
}))
export default useRegisterModel;