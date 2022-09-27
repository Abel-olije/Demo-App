import React from 'react'
import navImage from "../../asset/my_logo.png";
import './LoginNav.css'

function LoginNav() {
  return (
    <nav className="login_nav">
      <div className="login_nav_left">
        <div className="login_nav_logo">
          <img src={navImage} alt="Instagram Logo" width={80} height={80} />
        </div>
        <div className="login_nav_logo_text">
          <h1>Ace</h1>
        </div>
      </div>
    </nav>
  );
}

export default LoginNav