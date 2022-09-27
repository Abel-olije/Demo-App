import React from 'react'
import { useState } from 'react';
import {FaUser, FaLock} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import HomeNav from '../layout/HomeNav';
function CreateUser() {
    const[name, setName] = useState("");
     const [job, setJob] = useState("");
     const [errorMessages, setErrorMessages] = useState({});
     const [inputType, setInputType] = useState("job");

     const navigate = useNavigate();

     const inputChangeHandler = (event) => {
       // alert ("change fired")
       const { name, value } = event.target;
       if (name === "name") {

         setName(event.target.value);
         setErrorMessages((prevState) => ({
           ...prevState,
           name: "",
         }));
       }
       if (name === "job") {
         setJob(event.target.value);
         setErrorMessages((prevState) => ({
           ...prevState,
           job: "",
         }));
         return;
       }
     };

     const formSubmitHandler = async (event) => {
       event.preventDefault();
       try {
         let body = { name, job };
        //  alert(JSON.stringify(body));
         const result = await fetch("https://reqres.in/api/users", {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify(body),
         });
        //  alert(JSON.stringify(result));
         const data = await result.json();
         alert(JSON.stringify(data));
        if(data.createdAt){
            navigate('/users')
        }
       } catch (error) {
        throw new Error(error.message);
       }
       

       console.log(name);
       console.log(job);
     };
  return (
    <>
    <HomeNav />
    <div className="register_main">
      <div className="register_form">
        <form onSubmit={formSubmitHandler}>
          <div className="form_input">
            <h1>Create User</h1>
            <div className="form_input_icon">
              <FaUser />
              <input
                type="name"
                name="name"
                placeholder="name"
                onChange={inputChangeHandler}
              />
              <span> {errorMessages.name}</span>
            </div>
            <div className="form_input_icon">
              <FaLock />
              <input
                type="text"
                name="job"
                placeholder="Job"
                onChange={inputChangeHandler}
              />
              <span> {errorMessages.job}</span>

            </div>

            <button type="submit" className="form_input_button">
              Create User
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default CreateUser