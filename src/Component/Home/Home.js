import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import shape from "../../Photos/special shape copy.png";
import office from "../../Photos/office.jpg";
import planter from "../../Photos/planter.jpg";
import baby from "../../Photos/baby.jpg";
import indoor from "../../Photos/indoor.jpg";
import house from "../../Photos/House.jpg";
import Catagories from "../Catagories/Catagories";


const Home = () => {
  const Catagory = [
    {
      key: "1",
      img: office,
      btn: "Office",
    },
    {
      key: "2",
      img: planter,
      btn: "Planter",
    },
    {
      key: "3",
      img: house,
      btn: "House",
    },
    {
      key: "4",
      img: indoor,
      btn: "Indoor",
    },
    {
      key: "5",
      img: baby,
      btn: "Garden",
    },
  ];
  return (
    <div className="home-container">
      <div style={{ backgroundColor: "#84A522" }} className="py-2">
        <div className="row justify-content-center">
          <div className="col-md-6 col-6">
            <FontAwesomeIcon
              style={{ fontSize: "20px" }}
              className="text-light ms-2"
              icon={faPhoneVolume}
            />
            <span style={{ fontSize: "15px" }} className="text-light">
              +01955298739
            </span>
          </div>
          <div className="col-md-3 col-6 text-end pe-2">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ">
                <a
                  href="https://www.facebook.com/Shahidul.3333/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    className="socialLink me-3  text-light  "
                    icon={faFacebookF}
                  />
                </a>
                <a
                  href="https://twitter.com/shahidulJahid1"
                  target="_blank "
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    className="socialLink me-3  text-light   "
                    icon={faTwitter}
                  />
                </a>

                <a href="2" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    className="socialLink me-3 text-light  "
                    icon={faInstagram}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/shahiduljahid71/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    className="socialLink me-3 text-light  "
                    icon={faLinkedinIn}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <header className="header-container">
        <div style={{marginTop:'40px'}} className="navbar-Container">
          <Navbar></Navbar>
        </div>
      </header>
      <div className="header-content mt-5 pt-5">
        <div>
          <div className="row container justify-content-center">
            <div className="col-md-7 text-light">
              <h3 style={{ fontWeight: "200" }}>FREE SHIPPING AVAILABLE!</h3>
              <h1 className="headerMain">SUMMER PLANT </h1>
              <h1 className="headerMain">MAKE YOU HAPPY</h1>
              <p style={{ fontWeight: "200" }}>
                Plants are always makes people happy.Gardening is a mind
                refreshing hobby. Green Plant provide a Substantial proprotion
                of the world’s moleculler OXYZEN.
              </p>

              <button className="btn text-bold text-light btn-color">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5 mt-5 pt-5 ">
        <h2 className="color text-bold text-center  "> Catagories</h2>
        <img
          style={{ height: "25px" }}
          src={shape}
          alt=""
          className="img-fluid d-flex mt-2 mb-5 m-auto"
        />
        <div className="row justify-content-center">
          {Catagory.map((catagory) => (
            <Catagories key={catagory.key} catagory={catagory}></Catagories>
          ))}
        </div>
      </div>

      
      <div className="sale-content mt-5  text-light text-center mb-5">
        <div className="content ">

        <h3 className="pt-5" style={{ fontWeight: "200" }}>sale upto <span className="h1">50%</span> </h3> 
              <h1 className="headerMain">SUMMER PLANTS</h1>
              <h1 className="headerMain">GARDRN</h1>
              <p style={{ fontWeight: "200" }}>
              Plants gonna make people happy. Garden from our heart, terrarium and eccessiries.
              </p>

              <button className="btn text-bold text-light btn-color">
                Discover Plants
              </button>
        </div>

      



      </div>
    </div>
  );
};

export default Home;
