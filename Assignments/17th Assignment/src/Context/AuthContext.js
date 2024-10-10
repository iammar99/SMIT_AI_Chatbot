import React, { createContext, useContext, useState } from 'react'

// Capitalize the context name
const AuthContext = createContext()

export default function AuthContextProvider({children}) {
    const [isAuth, setIsAuth] = useState(false)
    const [users ,setUsers] = useState([])
    return (
        <AuthContext.Provider value={[isAuth , setIsAuth , users ,setUsers]}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)
