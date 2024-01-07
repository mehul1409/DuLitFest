import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setSidebarVisible(!sidebarVisible);
    console.log(sidebarVisible);
  };

  const closeMobileMenu = () => {
    setSidebarVisible(false);
  };

  return (
    <div className="Navbarbody">
      <div className="navbar">
        <ul className="navitems">
          <img src="/assets/images/Logo.svg" alt="" />
          <li className="mobileview">
            <Link to="/" className="navitemMobile">
              <a href="">HOME</a>
            </Link>
          </li>
          <li className="mobileview">
            <Link to="/speakers" className="navitemMobile">
              <a href="">SPEAKERS</a>
            </Link>
          </li>
          <li className="mobileview">
            <Link to="/programme" className="navitemMobile">
              <a href="">PROGRAMME</a>
            </Link>
          </li>
          <li className="mobileview">
            <Link to="/sponsers" className="navitemMobile">
              <a href="">SPONSERS</a>
              </Link>
            </li>
            <li className="mobileview">
              <Link to='/contact' className="navitemMobile">
              <a href="">CONTACT</a>
              </Link>
            </li>
            <li className="mobileview registerButton">
              <Link to='/register'>
                <a href="">REGISTER</a>
              </Link>
            </li>
            <li className="hamburger" onClick={handleClick}><a href=""><RxHamburgerMenu/></a></li>
        </ul>
        <ul className="sidebar" id={`${sidebarVisible ? "show" : ""}`}>
          <li>
            <a onClick={handleClick}>
              <RxCross2 />
            </a>
          </li>
          <li onClick={closeMobileMenu}>
            <Link to="/" className="navitemMobile">
              HOME
            </Link>
          </li>
          <li onClick={closeMobileMenu}>
            <Link to="/speakers" className="navitemMobile">
              SPEAKERS
            </Link>
          </li>
          <li onClick={closeMobileMenu}>
            <Link to="/programme" className="navitemMobile">
              PROGRAMME
            </Link>
          </li>
          <li onClick={closeMobileMenu}>
            <Link to="/sponsers" className="navitemMobile">
              SPONSERS
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to='/contact' className="navitemMobile">
              CONTACT
              </Link>
            </li>
            <li className="registerButton" onClick={closeMobileMenu}>
              <Link to='/register'>
              REGISTER
              </Link>
            </li>
        </ul> 
    </div>
</div>
  );
};

export default Navbar;
