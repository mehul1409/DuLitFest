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
    console.log(sidebarVisible);
  };

  const closeMobileMenu = () => {
    setSidebarVisible(false);
  };

  return (
    <div className="Navbarbody">
      <div className="navbar">
        <ul className="navitems">
          <motion.img
          initial={{ y: '-10vh' }}
          animate={{ y: '0vw' }}
           transition={{ duration: 0.5 }}
          src="/assets/images/Logo.svg" alt="" />
          <motion.li
          initial={{ y: '-10vh' }}
          animate={{ y: '0vw' }}
           transition={{ duration: 0.6 }}
          className="mobileview">
            <Link to="/" className="navitemMobile">
              <a href="">HOME</a>
            </Link>
          </motion.li>
          <motion.li
          initial={{ y: '-10vh' }}
          animate={{ y: '0vw' }}
           transition={{ duration: 0.6 }}
          className="mobileview">
            <Link to="/speakers" className="navitemMobile">
              <a href="">SPEAKERS</a>
            </Link>
          </motion.li>
          <motion.li
          initial={{ y: '-10vh' }}
          animate={{ y: '0vw' }}
           transition={{ duration: 0.6 }}
          className="mobileview">
            <Link to="/programme" className="navitemMobile">
              <a href="">PROGRAMME</a>
            </Link>
          </motion.li>
          <motion.li
          initial={{ y: '-10vh' }}
          animate={{ y: '0vw' }}
           transition={{ duration: 0.6 }}
          className="mobileview">
            <Link to="/sponsers" className="navitemMobile">
              <a href="">SPONSERS</a>
              </Link>
            </motion.li>
            <motion.li
            initial={{ y: '-10vh' }}
            animate={{ y: '0vw' }}
             transition={{ duration: 0.6 }}
            className="mobileview">
              <Link to='/contact' className="navitemMobile">
              <a href="">CONTACT</a>
              </Link>
            </motion.li>
            <motion.li
            initial={{ y: '-10vh' }}
            animate={{ y: '0vw' }}
             transition={{ duration: 0.6 }}
            className="mobileview registerButton">
              <Link to='/register'>
                <a href="">REGISTER</a>
              </Link>
            </motion.li>
            <li className="hamburger" onClick={handleClick}><a href=""><RxHamburgerMenu/></a></li>
        </ul>
        <ul className="sidebar" id={`${sidebarVisible ? "show" : ""}`}>
          <li className="sidebb">
            <a id="mnh" onClick={handleClick}>
              <RxCross2 />
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
              SPONSERS
              </Link>
            </li>
            <li className="sidebb" onClick={closeMobileMenu}>
              <Link to='/contact' className="navitemMobile">
              CONTACT
              </Link>
            </li>
            <li  className=" sidebb registerButton" onClick={closeMobileMenu}>
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
