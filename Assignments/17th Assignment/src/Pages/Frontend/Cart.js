import React, { useEffect, useState } from 'react'
import EmptyAnimation from '../../Components/OtherComponents/EmptyAnimation';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { message } from 'antd';
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css"


export default function Cart() {

  // --------- for All Products ---------
  const [cart, setCart] = useCartContext()
  const [sum, setSum] = useState(0)

  useEffect(() => {
    const totalSum = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setSum(totalSum);
  }, [cart]);



  // -------------- Functions -------------------

  // --------- Delete -----------

  const handleDelte = (id) => {
    let newCart = cart.filter((cart) => {
      return id != cart.id
    })
    setCart(newCart)
  }

  // --------- Quantity -----------

  const handlePlus = (product) => {
    const updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  }

  const handleMinus = (product) => {
    if (product.quantity > 1) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCart(updatedCart);
    }
  }

  const handleDoneOrder = () => {
    if (sum > 0) {
      Swal.fire({
        title: 'Order Placed!',
        text: 'Thanks For choosing us',
        icon: 'success',
        confirmButtonText: 'OK'
      })
        .then((result) => {
          if (result.isConfirmed) {
            setCart([])
          }
        })
    }
    else {
      message.warning("Add to Cart something to Order")
    }
  }

  // -------------- Styling -------------------

  const tableStyle = {
    "width": "90%",
    "margin": "auto"
  }

  const borderStyle = {
    "border": "1px solid #b7b7b7",
    "padding": "15px 0px",
    "height": "173.92px",
    "alignItems": "center"
  }

  const btnStyle = {
    "display": "flex",
    "justifyContent": "space-evenly"
  }


  const rowStyle = {
    "textAlign": "center"
  }


  return (
    <main>
      <h1 className="text-center my-5 fw-bolder">
        Cart <i className="bi bi-cart fs-2 fw-bolder"></i>
      </h1>
      {
        cart.length == 0
          ?
          <EmptyAnimation />
          :
          <Table style={tableStyle} className='my-5'>
            <Thead>
              <Tr style={rowStyle}>
                <Th style={borderStyle}>Product #</Th>
                {/* <Th style={borderStyle}>Product ID</Th> */}
                <Th style={borderStyle}>Image</Th>
                <Th style={borderStyle}>Product Name</Th>
                <Th style={borderStyle}>Price</Th>
                <Th style={borderStyle}>Date</Th>
                <Th style={borderStyle}>Quantity</Th>
                <Th style={borderStyle}>Function</Th>
              </Tr>
            </Thead>
            <Tbody>
              <>
                {
                  cart.map((product, index) => {
                    return (
                      <Tr key={index} className='my-3' style={rowStyle}>
                        <Td style={borderStyle}>{index + 1}</Td>
                        {/* <Td style={borderStyle}>{product.id}</Td> */}
                        <Td style={borderStyle}><img style={{ "width": "100px" }} src={product.image} alt="" /></Td>
                        <Td style={borderStyle}>{product.title}</Td>
                        <Td style={borderStyle}>${(product.price * product.quantity).toFixed(2)}</Td>
                        <Td style={borderStyle}>{product.date}</Td>
                        <Td style={borderStyle}>
                          <div className="quantity d-flex flex-column align-items-center" >
                            <button className="plus" style={{ "border": "0", "padding": "0" }} onClick={() => { handlePlus(product) }}>
                              <div
                                className="plusButton"
                                tabIndex="0"
                              >
                                <svg
                                  className="plusIcon"
                                  viewBox="0 0 30 30"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g mask="url(#mask0_21_345)">
                                    <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z" />
                                  </g>
                                </svg>
                              </div>
                            </button>
                            {product.quantity ? product.quantity : 1}
                            <button className="minus" style={{ "border": "0", "padding": "0" }} onClick={() => { handleMinus(product) }}>
                              <div
                                className="plusButton"
                                tabIndex="0"
                              >
                                <svg
                                  className='plusIcon'
                                  viewBox="0 0 1024 1024"
                                  fill="currentColor"
                                  height="1em"
                                  width="1em"
                                >
                                  <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
                                </svg>
                              </div>
                            </button>
                          </div>
                        </Td>
                        <Td style={{ ...borderStyle, ...btnStyle }} >
                          <button className="delete-button" onClick={() => { handleDelte(product.id) }}>&#10060;</button>
                        </Td>
                      </Tr>
                    )
                  })
                }
              </>
            </Tbody>
          </Table>
      }

      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-start my-4 fw-bold">
              Bill
            </h1>
            <div className="d-flex flex-column justify-content-end align-items-start ms-auto my-4" style={{ "width": "fit-content" }}>
              <div className="products">
                <b style={{ "fontSize": "22.5px", "fontWeight": "900" }}>Total Products: {cart.length}</b>
              </div>
              <div className="price">
                <b>Total Price: {sum.toFixed(2)}</b>
              </div>
              <Link onClick={handleDoneOrder}
                className="fancy"
                href="#"
              >
                <span className="top-key" />
                <span className="text">
                  Done Order
                </span>
                <span className="bottom-key-1" />
                <span className="bottom-key-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>




    </main>
  )
}
