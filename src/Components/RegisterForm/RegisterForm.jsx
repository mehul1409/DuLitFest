import React, { useState } from "react";
import "./RegisterForm.scss";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";
import { motion } from "framer-motion";
// import SectionHeader from "../../Components/SectionHeader/SectionHeader";


const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    profession: "",
    checkboxes: {
      option1: false,
      option2: false,
      option3: false,
    },
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    profession: "",
    checkboxes: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox" ? { ...prevData[name], [value]: checked } : value,
    }));
  };

  const addToFirestore = async (formData) => {
    try {
      console.log("Adding your data to database");
      if (formData.checkboxes.option1) {
        const docRef = await addDoc(collection(db, "Day1"), {
          ...formData,
          timestamp: serverTimestamp(),
        });
        console.log("Document written with ID: ", docRef.id);
      }
      if (formData.checkboxes.option2) {
        const docRef = await addDoc(collection(db, "Day2"), {
          ...formData,
          timestamp: serverTimestamp(),
        });
        console.log("Document written with ID: ", docRef.id);
      }
      if (formData.checkboxes.option3) {
        const docRef = await addDoc(collection(db, "Day3"), {
          ...formData,
          timestamp: serverTimestamp(),
        });
        // console.log("Document written with ID: ", docRef.id);
      }
      alert("Registered Successfully");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)
    ) {
      errors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Invalid phone number";
    }

    if (!formData.age.trim()) {
      errors.age = "Age is required";
    } else if (isNaN(formData.age) || +formData.age <= 0) {
      errors.age = "Invalid age";
    }

    if (!formData.profession.trim()) {
      errors.profession = "College/Profession is required";
    }

    if (!Object.values(formData.checkboxes).some((isChecked) => isChecked)) {
      errors.checkboxes = "At least one checkbox must be selected";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form data submitted:", formData);
      const send = await addToFirestore(formData);

      //reset the form
      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        profession: "",
        checkboxes: {
          option1: false,
          option2: false,
          option3: false,
        },
      });
    }
  };
  return (
    <>
      <div className="regis">
      {/* <SectionHeader text="Registration Form" /> */}
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="registration-form"
          onSubmit={handleFormSubmit}
        >
          <div>
            <label htmlFor="name">Name:</label>
            <input
              className="reginput"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleInputChange}
            />
            <p className="error">{formErrors.name}</p>
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              className="reginput"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <p className="error">{formErrors.email}</p>
          </div>

          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              className="reginput"
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <p className="error">{formErrors.phone}</p>
          </div>

          <div>
            <label htmlFor="age">Age:</label>
            <input
              className="reginput"
              type="text"
              id="age"
              name="age"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleInputChange}
            />
            <p className="error">{formErrors.age}</p>
          </div>

          <div>
            <label htmlFor="profession">College/Profession:</label>
            <input
              className="reginput"
              type="text"
              id="profession"
              name="profession"
              placeholder="Enter your college/profession"
              value={formData.profession}
              onChange={handleInputChange}
            />
            <p className="error">{formErrors.profession}</p>
          </div>

          <div className="form-group">
            <label>Days you will be attending the fest:</label>
            <div className="checkbox-group">
              <label className="dayylab">
                <div className="dareg">
                  <li className="reglist">Day 1</li>
                </div>
                <input
                  className="dayregi"
                  type="checkbox"
                  name="checkboxes"
                  value="option1"
                  checked={formData.checkboxes.option1}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="checkbox-group">
              <label className="dayylab">
                <div className="dareg">
                  <li className="reglist">Day 2</li>
                </div>
                <input
                  className="dayregi"
                  type="checkbox"
                  name="checkboxes"
                  value="option2"
                  checked={formData.checkboxes.option2}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="checkbox-group">
              <label className="dayylab">
                <div className="dareg">
                  <li className="reglist">Day 3</li>
                </div>
                <input
                  className="dayregi"
                  type="checkbox"
                  name="checkboxes"
                  value="option3"
                  checked={formData.checkboxes.option3}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <p className="error">{formErrors.checkboxes}</p>
          </div>

          <div className="heyreg">
            <button className="regbtn" onClick={handleFormSubmit}>
              Register
            </button>
          </div>
        </motion.form>
      </div>
    </>
  );
};

export default RegisterForm;
