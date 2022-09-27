import React from 'react'
import './Register.css'
import RegisterNav from './RegisterNav'
import RegisterForm from './RegisterForm'

function Register() {
  return (
    <div className="register_body">
        <RegisterNav />
        <RegisterForm />
    </div>
    );
}

export default Register