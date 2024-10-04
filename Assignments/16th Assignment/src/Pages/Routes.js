import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Header from '../Components/Header'
import Footer from '../Components/Footer/Footer'

export default function Index() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<Frontend />} />
      </Routes>
      <Footer />
    </>
  )
}
