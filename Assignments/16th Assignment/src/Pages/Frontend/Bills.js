import React, { useEffect, useState } from 'react'
import EditBtn from '../../Components/OtherComponents/EditBtn';
import Input from '../../Components/OtherComponents/Input';
import EmptyAnimation from '../../Components/OtherComponents/EmptyAnimation';
import { message } from 'antd';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function Bills() {

  // --------- for All Products ---------
  const [bills, setBills] = useState([])
  // --------- for Editing ---------
  const [currentProduct, setcurrentProduct] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("bills"))
    if (data) {
      setBills(data)
    }
  }, [])

  // -------------- Functions -------------------

  // --------- Edit -----------

  const handleChange = (e) => {
    setcurrentProduct(s => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handleEdit = (id) => {
    let newBill = bills.find((bill) => {
      return id == bill.billNo
    })
    setcurrentProduct(newBill)
    setIsEditing(true)
  }

  const handleClose = () => {
    setcurrentProduct(null)
    setIsEditing(false)
  }

  // --------- validation CNIC -----------

  const handleCnic = () => {
    let cnic = currentProduct.CNIC
    if (cnic) {
      if (cnic.length != 15) {
        message.warning("Enter Correct CNIC with dashes")
      }
      else {
        // CNIC validation
        for (let i = 0; i < 15; i++) {
          if (cnic.charCodeAt(i) <= 48 && cnic.charCodeAt(i) >= 57 || cnic.charCodeAt(i) == 45) {
            if (i == 5 || i == 13) {
            }
            else{
              message.error("Enter CNIC in correct way")
            }
          }
        }
      }
    }
  }

  const handleUpdate = () => {
    // ---------- Validation ----------
    if (currentProduct.CutomerName && currentProduct.total && currentProduct.CNIC) {
      // ---------- Actual updating ----------
      let newBills = bills.filter((bill) => {
        return bill.billId != currentProduct.billId
      })
      newBills.push(currentProduct)
      setBills([...newBills])
      localStorage.setItem("bills", JSON.stringify(newBills))
      setcurrentProduct(null)
      setIsEditing(false)
    }
    else {
      message.error("Please Enter data Correctly")
    }
  }

  // --------- Delete -----------

  const handleDelte = (id) => {
    let newBills = bills.filter((bill) => {
      return id != bill.billNo
    })
    localStorage.setItem("bills", JSON.stringify(newBills))
    setBills(newBills)
  }

  // -------------- Styling -------------------

  const tableStyle = {
    "width": "90%",
    "margin": "auto"
  }

  const borderStyle = {
    "border": "1px solid #b7b7b7",
    "padding": "15px 0px",
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
        All Bills
      </h1>
      {
        bills.length == 0
          ?
          <EmptyAnimation/>
          // <h1 className="text-center my-5 fw-bolder">
          //   No Bills Found
          // </h1>
          :
          <Table style={tableStyle} className='my-5'>
            <Thead>
              <Tr style={rowStyle}>
                <Th style={borderStyle}>Bill #</Th>
                <Th style={borderStyle}>Bill ID</Th>
                <Th style={borderStyle}>Customer Name</Th>
                <Th style={borderStyle}>CNIC</Th>
                <Th style={borderStyle}>Date</Th>
                <Th style={borderStyle}>Total</Th>
                <Th style={borderStyle}>Function</Th>
              </Tr>
            </Thead>
            <Tbody>
              <>
                {
                  bills.map((bill, index) => {
                    return (
                      <Tr key={index} className='my-3' style={rowStyle}>
                        <Td style={borderStyle}>{index + 1}</Td>
                        <Td style={borderStyle}>{bill.billId}</Td>
                        <Td style={borderStyle}>{bill.CutomerName}</Td>
                        <Td style={borderStyle}>{bill.CNIC}</Td>
                        <Td style={borderStyle}>{bill.Date}</Td>
                        <Td style={borderStyle}>${bill.total}</Td>
                        <Td style={{ ...borderStyle, ...btnStyle }} >
                          <button className="delete-button" onClick={() => { handleDelte(bill.billNo) }}>DEL</button>
                          <EditBtn handleClick={() => { handleEdit(bill.billNo) }} />
                        </Td>
                      </Tr>
                    )
                  })
                }
              </>
            </Tbody>
          </Table>
      }


      {/* Editing Modal */}

      <div
        aria-hidden="true"
        aria-labelledby="exampleModalLabel"
        className="modal show "
        id="exampleModal"
        tabIndex="-1"
        style={{ display: isEditing ? 'block' : 'none', background: 'rgba(0, 0, 0, 0.5)' }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="exampleModalLabel"
              >
                Bill # {currentProduct ? currentProduct.billId : ""}
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
              {/* Form to update */}
              <form className="user-form">
                <Input value={currentProduct ? currentProduct.CutomerName : ""} handleChange={handleChange} type={"text"} name={"CutomerName"} first="F" second="u" third="l" fourth="l" fivth="N" sixth="a" seventh="m" eigth="e" />
                <Input value={currentProduct ? currentProduct.CNIC : ""} handleChange={handleChange} type={"text"} name={"CNIC"} first="C" second="N" third="I" fourth="C" handleBlur={handleCnic} />
                <Input value={currentProduct ? currentProduct.total : ""} handleChange={handleChange} type={"number"} name={"total"} first="T" second="o" third="t" fourth="a" fivth="l" />
              </form>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleUpdate}
              >
                Confirm Bill
              </button>
            </div>
          </div>
        </div>
      </div >


    </main>
  )
}
