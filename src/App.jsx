import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthContext, { AuthContextProvider } from "./context/AuthContext";
import Error from "./components/error/Error";
import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/Register/Register";
import Users from "./components/users/Users";
import User from "./components/users/User";
import CreateUser from "./components/users/CreateUser";
import MyAccount from "./components/users/MyAccount";

function App() {

  const authctx = useContext(AuthContext);
  // const { token, isLoggedIn } = authctx;
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/home" element={ isLoggedIn ? <Home /> : <Login/>} /> */}
         <Route path="/home" element={<Home />} />
         <Route path ="/*" element = {<Error/>}/>
         <Route path="/users" element={<Users />} />
         <Route path="/user/:userId" element={<User />} />
         <Route path="/createUser" element={<CreateUser />} />
        <Route path="/my_account" element={<MyAccount />} /> 

        </Routes>
      </BrowserRouter>

  )
}

export default App;
