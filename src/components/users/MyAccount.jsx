import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {FaUser, FaLock} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";


function MyAccount() {
    const updateUser = async (e) =>{
        e.preventDefault();
        try {
            const response = await fetch('https://reqres.in/api/users/' + userId, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: e.target.name.value,
                    job: e.target.job.value
                })
            });
            const data = await response.json();
            alert(JSON.stringify(data));
        } catch (error) {
            alert(JSON.stringify(error));
        }
    }
    const [user, setUser] = useState({});
    const[name, setName] = useState("");
     const [job, setJob] = useState("");
     const [errorMessages, setErrorMessages] = useState({});
    const params = useParams();
    const userId = params.userId;
    const navigate = useNavigate();
    

    const getUser = async () => {
        try {
            // alert(userId)
            const response = await fetch('https://reqres.in/api/users/' + userId);
            // alert(response);
            const userData = await response.json();
            // alert(JSON.stringify(userData) + "this is data");
            setUser(userData.data);
        } catch (error) {
            // alert(JSON.stringify(error));
            console.log(error);
        }
    }
       useEffect(() =>{
        getUser();
    })
    const inputChangeHandler = (event) => {
      
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
  
         const result = await fetch("https://reqres.in/api/users", {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify(body),
         });
        //  
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
       //
     };
  return (
    <>
    {user && (
        <div>
            <h1>{user.first_name}</h1>
            <h1>{user.last_name}</h1>
            <h5>{user.email}</h5>
            <img src={user.avatar} alt="my-avartar" />
        </div>
    )}
    <div className="register_main">
      <div className="register_form">
        <form onSubmit={formSubmitHandler}>
          <div className="form_input">
            <h1>Update User</h1>
            <div className="form_input_icon">
              <FaUser />
              <input
                type="name"
                name="name"
                placeholder="name"
                onChange={inputChangeHandler}
              />
              {/* <span> {errorMessages.name}</span> */}
            </div>
            <div className="form_input_icon">
              <FaLock />
              <input
                type="text"
                name="job"
                placeholder="Job"
                onChange={inputChangeHandler}
              />
            </div>

            <button type="submit" className="form_input_button">
              Update User
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default MyAccount