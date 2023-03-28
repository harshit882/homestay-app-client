import { FavoriteBorderOutlined, Star } from '@mui/icons-material'
import React from 'react'
import './searchResult.css'
// import {  FavoriteBorder } from '@mui/icons-material'
function SearchResult({
  img, description ,location,title,star ,price, total
}) {
  return (
    <div className='searchResult'>
      <img src={img} alt="" />
      <FavoriteBorderOutlined className='searchResult__heart'/>
      <div className="searchResult__info">
      <div className="searchResult__infoTop">
      <p>{location}</p>
      <h3>{title}</h3>
      <p>_____</p>
      <p>{description}</p>
      </div>
      <div className="searchResult__infoBottom">
      <div className="searchResult__stars">
      <Star className='searchResult__star'/>
      <strong>{star}</strong>
      </div>
      <div className="searchResult__price">
      <h2>{price}</h2>
      <p> {total}</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default SearchResult
