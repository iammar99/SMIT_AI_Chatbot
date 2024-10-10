import React from 'react'
import Ratings from "../OtherComponents/Ratings"

export default function CardComponents(props) {
    return (
        <div className="card mx-auto">
            <div className="image_container">
                <img src={props.img} alt="" style={{ "width": "-webkit-fill-available", "height": "-webkit-fill-available" }} />
            </div>
            <div className="title  mt-3">
                <span className='sliding-text'>
                    {props.name}
                </span>
            </div>
            <div className="flex flex-column justify-content-between">
                {/* <Ratings /> */}
                <div className="rating" style={{ "color": "white", "fontWeight": "400" }}>
                    <b className='me-2'>{props.rating}</b>
                    <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                        style={{"color":"yellow"}}
                    >
                        <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                    </svg>
                    <br />
                    ({props.users})
                </div>
                <div className="action mt-3">
                    <div className="price">
                        <span>
                            ${props.price}
                        </span>
                    </div>
                    <button className="cart-button" onClick={props.onClick}>
                        <svg
                            className="cart-icon"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span>
                            Add to cart
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
