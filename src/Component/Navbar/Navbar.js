import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from '../../Photos/Be leaf LOGO.png'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-2">
      <div className="container-fluid mx-2">
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto text-center d-flex align-items-center  mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link
                to={"/home"}
                className="nav-link  me-5 text-light "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link to={"skills"} className="nav-link me-5 text-light">
                Service
              </Link>
            </li>

            <li className="nav-item ">
              <Link to={"/projects"} className="nav-link me-5 text-light">
                Product
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                to={"/home"}
                className="logo me-5 text-light "
              >
                <img  style={{height:'60px'}}src={logo} alt="logo" className="img-fluid" />
              </Link>
            </li>

            <li className="nav-item ">
              <Link
                to={"/contact"}
                className="nav-link  navigation me-5 text-light "
              >
                Sale
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                to={"/blogs"}
                className="nav-link  navigation  me-5 text-light "
              >
                About
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                to={"/blogs"}
                className="nav-link  navigation  me-5 text-light "
              >
                Contact
              </Link>
            </li>
          </ul>
          
        
          
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
