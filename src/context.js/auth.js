import React, { createContext,useState} from "react";

export const AuthContext = createContext({})

function AuthProvider({children}){

    const [User, setUser] = useState({});
    const [Code,setCode] = useState(0)
    const Env = process.env.REACT_APP_API_BASE_URL

    return(
        <AuthContext.Provider value={{User,setUser,setCode,Code,Env}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;