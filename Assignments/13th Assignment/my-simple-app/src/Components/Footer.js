import React from 'react'

export default function Footer() {

  const year = new Date().getFullYear()

  return (
    <>
      <footer>
        <p className="footer-para">
          &copy; {year} | All rights reserved by Ammar
        </p>
      </footer>
    </>
  )
}
