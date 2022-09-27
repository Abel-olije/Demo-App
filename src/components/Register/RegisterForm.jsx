import React, {useState} from 'react'
import './RegisterForm.css'
import {FaUser, FaLock} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [errorMessages, setErrorMessages] = useState({});
     const [inputType, setInputType] = useState("password");

     const navigate = useNavigate();

     const inputChangeHandler = (event) => {
       // alert ("change fired")
       const { name, value } = event.target;
       if (name === "email") {
         const emailRegex =
           /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
         if (!emailRegex.test(event.target.value)) {
           setErrorMessages((prevState) => ({
             ...prevState,
             email: "Please enter a valid email address",
           }));
           return;
         }
         setEmail(event.target.value);
         setErrorMessages((prevState) => ({
           ...prevState,
           email: "",
         }));
       }
       if (name === "password") {
         const passwordRegex = /[0-9]+/;
         if (!passwordRegex.test(value) && value.length < 5) {
           setErrorMessages((prevState) => ({
             ...prevState,
             password: "Please enter a valid password",
           }));
           return;
         }
         setPassword(event.target.value);
         setErrorMessages((prevState) => ({
           ...prevState,
           password: "",
         }));
         return;
       }
     };

     const formSubmitHandler = async (event) => {
       event.preventDefault();
       try {
         let body = { email, password };
        //  alert(JSON.stringify(body));
         const result = await fetch("https://reqres.in/api/register", {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify(body),
         });
        //  alert(JSON.stringify(result));
         const data = await result.json();
        //  alert(JSON.stringify(data));
        if(result.status == 200){
            navigate('/login')
        }
       } catch (error) {
        throw new Error(error.message);
       }
       

       console.log(email);
       console.log(password);
       
     };
  return (
    <div className="register_main">
      <div className="register_text">
        <h1>Welcome User Register your Acccount</h1>
      </div>
      <div className="register_form">
        <form onSubmit={formSubmitHandler}>
          <div className="form_input">
            <h1>Register</h1>
            <div className="form_input_icon">
              <div>
              <FaUser />
              <input
              className="form_input_field"
                type="email"
                name="email"
                placeholder="email"
                onChange={inputChangeHandler}
              />
              </div>
              <div>
              <span className="errorMessage"> {errorMessages.email}</span>
              </div>
            </div>
            <div className="form_input_icon">
              <div>
              <FaLock />
              <input
              className="form_input_field"
                type={inputType}
                name="password"
                placeholder="Password"
                onChange={inputChangeHandler}
              />
              </div>
              <div>
              <span className="errorMessage"> {errorMessages.password}</span>
              </div>
              {inputType === "password" && (
                <span className="show" onClick={() => setInputType("text")}> Show</span>
              )}
              {inputType === "text" && (
                <span className="show" onClick={() => setInputType("password")}> Hide</span>
              )}
            </div>

            <button type="submit" className="form_input_button">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm