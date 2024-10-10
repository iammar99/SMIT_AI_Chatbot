import React, { useState , useRef } from 'react'
import logo from "../../Assets/navbar-logo.png"
import Button from 'Components/Button/Button'
import ResposiveMenu from './ResposiveMenu'


export default function TopNav() {

  const [display, setDisplay] = useState(false)
  const checkboxRef = useRef(null);

  // For reponsiveness

  const handleMenu = () => {
    setDisplay(!display)
  }

  function handleScroll() {
    setDisplay(false)
    if (checkboxRef.current && checkboxRef.current.checked) {
      checkboxRef.current.checked = false;
    }
  }

  window.addEventListener('scroll', handleScroll);


  const logoImg = {
    "width": "51px"
  }

  const linkStyle = {
    "fontWeight": "700",
    "fontSize": "14px",
    "margin": "0px 15px"
  }




  return (
    <header>
      <img src={logo} style={logoImg} alt="" />
      <nav>
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
      {/* Menu button */}
      <div className='toogle-menu'>
        <input
          onClickCapture={handleMenu}
          ref={checkboxRef}
          id="checkbox"
          type="checkbox"
        />
        <label
          className="toggle"
          htmlFor="checkbox"
        >
          <div
            className="bars"
            id="bar1"
          />
          <div
            className="bars"
            id="bar2"
          />
          <div
            className="bars"
            id="bar3"
          />
        </label>
      </div>
      <ResposiveMenu class={display ? "active" : "not-active"} />
    </header>
  )
}
