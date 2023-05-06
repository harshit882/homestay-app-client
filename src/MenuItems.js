import React from 'react'

const MenuItems = ({onclick , label}) => {
  return (
    <>
    <div className='
        px-4
        py-3
        hover:bg=-neutral-100
        transition 
        font-semibold
    ' onClick={onclick}>
    {label}
      {/* <p>i am menu items</p> */}
    </div>
    
    </>
  )
}

export default MenuItems
