import React from 'react';
import './Ticket.css';
import picc2 from './picc2.png'
import clglogo from './clglogo.png'

const Ticket = () => {
    
  
        const handleRegisterClick = () => {
          window.location.href = '/register';
        };
      
  return (
    <>
    <div className="Ticketheading">
        <p className="headticket">Get Your Free Pass</p>
        </div>
    <div className='ticket'>
      {/* Top section */}
      <div className='ticket-top'>
        {/* Logo on the left */}
        <div className='logo-left'>
          <img src={picc2} alt='Logo Left' />
        </div>
        
        {/* Text in the middle */}
        <div className='ticket-text'>
          {/* <p>For DU students</p> */}
          <h1 className='ticket-head'>Ticket</h1>
        </div>
        
        {/* Logo on the right */}
        <div className='logo-right'>
          <img src={clglogo} alt='Logo Right' />
        </div>
      </div>

      <div className='stamp'>Free Entry</div>
      
      {/* Details section */}
      <div className='ticket-bottom'>
        <div className='details'>
       
          <ul id='ticket-ul'>
            <li className='lii1'>Entry to festival venue</li>
            <li className='lii1'>All the sessions</li>
            <li className='lii1'>Food court</li>
            <li className='lii1'>Fiction tent</li>
            <li className='lii1'>DU society culture exhibition</li>
          </ul>
        </div>
        
        {/* Register Button */}
        <div className='registerr-button'>
          <button onClick={handleRegisterClick} className='rr-btn'>Register</button>
        </div>
        <div id='ticket-date'>
            <p className='jjj'>Event Date</p>  19 Jan - 21 Jan
          </div>
      </div>
    </div>
    </>
  );
}

export default Ticket;
