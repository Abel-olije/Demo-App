import React from 'react'
import './Login.css'
import LoginNav from './LoginNav'
import LoginForm from './LoginForm'
export default function Login() {
  return (
    <div className="login_body">
      <LoginNav />
      <LoginForm />
    </div>
  );
}

