import React, { useState } from "react";
import Animation from "./Animation - 1703414310490.json";
import React, { useState } from "react";
import Animation from "./Animation - 1703414310490.json";
import Lottie from "lottie-react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import "./Contact.css";

const Contact = () => {
  const [user, setuser] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const [user, setuser] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const data = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };
    setuser({ ...user, [name]: value });
  };

  const senddata = async (e) => {
    const { Name, Email, Message } = user;
    const { Name, Email, Message } = user;
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        Email,
        Message,
      }),
    };
        Name,
        Email,
        Message,
      }),
    };

    const res = await fetch(
      "https://oih-database-default-rtdb.firebaseio.com/Message.json",
      options
    );
    console.log(res);
    if (res) {
      alert("your message sent");
    } else {
    const res = await fetch(
      "https://oih-database-default-rtdb.firebaseio.com/Message.json",
      options
    );
    console.log(res);
    if (res) {
      alert("your message sent");
    } else {
      alert("An error occured");
    }
  };

  };

  return (
   <>
      <PageHeader heading="Contact US" />
    <div class="contact-form">
      <div class="container">
        <div class="main">
          <div class="content">
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
                name="Message"
                value={user.Message}
                placeholder="Your Message"
                autoComplete="off"
                onChange={data}
              ></textarea>
              <button className="sendbutton" type="submit" onClick={senddata}>
                Send Message <i class="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
          <div class="form-img">
            <Lottie animationData={Animation} />
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Contact;
export default Contact;
