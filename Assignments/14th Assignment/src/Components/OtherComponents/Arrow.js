import React from 'react'

export default function Arrow(props) {
    return (
        <>
            <svg
            className='arrow'
                viewBox="0 0 24 24"
                fill="currentColor"
                height={props.height || "1em"}
                width={props.width || "1em"}
            >
                <path d="M4 6h2v12H4zm10 5H8v2h6v5l6-6-6-6z" />
            </svg>
        </>
    )
}
