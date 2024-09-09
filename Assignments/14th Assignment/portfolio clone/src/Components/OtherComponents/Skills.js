import React from 'react'
import Arrow from './Arrow'

export default function Skills(props) {
    return (
        <div className="skills">
            <span className='arrow'>
                <Arrow />
            </span>
            <span>
                {props.name}
            </span>
        </div>
    )
}
