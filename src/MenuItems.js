import React from 'react'

const MenuItems = ({onclick , label}) => {
  return (
    <div>
    <div className='
        px-4
        py-3
        hover:bg=-neutral-100
        transition 
        font-semibold
    ' onClick={onclick}>
      {/* <p>i am menu items</p> */}
    </div>
    {label}
    </div>
  )
}

export default MenuItems
