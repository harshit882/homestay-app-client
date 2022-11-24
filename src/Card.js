import React from 'react'
import './Card.css'
function Card(props) {
  return (
    <div className='card'>
      {/* <h4>i am a resuable card </h4> */}
      <img src={props.src} alt="" />
      <div className="card__info">
        <h2>{props.title}</h2>
        <h4>{props.description}</h4>
      </div>

    </div>
  )
}

export default Card
