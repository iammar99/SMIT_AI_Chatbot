import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../Assets/logo.png"

export default function Navbar() {
  return (
    <>
      <header className='bg-dark'>
        <nav>
          <Link to={"/"}>
            <img src={logo} style={{ "width": "44px" }} alt="" />
          </Link>
          <Link to={"/bills"}>
            All Bills
          </Link>
        </nav>
      </header>
    </>
  )
}
