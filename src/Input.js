import React from 'react'
import { FieldError,FieldValues, UseFormRegister } from 'react-hook-form'
import { BiDollar } from 'react-icons/bi'
const Input = ({
    id ,
    label,
    type ='text',
    disabled,
    formatPrice,
    register,
    required,
    errors
}) => {

  return (
    <div className='w-full relative'>
    {formatPrice && (
        <BiDollar size={24} className='text-neutral-700 absolute top-5 left-2'/>
    )}
  
    <input id={id} disabled={disabled} {...register(id,{required})}
    placeholder=' ' type={type}
     className={`
     peer
     w-full
     p-4
     pt-6
     font-light
     border-2
     bg-white
     rounded-md
     outline-none
     transition
     disabled:opacity-70
     disabled:cursor-not-allowed
     ${formatPrice ?'pl-9':'pl-4'}
     ${errors[id] ?'border-rose-500':'border-neutral-300'}
     ${errors[id] ?'focus:border-rose-500':'focus:border-black'}
    `}>
    </input>
    <label className={`
        absolute
        top-4 left-4
        text-md
        transform
        duration-200
        -translate-y-10
        ${formatPrice ? 'left-9':'left-4'}
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-85 
        peer-focus:-translate-y-7 bg-white pl-2 pr-2 text-black-500
        
        ${errors[id] ? 'text-rose-500':'text-zinc-400'}
    `}>
        {label}
    </label>
    
      
    </div>
  )
}

export default Input
