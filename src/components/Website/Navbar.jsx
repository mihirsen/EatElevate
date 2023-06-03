import React from "react";
import Logo from "../Website/Assest/EatElevate-logo.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/Profile");
  };

  return (
    <div
      className="image"
      style={{
        height: "100%",
        backgroundImage: 'url("./Logo.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="Navbar-flex 
    "
      >
        <div className="Navbar">
          <div className="Navbar-icon">
            <img src={Logo} alt="Logo" className="logo" />
          </div>
          <h1 className="moto-top">Eat Elevate </h1> <br />
          <div className="Navbar-links">
            <div>Eat Elevate</div>
            <div>Contact us</div>
            <div onClick={handleLogin}>Log in</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
