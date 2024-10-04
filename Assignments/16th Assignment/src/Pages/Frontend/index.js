import React from 'react'
import Home from "./Home"
import { Route, Routes } from 'react-router-dom'
import Bills from './Bills'

export default function Frontend() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/bills' element={<Bills />} />
            </Routes>
        </>
    )
}
