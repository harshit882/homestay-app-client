import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Navigate, useParams } from 'react-router-dom'
import { Link } from "react-router-dom";

const Account = () => {
    const {user,ready} =useContext(UserContext)
    const {subpage} =useParams()
    // console.log(subpage)
    if( user===null){
        // debugger
        return  <Navigate to={'/'}/>
       
        // loginModel.onOpen()
    }
    function linkClass(type=null) {
        let classes ='py-2 px-6'
        if(type === subpage || (subpage === undefined && type === 'profile')) {
            classes += " bg-red-400 text-white rounded-full"
        }
        return classes
    }

  return (
    
 <div className='w-full flex mt-8 justify-center gap-4'>
    <Link to ={'/account'} className={linkClass('profile')}>My profile</Link>
    <Link to ={'/account/bookings'} className={linkClass('bookings')}>My bookings</Link>
    <Link to ={'/account/accommodation'} className={linkClass('accommodation')}>My accommodation</Link>
   
     </div>
  
     
     
    
  )
}

export default Account