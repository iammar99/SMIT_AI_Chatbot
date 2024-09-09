import React from 'react'
import { Link } from 'react-router-dom'

export default function Button(props) {
  return (
    <button  style={{padding:props.padding,margin:props.margin,borderColor:props.border,display:props.display}} onClick={props.handleClick}>
        <Link to={props.link}>{props.name}</Link>
    </button>
  )
}
