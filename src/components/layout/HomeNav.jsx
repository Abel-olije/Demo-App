import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas'
import navImage from "../../asset/my_logo.png";
import { FaBars, FaShower } from 'react-icons/fa';
import './HomeNav.css'

function HomeNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="left-side">
            <img src={navImage} alt="My Logo" width={60} height={60} />
            <a className="navbar-brand" href="#"></a>
            <Button variant="primary" onClick={handleShow} className="btn">
              <FaBars />
            </Button>
            <Offcanvas className="canvas" show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <ul>
                  <li className="link">
                    {" "}
                    <a href="./users">User</a>{" "}
                  </li>
                  <li className="link">
                    {" "}
                    <a href="./createUser">My Account</a>{" "}
                  </li>
                  <li className="link">
                    {" "}
                    <a href="./">logout</a>{" "}
                  </li>
                </ul>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HomeNav