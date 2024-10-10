import React from 'react'

export default function Footer() {

  const year = new Date().getFullYear()
  return (
    <>
    <footer className='bg-dark'>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="m-0 p-4 text-center text-light">
              &copy; {year} | All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
