import React from 'react'
import Home from "./Home"
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header'
import Users from './Users'

export default function Frontend() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/bills' element={<Cart />} />
                <Route path='/users' element={<Users />} />
            </Routes>
            <Footer />
        </>
    )
}
