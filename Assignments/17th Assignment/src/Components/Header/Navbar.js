import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../Assets/logo.png"
import { useCartContext } from '../../Context/CartContext'
import { useAuthContext } from '../../Context/AuthContext'

export default function Navbar() {

  const [cart, setCart] = useCartContext()
  const [isAuth, setIsAuth, users, setUsers] = useAuthContext()

  const myStyle = {
    "color": "red",
    "fontSize": "16px",
    "fontWeight": "900",
    "marginLeft": "4px"
  }

  const handleLogout = () => {
    
    setIsAuth(false)
  }


  return (
    <>
      <header className='bg-dark d-flex justify-content-between' style={{ "padding": "15px 30px" }} >
        <nav>
          <Link to={"/"}>
            <img src={logo} style={{ "width": "44px" }} alt="" />
          </Link>
          <Link to={"/bills"}>
            Cart<sup style={myStyle}>{cart.length == 0 ? "" : cart.length}</sup>
          </Link>
          <Link to={"/users"}>
            Users
          </Link>
        </nav>
        {
          isAuth
            ?
            <button className="logoutBtn" onClick={handleLogout}>
              <div className="sign">
                <svg viewBox="0 0 512 512">
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                </svg>
              </div>
              <div className="text">
                Logout
              </div>
            </button>
            :
            <Link to={"/auth/register"} className='d-flex'>
              <button className="Signup-button">
                Sign Up
              </button>
            </Link>
        }
      </header>
    </>
  )
}
