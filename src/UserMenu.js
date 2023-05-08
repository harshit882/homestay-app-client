import React, { useCallback, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from './Avatar'
import MenuItems from './MenuItems'
import useRegisterModel from './hooks/useRegisterModel'
import useLoginModel from './hooks/useLoginModel'
const UserMenu = ({currentUser,UserMenu}) => {
  const registerModel =useRegisterModel()
  const loginModel =useLoginModel()
    const [isOpen , setIsOpen] =useState(false)
    const toggleUser =useCallback(()=>{
        setIsOpen((value)=> !value)
    },[])
    // console.log("toggled")
  return (
    <div className='relative'>
    <div className='flex flex-row item-center gap-3'>
        <div className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer' onClick={()=>{}}>
        HomeStay your Home

        </div>
        <div className='p-4 md:px-1 md:px-2 border-[1px] border-neutral-200 flex flex-row item-center gap-3 rounded-full cursor-pointer hover:shadow-md transition' onClick={toggleUser}>
            <AiOutlineMenu/>
            <div className='hidden md:block'>
           <Avatar/>

            </div>
        </div>
    </div>
      {isOpen && (
        <div className='
            absolute
            rounded-xl
            shadow-md
            
            w-[15vw]
            md: w-3/4
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
            '>
        <div className='flex flex-col cursor-pointer mx-2'>
        {/* {currentUser ?(
          <>
            <MenuItems onclick={()=>{}} label= "My trips"/>
            <MenuItems onclick={()=>{}} label= "My Favourite"/>
            <MenuItems onclick={()=>{}} label= "My properties"/>
            <MenuItems onclick={()=>{}} label= "HomeStay my home "/>
            <hr />
            <MenuItems onclick={()=>{}} label= "Logout"/>
        </>

        ):(
          <>
            <MenuItems onclick={loginModel.onOpen} label= "Login"/>
            <MenuItems onclick={registerModel.onOpen} label= "Sign Up"/>
        </>
        )} */}
        <>
            <MenuItems onclick={loginModel.onOpen} label= "Login"/>
            <MenuItems onclick={registerModel.onOpen} label= "Sign Up"/>
        </>
        

        </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu
