import React from 'react'

export default function SectionHeading(props) {
    return (
        <div className="conatiner">
            <div className={`component-heading flex-${props.direction || "row"}`} style={props.style}>
                <span className='component_heading_number'>
                    {props.number}
                </span>
                <h1 className="component_heading">
                    {props.name}
                </h1>
                <div className={`d-${props.display || "block"} component_heading_line`}></div>
            </div>
        </div>
    )
}
