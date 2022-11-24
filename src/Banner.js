import React ,{useState} from 'react'
import './Banner.css'
// import {Button} from 
import Button from '@mui/material/Button'
function Banner() {
    const [showSearch , setShowSearch] =useState(false)
  return (
    <div className='banner'>
    <div className="banner__search">
    {showSearch && <h1>show date picker</h1>}
        <Button variant ="outlined" className='banner__searchButton' onClick={()=>{setShowSearch(!showSearch)}}>Search Dates</Button>
    </div>
      {/* <h1>hello i am banner</h1> */}
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>plan a different kind of gateway to uncover the hidden gems near you.</h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  )
}

export default Banner
