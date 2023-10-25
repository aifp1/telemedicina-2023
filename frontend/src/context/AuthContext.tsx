import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';

import { login } from "../api/autorizacion";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    console.log("Context: ", context)
    if(!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if(errors.length > 0){
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [errors])

    useEffect(() => {
        const cookies = Cookies.get();
        if(cookies.token){
            console.log(cookies.token);
        }

    }, [])
    

    const signin = async (user: any) => {
        try {
            console.log("USer: ", user);
            const { email, password } = user;
            const loginResponse = await login({email, password});
            setUser(loginResponse.data)
            setIsAuthenticated(true);
        } catch (error: any) {
            setErrors(error.response.data);
            setUser(null);
            setIsAuthenticated(false);  
        }

    }

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            errors,
            signin,
        }}>
            {children}
        </AuthContext.Provider>
    )
}