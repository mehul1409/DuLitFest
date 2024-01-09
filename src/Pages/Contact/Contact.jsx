import React, { useState } from "react";
import Animation from "./Animation - 1703414310490.json";
import Lottie from "lottie-react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import Footer from "../../Components/Footer/Footer";
import "./Contact.css";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [user, setuser] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const data = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  var contactParams = {
    from_name: user.Name,
    from_email: user.Email,
    message: user.Message,
    to_name: "Du",
    phone_no: user.number,
    reply_to: "jiitopticachapter@gmail.com",
  };

  const senddata = async (e) => {
    // const { Name, Email, Message } = user;
    e.preventDefault();
    const templateParams = {
      from_name: Name,
      to_name: "Recipient Name", // Replace with the recipient's name
      message: Message,
      reply_to: Email,
    };

    // Use your Email.js service ID and template ID
    emailjs
      .send(
        "service_bcj3mlt",
        "template_daa7ynl",
        templateParams,
        "h2pO6If_ZBtId09cR"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Your message sent!");
        },
        (error) => {
          console.error("Email failed to send:", error);
          alert("An error occurred while sending the message.");
        }
      );
  };

  return (
    <>
      {/* <PageHeader bgColor="#00416a" fgColor="#e4e5e6" heading="CONTACT US" /> */}
      <PageHeader bgColor="#536976" fgColor="#bbd2c5" heading="CONTACT US" />
      <div className="cccontact-form">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="cccontainer"
        >
          <div className="mmmain">
            <div className="cccontent">
              <h2>Contact Us</h2>
              <form action="#" method="post">
                <input
                  type="text"
                  name="Name"
                  value={user.Name}
                  placeholder="Enter your E-mail"
                  required
                  autoComplete="off"
                  onChange={data}
                />
                <input
                  type="text"
                  name="Email"
                  value={user.Email}
                  placeholder="Enter your Name"
                  required
                  autoComplete="off"
                  onChange={data}
                />
                <textarea
                  rows={5}
                  className="ctesta"
                  name="Message"
                  value={user.Message}
                  placeholder="Your Message"
                  autoComplete="off"
                  onChange={data}
                ></textarea>
                <button className="sendbutton" type="submit" onClick={senddata}>
                  Send Message <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
            <div className="form-img">
              <Lottie animationData={Animation} />
            </div>
          </div>
        </motion.div>
      </div>
      {/* <Footer bgColor="#00416a" /> */}
      <Footer bgColor="#536976" />
    </>
  );
};

export default Contact;
