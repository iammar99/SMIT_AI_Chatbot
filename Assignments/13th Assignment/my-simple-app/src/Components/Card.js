import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
      <h2 className='card-heading'>
        {props.heading}
      </h2>
      <img className='card-image' src={props.img} alt="" />
      <p className="card-para">
        {props.description}
      </p>
    </div>
  )
}
