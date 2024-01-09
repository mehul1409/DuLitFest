import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setSidebarVisible(!sidebarVisible);
  };

  const closeMobileMenu = () => {
    setSidebarVisible(false);
  };

  return (
    <div className="Navbarbody">
      <div className="navbar">
        <ul className="navitems">
        <li className="hamburger" onClick={handleClick}>
            <a href="">
              <RxHamburgerMenu />
            </a>
          </li>
          <motion.img
            // initial={{ y: "-10vh" }}
            // animate={{ y: "0vw" }}
            // transition={{ duration: 0.5 }}
            src="/assets/images/Logo.svg"
            alt=""
            className="Dulitfeslogo"
          />
          <motion.li
            initial={{ y: "-10vh" }}
            animate={{ y: "0vw" }}
            transition={{ duration: 0.6 }}
            className="mobileview"
            id="navItemHome"
          >
            <Link to="/" className="navitemMobile">
              HOME
            </Link>
          </motion.li>
          <motion.li
            initial={{ y: "-10vh" }}
            animate={{ y: "0vw" }}
            transition={{ duration: 0.6 }}
            className="mobileview"
            id="navItemSpeakers"
          >
            <Link to="/speakers" className="navitemMobile">
              SPEAKERS
            </Link>
          </motion.li>
          <motion.li
            initial={{ y: "-10vh" }}
            animate={{ y: "0vw" }}
            transition={{ duration: 0.6 }}
            className="mobileview"
            id="navItemProgramme"
          >
            <Link to="/programme" className="navitemMobile">
              PROGRAMME
            </Link>
          </motion.li>
          <motion.li
            initial={{ y: "-10vh" }}
            animate={{ y: "0vw" }}
            transition={{ duration: 0.6 }}
            className="mobileview"
            id="navItemSponsers"
          >
            <Link to="/sponsers" className="navitemMobile">
              PARTNERS
            </Link>
          </motion.li>
          <motion.li
            initial={{ y: "-10vh" }}
            animate={{ y: "0vw" }}
            transition={{ duration: 0.6 }}
            className="mobileview"
            id="navItemContact"
          >
            <Link to="/contact" className="navitemMobile">
              CONTACT
            </Link>
          </motion.li>
          <motion.li
            initial={{ y: "-10vh" }}
            animate={{ y: "0vw" }}
            transition={{ duration: 0.6 }}
            className="registerButton"
            id="navItemRegister"
          >
            <Link to="/register">REGISTER</Link>
          </motion.li>
          
        </ul>
        <ul className="sidebar" id={`${sidebarVisible ? "show" : ""}`}>
          <li className="sidebb">
            <a id="mnh" onClick={handleClick}>
              {/* <RxCross2 /> */}
              <span id="rarrow">&larr;</span>Back 
            </a>
          </li>
          <li className="sidebb" onClick={closeMobileMenu}>
            <Link to="/" className="navitemMobile">
              HOME
            </Link>
          </li>
          <li className="sidebb" onClick={closeMobileMenu}>
            <Link to="/speakers" className="navitemMobile">
              SPEAKERS
            </Link>
          </li>
          <li className="sidebb" onClick={closeMobileMenu}>
            <Link to="/programme" className="navitemMobile">
              PROGRAMME
            </Link>
          </li>
          <li className="sidebb" onClick={closeMobileMenu}>
            <Link to="/sponsers" className="navitemMobile">
              PARTNERS
            </Link>
          </li>
          <li className="sidebb" onClick={closeMobileMenu}>
            <Link to="/contact" className="navitemMobile">
              CONTACT
            </Link>
          </li>
          <li className=" sidebb sidebbregb registerButton" onClick={closeMobileMenu}>
            <Link to="/register">REGISTER</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
