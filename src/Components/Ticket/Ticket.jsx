import React from "react";
import "./Ticket.css";
import picc2 from "./picc2.png";
import clglogo from "./clglogo.png";
import { motion } from "framer-motion";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import mobileticket1 from "/assets/images/mobileticket.png";
import desktopticket1 from "/assets/images/DesktopTicket.png";
import ticketButton from "/assets/images/ticketButton.png";
import { Link } from "react-router-dom";

const Ticket = () => {
  const handleRegisterClick = () => {
    window.location.href = "/register";
  };

  // return (
  //   <>
  //     <motion.div
  //       initial={{ opacity: 0 }}
  //       whileInView={{ opacity: 1 }}
  //       transition={{ duration: 1.5, delay: 0.3 }}
  //       viewport={{ once: true }}
  //       className="Ticketheading">
  //       <SectionHeader text="GET YOUR FREE PASS" />
  //       {/* <p className="headticket">Get Your Free Pass</p> */}
  //     </motion.div>
  //     <motion.div
  //       initial={{ opacity: 0 }}
  //       whileInView={{ opacity: 1 }}
  //       transition={{ duration: 1.5, delay: 0.3 }}
  //       viewport={{ once: true }}
  //       className='ticket'>
  //       {/* Top section */}
  //       <div className='ticket-top'>
  //         {/* Logo on the left */}
  //         <div className='logo-left'>
  //           <img src={picc2} alt='Logo Left' />
  //         </div>

  //         {/* Text in the middle */}
  //         <div className='ticket-text'>
  //           {/* <p>For DU students</p> */}
  //           <h1 className='ticket-head'>Ticket</h1>
  //         </div>

  //         {/* Logo on the right */}
  //         <div className='logo-right'>
  //           <img src={clglogo} alt='Logo Right' />
  //         </div>
  //       </div>

  //       <div className='stamp'>Free Entry</div>

  //       {/* Details section */}
  //       <div className='ticket-bottom'>
  //         <div className='details'>

  //           <ul id='ticket-ul'>
  //             <li className='lii1'>Entry to festival venue</li>
  //             <li className='lii1'>All the sessions</li>
  //             <li className='lii1'>Food court</li>
  //             <li className='lii1'>Fiction tent</li>
  //             <li className='lii1'>DU society culture exhibition</li>
  //           </ul>
  //         </div>

  //         {/* Register Button */}
  //         <div className='registerr-button'>
  //           <button onClick={handleRegisterClick} className='rr-btn'>Register</button>
  //         </div>
  //         <div id='ticket-date'>
  //           <p className='jjj'>Event Date</p>  19 Jan - 21 Jan
  //         </div>
  //       </div>
  //     </motion.div>
  //   </>
  // );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <SectionHeader text="GET YOUR FREE PASS" />
      <div className="TicketSection flex flex-col justify-center items-center mb-16 mt-6">
        <div className="DesktopTicketSection">
          <img src={desktopticket1} alt="mobile ticket" />
          <div className="DesktopTicketButton">
            <Link to="/register">
              <img src={ticketButton} alt="button ticket" />
            </Link>
          </div>
        </div>
        <div className="MobileTicketSection">
          <img src={mobileticket1} alt="desktop ticket" />
          <div className="MobileTicketButton">
            <Link to="/register">
              <img src={ticketButton} alt="button ticket mobile" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Ticket;
