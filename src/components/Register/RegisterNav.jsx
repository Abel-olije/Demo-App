import React from 'react'
import './RegisterNav.css'
import navImage from "../../asset/my_logo.png";

function RegisterNav() {
  return (
    <nav className="register_nav">
      <div className="register_nav_left">
        <div className="register_nav_logo">
          <img src={navImage} alt="My Logo" width={80} height={80} />
        </div>
        <div className="register_nav_logo_text">
          <h1>Ace</h1>
        </div>
      </div>
    </nav>
  );
}

export default RegisterNav