import React from 'react'

export default function Input(props) {
    return (
        <>
            <div>
                <div className="wave-group">
                    <input
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        className="input"
                        required
                        type={props.type}
                        name={props.name}
                        value={props.value}
                    />
                    <span className="bar" />
                    <label className="label">
                        <span
                            className="label-char"
                            style={{
                                '--index': '0'
                            }}
                        >
                            {props.first}
                        </span>
                        <span
                            className="label-char"
                            style={{
                                '--index': '1'
                            }}
                        >
                            {props.second}
                        </span>
                        <span
                            className="label-char"
                            style={{
                                '--index': '2'
                            }}
                        >
                            {props.third}
                        </span>
                        <span
                            className="label-char"
                            style={{
                                '--index': '3'
                            }}
                        >
                            {props.fourth}
                        </span>
                        <span
                            className="label-char"
                            style={{
                                '--index': '4'
                            }}
                        >
                            {props.fivth}
                        </span>
                        <span
                            className="label-char"
                            style={{
                                '--index': '5'
                            }}
                        >
                            {props.sixth}
                        </span>
                        <span
                            className="label-char"
                            style={{
                                '--index': '5'
                            }}
                        >
                            {props.seventh}
                        </span>
                        <span
                            className="label-char"
                            style={{
                                '--index': '5'
                            }}
                        >
                            {props.eigth}
                        </span>
                    </label>
                </div>
            </div>
        </>
    )
}
