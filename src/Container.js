import React from 'react'
// 'use-client';
const Container = ({children}) => {
  return (
    <div 
    className='
    max-w-[2520px]
    mx-auto
    xl:p-2
    md:p-2
    sm:px-2
    px-4
    '>
    {children}
      
    </div>
  )
}

export default Container
