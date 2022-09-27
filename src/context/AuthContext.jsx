// import { createContext } from "react"
import React, { createContext, useState } from 'react'

const intialState = {
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
};

const AuthContext = createContext(intialState);

export function AuthContextProvider(props) {

    const [token, setToken] = useState(null);
    const userIsLoggedIn = !!token;
   const loginHandler = ( token ) =>{
    setToken(token);
   }
   const logoutHandler = () =>{
    setToken(null);
   }

   const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
   }
   
  return (
    <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
  )
}

export default AuthContext;