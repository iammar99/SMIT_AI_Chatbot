import React, { createContext, useContext, useState } from 'react'

// Capitalize the context name
const CartContext = createContext()

export default function CartContextProvider(props) {
    const [cart, setCart] = useState([])
    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext)
