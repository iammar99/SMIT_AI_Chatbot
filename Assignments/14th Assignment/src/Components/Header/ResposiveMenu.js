import React from 'react'
import Button from 'Components/Button/Button'

export default function ResposiveMenu(props) {


    const linkStyle = {
        "fontWeight": "700",
        "fontSize": "20px",
        "margin": "0px 15px",
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center"
    }

    const menuStyle = {
        "transition": "right 0.5s",
        "zIndex":"5",
    }

    return (
        <>
            <nav className={`resposive-menu-${props.class}`} style={menuStyle}>
                <a href="#about" style={linkStyle}>
                    <span className="numbers">01.</span>
                    <span className='links'>About</span>
                </a>
                <a href="#experience" style={linkStyle}>
                    <span className="numbers">02.</span>
                    <span className='links'>Experience</span>
                </a>
                <a href="#projects" style={linkStyle}>
                    <span className="numbers">03.</span>
                    <span className='links'>Work</span>
                </a>
                <a href="#contact" style={linkStyle}>
                    <span className="numbers">04.</span>
                    <span className='links'>Contact</span>
                </a>
                <a href="#" style={linkStyle}>
                    <span className="numbers">05.</span>
                    <span className='links'>Blog</span>
                </a>
                <Button name="CV" link="https://drive.google.com/file/d/1fgKw7H3PplIenkF-pxfqWdMAnvZcCeA0/view" />
            </nav>
        </>
    )
}
