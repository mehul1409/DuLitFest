import React, { useState } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
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
              <RxHamburgerMenu size={32}/>
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
            <NavLink to="/" className="navitemMobile">
              HOME
            </NavLink>
          </motion.li>
          <motion.li
            initial={{ y: "-10vh" }}
            animate={{ y: "0vw" }}
            transition={{ duration: 0.6 }}
            className="mobileview"
            id="navItemSpeakers"
          >
            <NavLink to="/speakers" className="navitemMobile">
              SPEAKERS
            </NavLink>
          </motion.li>
          <motion.li
            initial={{ y: "-10vh" }}
            animate={{ y: "0vw" }}
            transition={{ duration: 0.6 }}
            className="mobileview"
            id="navItemProgramme"
          >
            <NavLink to="/programme" className="navitemMobile">
              PROGRAMME
            </NavLink>
          </motion.li>
          <motion.li
            initial={{ y: "-10vh" }}
            animate={{ y: "0vw" }}
            transition={{ duration: 0.6 }}
            className="mobileview"
            id="navItemSponsers"
          >
            <NavLink to="/sponsers" className="navitemMobile">
              PARTNERS
            </NavLink>
          </motion.li>
          <motion.li
            initial={{ y: "-10vh" }}
            animate={{ y: "0vw" }}
            transition={{ duration: 0.6 }}
            className="mobileview"
            id="navItemContact"
          >
            <NavLink to="/contact" className="navitemMobile">
              CONTACT
            </NavLink>
          </motion.li>
          <motion.li
            initial={{ y: "-10vh" }}
            animate={{ y: "0vw" }}
            transition={{ duration: 0.6 }}
            className="registerButton"
            id="navItemRegister"
            whileTap={{ scale: 0.9 }} 
          >
            <Link to="/register">REGISTER</Link>
          </motion.li>
          
        </ul>
        <ul className="sidebar" id={`${sidebarVisible ? "show" : ""}`}>
          <li className="sidebb">
            <a id="mnh" onClick={handleClick}>
              {/* <RxCross2 /> */}
              <pre id="rarrow">&larr; </pre>Back
            </a>
          </li>
          <li className="sidebb" onClick={closeMobileMenu}>
            <Link to="/" className="navitemMobile">
              HOME
            </Link>
            <div className="NavitemsUnderline"></div>
          </li>
          <li className="sidebb" onClick={closeMobileMenu}>
            <Link to="/speakers" className="navitemMobile">
              SPEAKERS
            </Link>
            <div className="NavitemsUnderline"></div>
          </li>
          <li className="sidebb" onClick={closeMobileMenu}>
            <Link to="/programme" className="navitemMobile">
              PROGRAMME
            </Link>
            <div className="NavitemsUnderline"></div>
          </li>
          <li className="sidebb" onClick={closeMobileMenu}>
            <Link to="/sponsers" className="navitemMobile">
              PARTNERS
            </Link>
            <div className="NavitemsUnderline"></div>
          </li>
          <li className="sidebb" onClick={closeMobileMenu}>
            <Link to="/contact" className="navitemMobile">
              CONTACT
            </Link>
            <div className="NavitemsUnderline"></div>
          </li>
          <li className=" sidebb sidebbregb registerButton" onClick={closeMobileMenu}>
            <Link to="/register">REGISTER</Link>
            <div className="registerunderline"></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
