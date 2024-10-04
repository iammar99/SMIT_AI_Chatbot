import React, { useState, useEffect } from 'react'
import { message } from 'antd'
import Input from '../../Components/OtherComponents/Input'

export default function Home() {

  const [products, setProducts] = useState([]);
  const [bills, setBills] = useState([]);
  const [state, setState] = useState({})
  const [isValidate, setIsValidate] = useState(false)
  const [isCnic, setIsCnic] = useState(false)
  const [isHide, setIsHide] = useState(false)
  const [total, setTotal] = useState(0);
  const [time, setTime] = useState(new Date().toISOString().split('T')[0]);
  let cnic


  // Data fetching 

  useEffect(() => {
    let bills = JSON.parse(localStorage.getItem("bills"))
    if (bills) {
      setBills(bills)
    }
    let skipElement = Math.floor(Math.random() * 100)
    const fetchData = async () => {
      // Fetch data from the API
      try {
        const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${skipElement}&select=title,price`);
        const result = await response.json();
        setProducts(result.products);
        let total = 0
        for (let i = 0; i < result.products.length; i++) {
          total += result.products[i].price
        }
        total = total.toFixed(2)
        setTotal(total)
      } catch (error) {
        console.error('Error fetching prediction:', error);
      }
    }
    fetchData();
  }, []);



  const handleDate = () => {
    document.getElementById("date").style.outline = "0"
  }


  const handleChange = (e) => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handleCnic = () => {
    cnic = state.cnic
    if (cnic) {
      if (cnic.length != 15) {
        message.warning("Enter Correct CNIC with dashes")
      }
      else {
        // CNIC validation
        for (let i = 0; i < 15; i++) {
          if (cnic.charCodeAt(i) <= 48 && cnic.charCodeAt(i) >= 57 || cnic.charCodeAt(i) == 45) {
            if (i == 5 || i == 13) {
              setIsValidate(true)
              setIsCnic(true)
            }
          }
        }
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTime(new Date().toISOString().split('T')[0]);
    let { fullName, billId, cnic } = state
    if (!fullName || !billId || !cnic) {
      setIsValidate(false)
    }
    else {
      setIsValidate(true)
    }
    if (isValidate && isCnic) {
      setIsHide(true)
    }
    else {
      message.error("Please Enter data Correctly")
    }
  }

  const handleClose = () => {
    setIsHide(false)
  }

  const handleAdd = (e) => {
    e.preventDefault()
    let bill = {
      billId: state.billId,
      CutomerName: state.fullName,
      CNIC: state.cnic,
      Date: time,
      total: total,
      billNo : bills.length + 1,
    }
    let updatedBills = [...bills, bill];

    // Update the state with the new list
    setBills(updatedBills);
    localStorage.setItem("bills", JSON.stringify(updatedBills))
    setState({
      fullName: '',
      cnic: '',
      billId: ''
    });
    setIsHide(false)
    setIsValidate(false)
    setIsCnic(false)
    message.success("Bill Added")
  }

  const style = {
    "background": "white",
    "position": "fixed",
    "width": "100%",
    "zIndex": "1",
    "opacity": "0.4"
  }

  const noStyle = {
  }


  return (
    <main>
      <div className="content" id='content' style={isHide ? style : noStyle}>
        <h1 className="text-center my-5 fw-bolder">
          Making Your billing Easier
        </h1>
        {/* Form To add user */}
        <form className='edit-form'>
          <Input handleChange={handleChange} value={state.fullName || ""} type={"text"} name={"fullName"} first="F" second="u" third="l" fourth="l" fivth="N" sixth="a" seventh="m" eigth="e" />
          <Input handleChange={handleChange} value={state.cnic || ""} type={"text"} name={"cnic"} first="C" second="N" third="I" fourth="C" handleBlur={handleCnic} />
          <input name="date" id="date" readOnly type="date" className="infos" value={time} onFocus={handleDate} />
          <Input handleChange={handleChange} value={state.billId || ""} type={"number"} name={"billId"} first="B" second="i" third="l" fourth="l" fivth="_" sixth="I" seventh="D" />
          <button className='submit' onClick={handleSubmit}>
            <span className="transition" />
            <span className="gradient" />
            <span className="label">
              Generate Bill
            </span>
          </button>
        </form>
      </div>
      <div
        aria-hidden="true"
        aria-labelledby="exampleModalLabel"
        className="modal show "
        id="exampleModal"
        tabIndex="-1"
        style={{ display: isHide ? 'block' : 'none', background: 'rgba(0, 0, 0, 0.5)' }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="exampleModalLabel"
              >
                Bill # {state.billId}
              </h1>
              <button
                data-bs-dismiss="modal"
                aria-label="Close"
                className="btn-close"
                type="button"
                onClick={handleClose}
              />
            </div>
            <div className="modal-body">
              <p>Here is the Bill </p>
              {/* Products */}
              < div className="bill" >
                <div style={{ "display": "flex", "justifyContent": "space-between" }}>
                  <b>ID #</b>
                  <b>Prduct</b>
                  <b>Price</b>
                </div>
                {products.map((product) => (
                  <div key={product.id} style={{ "display": "flex", "justifyContent": "space-between" }}>
                    <p>{product.id}</p>
                    <p>{product.title}</p>
                    <p>${product.price}</p>
                  </div>
                ))}
              </div>
              <div className="total text-end">
                <b>Total = ${total}</b>
              </div>
              <b className='text-end d-block'>Thanks For Shopping! &#128147;</b>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleAdd}
              >
                Confirm Bill
              </button>
            </div>
          </div>
        </div>
      </div >
    </main >
  )
}
