import React from 'react'
import { Link } from 'react-router-dom'

export default function ExperinceHeading(props) {
    return (
        <>
            <div className="experince_desc_heading">
                {props.heading}<Link to={props.url}>{props.link}</Link>
            </div>
            <div className="experince_desc_duration">
                {props.date}
            </div>
        </>
    )
}
